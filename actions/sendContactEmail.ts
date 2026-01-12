// src/actions/sendContactEmail.ts
"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const recaptchaToken = formData.get("recaptchaToken") as string;

  // Verify reCAPTCHA (server-side)
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey || !recaptchaToken) {
    return { success: false, message: "reCAPTCHA verification failed." };
  }

  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
    { method: "POST" }
  );
  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return { success: false, message: "reCAPTCHA verification failed." };
  }

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_EMAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Message sent. Glad to hear from you!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}