import { transporter } from './../lib/transporter.js'
import { portfolioEmailTemplate } from '../templates/portfolioContact.template.js'
import { invitationAcceptedTemplate } from '../templates/iftarInvitation.template.js'

export const sendPortfolioMail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.OWNER_EMAIL,

    // 🔥 THIS IS THE KEY PART
    replyTo: email,

    subject: `New message from ${name}`,
    html: portfolioEmailTemplate({ name, email, message }),
  });
};

export async function sendIftarInvitationAcceptedEmail({
  facultyName,
  eventDate,
  eventTime,
  venue
}) {

  await transporter.sendMail({
    from: `"Iftar Invitation" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL,
    subject: `Invitation Accepted - ${facultyName}`,
    html: invitationAcceptedTemplate({
      facultyName,
      eventDate,
      eventTime,
      venue
    })
  });
}