<?php
/**
 * A minimal authenticated SMTP client.
 *
 * Written by hand rather than pulled from a library because shared hosting has
 * no Composer step — this folder is uploaded as-is, so anything it needs has to
 * already be in it.
 *
 * The point of using SMTP at all is honesty about delivery. PHP's mail() hands
 * the message to a local binary and returns true, which says nothing about
 * whether it was accepted. Speaking SMTP directly means the mail server's own
 * reply codes are visible, so a rejection can be reported instead of a form
 * cheerfully claiming success while enquiries vanish.
 *
 * Returns true on success. On failure returns false and writes the reason into
 * $error so the caller can log it.
 */

function smtp_send(array $cfg, string $to, string $subject, string $html, string $replyTo, ?string &$error = null): bool
{
    $host = $cfg['SMTP_HOST'];
    $port = (int) $cfg['SMTP_PORT'];
    $user = $cfg['SMTP_USER'];
    $pass = $cfg['SMTP_PASS'];
    $from = $cfg['FROM_EMAIL'];
    $name = $cfg['FROM_NAME'];

    // Port 465 expects TLS from the first byte; 587 starts plain and upgrades.
    $transport = $port === 465 ? 'ssl://' : '';
    $socket = @stream_socket_client(
        $transport . $host . ':' . $port,
        $errNo, $errStr, 15, STREAM_CLIENT_CONNECT
    );
    if (!$socket) {
        $error = "connect failed: $errStr ($errNo)";
        return false;
    }
    stream_set_timeout($socket, 15);

    /** Read a full reply, including any continuation lines ("250-" then "250 "). */
    $read = function () use ($socket): string {
        $out = '';
        while (($line = fgets($socket, 1024)) !== false) {
            $out .= $line;
            // A space in the 4th column marks the final line of the reply.
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $out;
    };

    /** Send a command and require one of the expected reply codes. */
    $cmd = function (?string $line, array $expect) use ($socket, $read, &$error): bool {
        if ($line !== null) fwrite($socket, $line . "\r\n");
        $reply = $read();
        $code = (int) substr(ltrim($reply), 0, 3);
        if (!in_array($code, $expect, true)) {
            // Never let the password reach a log if a command echoes back.
            $error = trim($reply);
            return false;
        }
        return true;
    };

    $fail = function (string $why) use ($socket, &$error) {
        if ($error === null || $error === '') $error = $why;
        @fclose($socket);
        return false;
    };

    $helo = 'techlanditsolutions.com';

    if (!$cmd(null, [220]))                 return $fail('no greeting');
    if (!$cmd("EHLO $helo", [250]))         return $fail('EHLO rejected');

    if ($port !== 465) {
        if (!$cmd('STARTTLS', [220]))       return $fail('STARTTLS refused');
        if (!@stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            return $fail('TLS negotiation failed');
        }
        // The conversation restarts once encrypted.
        if (!$cmd("EHLO $helo", [250]))     return $fail('EHLO after TLS rejected');
    }

    if (!$cmd('AUTH LOGIN', [334]))         return $fail('AUTH LOGIN refused');
    if (!$cmd(base64_encode($user), [334])) return $fail('username rejected');
    if (!$cmd(base64_encode($pass), [235])) return $fail('password rejected — check the app password');

    if (!$cmd("MAIL FROM:<$from>", [250]))  return $fail('sender rejected');
    if (!$cmd("RCPT TO:<$to>", [250, 251])) return $fail('recipient rejected');
    if (!$cmd('DATA', [354]))               return $fail('DATA refused');

    $headers = implode("\r\n", [
        'Date: ' . date('r'),
        'From: ' . sprintf('%s <%s>', $name, $from),
        'To: <' . $to . '>',
        'Reply-To: <' . $replyTo . '>',
        'Subject: ' . $subject,
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@techlanditsolutions.com>',
    ]);

    // A lone "." on its own line ends the message, so any such line in the body
    // has to be escaped or the mail would be truncated there.
    $body = preg_replace('/^\./m', '..', $html);

    fwrite($socket, $headers . "\r\n\r\n" . $body . "\r\n.\r\n");
    if (!$cmd(null, [250]))                 return $fail('message not accepted');

    $cmd('QUIT', [221]);
    @fclose($socket);
    return true;
}
