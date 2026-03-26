import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    req.log.error("Gmail credentials not configured");
    res.status(503).json({ error: "Email service not configured." });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      to: "graviens.jorgh@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — graviensjorgh.co`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F7F5F2; border-radius: 12px;">
          <h2 style="color: #0D1B2A; font-weight: 600; margin-bottom: 24px; font-size: 20px;">New contact from your website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 80px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #0D1B2A; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #0D1B2A; font-weight: 500;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0D1B2A; line-height: 1.6; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e1da; color: #9ca3af; font-size: 12px;">
            Sent from graviensjorgh.co contact form
          </div>
        </div>
      `,
    });

    req.log.info({ name, email }, "Contact email sent successfully");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
