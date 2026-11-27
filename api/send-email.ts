import sendgridMail from "@sendgrid/mail";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { name, email, message } = req.body || {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const senderEmail = process.env.SENDGRID_SENDER;

  if (!apiKey || !contactEmail || !senderEmail) {
    return res.status(500).json({
      message: "Email service is not configured",
    });
  }

  sendgridMail.setApiKey(apiKey);

  const msg = {
    to: contactEmail,
    from: senderEmail,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sendgridMail.send(msg);

    return res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return res.status(500).json({
      message: "Error sending message",
    });
  }
}