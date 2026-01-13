import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const emailTemplate = ({ name, email, message }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f5f7fb;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      color: #111827;
    }
    .container {
      max-width: 640px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    }
    .header {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #ffffff;
      padding: 24px 32px;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 600;
    }
    .content {
      padding: 32px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6b7280;
      margin-bottom: 6px;
    }
    .value {
      font-size: 16px;
      font-weight: 500;
      color: #111827;
    }
    .message-box {
      margin-top: 24px;
      padding: 20px;
      background: #f9fafb;
      border-left: 4px solid #6366f1;
      border-radius: 6px;
      white-space: pre-line;
      line-height: 1.6;
    }
    .footer {
      padding: 20px 32px;
      background: #f3f4f6;
      font-size: 13px;
      color: #6b7280;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 New Portfolio Contact</h1>
    </div>

    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>

      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>

      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">
          ${message}
        </div>
      </div>
    </div>

    <div class="footer">
      This message was sent from your portfolio contact form.
    </div>
  </div>
</body>
</html>
`;

export const sendMail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.OWNER_EMAIL,

    // 🔥 THIS IS THE KEY PART
    replyTo: email,

    subject: `New message from ${name}`,
    html: emailTemplate({ name, email, message }),
  });
};
