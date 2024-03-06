"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  if (!validateString(message, 500) || !validateString(senderEmail, 5000)) {
    return {
      error: "Invalid input",
    };
  }
  try {
    await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "iqrafareed56@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      //   text: message as string,
      react: (
        <ContactFormEmail
          message={message as string}
          senderEmail={senderEmail as string}
        />
      ),
    });
  } catch (err: any) {
    return "error" + err.message;
  } finally {
    return "Email sent successfully";
  }
};
