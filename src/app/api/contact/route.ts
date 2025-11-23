import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateContactEmailHTML, generateConfirmationEmailHTML } from '@/lib/api/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send admin notification email
    const adminEmailHTML = generateContactEmailHTML({
      name,
      email,
      phone,
      company,
      message,
    });

    const adminEmailSent = await sendEmail({
      to: process.env.ADMIN_EMAIL || 'admin@example.com',
      subject: `New Contact Form Submission from ${name}`,
      html: adminEmailHTML,
    });

    // Send confirmation email to user
    const confirmationEmailHTML = generateConfirmationEmailHTML({ name });
    await sendEmail({
      to: email,
      subject: 'We received your message',
      html: confirmationEmailHTML,
    });

    if (!adminEmailSent) {
      console.error('Failed to send admin email');
      // Still return success as user message was validated
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
