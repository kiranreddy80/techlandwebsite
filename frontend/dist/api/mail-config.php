<?php
/**
 * Mail settings for the contact endpoint.
 *
 * THE ONLY FILE THAT NEEDS EDITING ON THE SERVER. Fill in the two credential
 * lines below, save, done — no rebuild and no code change required.
 *
 * Deliberately a PHP file rather than a settings page in the browser: a page
 * that accepts mail credentials is something anyone who found the URL could
 * use to send mail as this company. Because this is .php, the server executes
 * it and never sends its contents to a visitor — requesting it directly
 * returns a blank page, not the password.
 *
 * ---------------------------------------------------------------------------
 * HOW TO GET THE PASSWORD
 *
 * This domain's mail is on Google Workspace — its MX record points at
 * SMTP.GOOGLE.com — so the credentials come from Google, not Hostinger:
 *
 *   1. Sign in as info@techlanditsolutions.com
 *   2. Google Account -> Security -> turn on 2-Step Verification
 *   3. Security -> App passwords -> create one, name it "Website"
 *   4. Paste the 16-character code into SMTP_PASS below (spaces removed)
 *
 * It is NOT the normal mailbox password. Google refuses those for SMTP.
 * ---------------------------------------------------------------------------
 */

return [
    // Leave SMTP_USER empty and the endpoint keeps using PHP mail(). Filling
    // both in switches it to authenticated SMTP, which is the reliable path:
    // it can tell whether the message was actually accepted, where mail()
    // reports success either way and loses enquiries silently.
    'SMTP_USER' => '',   // e.g. info@techlanditsolutions.com
    'SMTP_PASS' => '',   // the 16-character app password, no spaces

    // Google Workspace. For another provider, change these two.
    'SMTP_HOST' => 'smtp.gmail.com',
    'SMTP_PORT' => 587,          // 587 = STARTTLS, 465 = implicit TLS

    // Where enquiries are delivered, and who they appear to come from.
    // FROM_EMAIL must be a mailbox that genuinely exists on this domain —
    // sending as an address Google cannot find is why nothing was arriving.
    'TO_EMAIL'   => 'info@techlanditsolutions.com',
    'FROM_EMAIL' => 'info@techlanditsolutions.com',
    'FROM_NAME'  => 'Techland Website',
];
