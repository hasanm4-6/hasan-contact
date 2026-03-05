import { Router } from "express";
import { sendPortfolioContactMail, sendIftarInvitaionMail } from "../controllers/mail.controller.js";

const router = Router();

router.post("/portfolio", sendPortfolioContactMail);
router.post("/iftar-invitation", sendIftarInvitaionMail);

export default router;
