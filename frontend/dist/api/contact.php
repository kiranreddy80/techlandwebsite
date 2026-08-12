<?php
/**
 * POST /api/contact — the website's enquiry endpoint, for PHP hosting.
 *
 * This is the shared-hosting counterpart to /api/contact.js (the Vercel
 * function). Both answer the same URL and speak the same JSON, so the
 * frontend build is identical either way — it always posts to /api/contact
 * on its own domain and never needs to know which one is behind it.
 *
 * It lives in public/ so the build copies it into dist/, which means the
 * single dist/ folder handed to a host contains both the website and the
 * endpoint that receives its enquiries. No second server, no CORS, and no
 * chance of an http:// API being called from an https:// page.
 *
 * Configure the two values below before uploading.
 */

// ---------------------------------------------------------------- config

/** Where enquiries are delivered. */
const ADMIN_EMAIL = 'info@techlanditsolutions.com';

/**
 * The From: address. This MUST be a mailbox that really exists.
 *
 * It was noreply@ and nothing arrived. The domain's MX points at
 * SMTP.GOOGLE.com, so mail is hosted on Google Workspace — and Google is
 * strict about messages claiming to come from an address on a domain it hosts
 * but cannot find. noreply@ was never created, so it had nowhere to belong.
 *
 * info@ is a real mailbox, and the domain's SPF authorises Hostinger to send
 * on its behalf, so this passes the checks that were failing. Sending from
 * info@ to info@ is normal for a contact form.
 *
 * Sending "From: <the visitor's gmail>" would be the other classic mistake:
 * this domain has no authority to send as gmail.com. The visitor goes in
 * Reply-To instead, so hitting reply still answers them directly.
 */
const FROM_EMAIL = 'info@techlanditsolutions.com';
const FROM_NAME  = 'Techland Website';

// ----------------------------------------------------------------- setup

header('Content-Type: application/json; charset=utf-8');

/** Answer with JSON and stop. */
function reply(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    reply(405, ['success' => false, 'message' => 'Method not allowed.']);
}

// The frontend sends JSON; accept a normal form post too, so the endpoint
// still works if it is ever called from a plain HTML form.
$raw   = file_get_contents('php://input');
$data  = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$field = static fn(string $key): string => trim((string)($data[$key] ?? ''));

$name    = $field('name');
$email   = $field('email');
$phone   = $field('phone');
$subject = $field('subject');
$message = $field('message');

// ------------------------------------------------------------ validation

if ($name === '' || $email === '' || $message === '') {
    reply(400, ['success' => false, 'message' => 'Please provide name, email and message.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    reply(400, ['success' => false, 'message' => 'Please provide a valid email address.']);
}

// A newline in a header value lets an attacker append their own headers and
// use this form to relay spam. Anything going into a header is refused if it
// contains one.
foreach ([$email, $subject, $name] as $headerBound) {
    if (preg_match('/[\r\n]/', $headerBound)) {
        reply(400, ['success' => false, 'message' => 'Invalid characters in submission.']);
    }
}

// ---------------------------------------------------------------- compose

/** Escape for HTML so submitted text cannot alter the email's markup. */
$e = static fn(string $v): string => htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

$row = static function (string $label, string $value) use ($e): string {
    $shown = $value === '' ? 'Not provided' : $e($value);
    return '<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">'
         . '<strong style="color:#163198;display:block;font-size:12px;text-transform:uppercase;">' . $label . '</strong>'
         . '<span style="font-size:16px;color:#333;">' . $shown . '</span>'
         . '</td></tr>';
};

$html = '<div style="font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:12px;overflow:hidden;">'
      . '<div style="background:linear-gradient(135deg,#163198 0%,#0d257a 100%);color:#fff;padding:25px;text-align:center;">'
      . '<h2 style="margin:0;font-size:24px;letter-spacing:1px;">New Contact Inquiry</h2>'
      . '<p style="margin:5px 0 0;opacity:.8;">A new message has been received from your website.</p></div>'
      . '<div style="padding:30px;background:#fff;"><table style="width:100%;border-collapse:collapse;">'
      . $row('Full Name', $name)
      . $row('Email Address', $email)
      . $row('Phone Number', $phone)
      . $row('Subject', $subject === '' ? 'General Inquiry' : $subject)
      . '<tr><td style="padding:20px 0 10px;">'
      . '<strong style="color:#163198;display:block;font-size:12px;text-transform:uppercase;margin-bottom:8px;">Message</strong>'
      . '<div style="background:#f9f9f9;padding:15px;border-radius:8px;border-left:4px solid #163198;color:#444;">'
      . nl2br($e($message))
      . '</div></td></tr></table></div>'
      . '<div style="background:#f4f6f9;padding:15px;text-align:center;color:#888;font-size:12px;">'
      . 'Sent automatically from techlanditsolutions.com</div></div>';

$mailSubject = 'New Inquiry: ' . ($subject === '' ? 'No Subject' : $subject) . ' - from ' . $name;

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
]);

// ------------------------------------------------------------------- send

// The fifth argument sets the envelope sender, which several shared hosts
// require before they will accept the message for delivery.
$sent = @mail(ADMIN_EMAIL, $mailSubject, $html, $headers, '-f' . FROM_EMAIL);

if (!$sent) {
    // Never report success for mail that did not leave. The form shows its
    // error state and the visitor is told to call instead, rather than being
    // promised a reply to an enquiry nobody received.
    error_log('[contact] mail() failed for ' . $email);
    reply(502, [
        'success' => false,
        'message' => 'We could not send your message right now. Please call or WhatsApp us instead.',
    ]);
}

reply(201, ['success' => true, 'message' => 'Message received successfully!']);
