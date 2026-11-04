/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const inquiryId = e.record.id;
  const fullName = e.record.get("fullName");
  const email = e.record.get("email");
  const phone = e.record.get("phone");
  const organizationName = e.record.get("organizationName");
  const organizationType = e.record.get("organizationType");
  const requestedBy = e.record.get("requestedBy");
  const deadline = e.record.get("deadline");
  const message = e.record.get("message");
  const submittedAt = e.record.get("created");

  const submissionDate = submittedAt
    ? new Date(submittedAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      })
    : 'n/a';

  const row = (label, value) =>
    value
      ? `<p style="margin: 10px 0;"><strong>${label}:</strong> ${value}</p>`
      : `<p style="margin: 10px 0; color: #999;"><strong>${label}:</strong> <em>not provided</em></p>`;

  const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #1a3a52; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Forest City</h1>
        <p style="margin: 5px 0 0 0; font-size: 14px;">New Financial Statement Review Inquiry</p>
      </div>

      <div style="padding: 20px; background-color: #f9f9f9;">
        <p style="color: #333; margin-top: 0;">A new inquiry was submitted through the financial statement review form on /cpa/review-services.</p>

        <div style="background-color: white; padding: 15px; border-left: 4px solid #1a3a52; margin: 20px 0;">
          <h3 style="color: #1a3a52; margin-top: 0;">Inquiry Details</h3>

          <p style="margin: 10px 0;"><strong>Inquiry ID:</strong> ${inquiryId}</p>
          ${row('Full Name', fullName)}
          <p style="margin: 10px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #1a3a52; text-decoration: none;">${email}</a></p>
          ${row('Phone Number', phone ? `<a href="tel:${phone}" style="color: #1a3a52; text-decoration: none;">${phone}</a>` : '')}
          ${row('Organization Name', organizationName)}
          ${row('Organization Type', organizationType)}
          ${row('Who Asked for the Review', requestedBy)}
          ${row('Deadline', deadline)}
          <p style="margin: 10px 0;"><strong>Submission Date/Time:</strong> ${submissionDate}</p>
        </div>

        <div style="background-color: white; padding: 15px; border-left: 4px solid #1a3a52; margin: 20px 0;">
          <h3 style="color: #1a3a52; margin-top: 0;">Anything We Should Know</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message || 'No message provided.'}</p>
        </div>

        <p style="color: #999; font-size: 12px; margin-top: 20px; text-align: center;">
          This is an automated notification from the Forest City financial statement review form.
        </p>
      </div>

      <div style="background-color: #1a3a52; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">© Forest City. All rights reserved.</p>
      </div>
    </div>
  `;

  const mailMessage = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: "Forest City Review Inquiry Form"
    },
    to: [
      { address: "hello@forestcity.pro" },
      { address: "ML@alumni.nd.edu" }
    ],
    subject: "New Financial Statement Review Inquiry",
    html: emailBody
  });

  $app.newMailClient().send(mailMessage);
  e.next();
}, "review_inquiries");
