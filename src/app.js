import express from "express";
import cors from "cors";
import contactRouter from "./routes/mail.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/contact", contactRouter);

export default app;
