import { sendPortfolioMail, sendIftarInvitationAcceptedEmail } from "../services/mail.service.js";
import { validateContactPayload } from "../utils/validate.js";

export const sendPortfolioContactMail = async (req, res) => {
  try {
    const { error } = validateContactPayload(req.body);
    if (error) {
      return res.status(400).json({ message: error });
    }

    await sendPortfolioMail(req.body);

    return res.status(200).json({
      message: "Message sent successfully 🚀",
    });
  } catch (err) {
    console.error("Mail error:", err);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
};

export const sendIftarInvitaionMail = async (req, res) => {
  try {
    await sendIftarInvitationAcceptedEmail(req.body);

    return res.status(200).json({
      message: "Message sent successfully 🚀",
    });
  } catch (err) {
    console.error("Mail error:", err);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
};
