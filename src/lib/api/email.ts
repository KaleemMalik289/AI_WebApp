// Email service for sending contact form submissions
// Configure with your email provider (SendGrid, Brevo, etc.)

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

const SENDER_EMAIL = process.env.SENDER_EMAIL || "noreply@aiconsultancy.com";

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Using Brevo (formerly Sendinblue) API as an example
    // You can replace with SendGrid, Mailgun, etc.
    
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        sender: { name: "AI Consultancy", email: SENDER_EMAIL },
        to: [{ email: options.to }],
        subject: options.subject,
        htmlContent: options.html,
      }),
    });

    if (!response.ok) {
      console.error("Email send failed:", response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Email service error:", error);
    return false;
  }
}

export function generateContactEmailHTML(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
      <hr style="margin-top: 20px; border: none; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 12px;">This is an automated email. Please reply directly to ${data.email}</p>
    </div>
  `;
}

export function generateConfirmationEmailHTML(data: {
  name: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Thank You, ${data.name}!</h2>
      <p>We've received your message and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to book a free discovery call with us:</p>
      <p style="text-align: center; margin: 30px 0;">
        <a href="https://calendly.com/your-calendly-link" 
           style="background-color: #000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Book a Free Discovery Call
        </a>
      </p>
      <p>Best regards,<br>AI Consultancy Team</p>
    </div>
  `;
}
