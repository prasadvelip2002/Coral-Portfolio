import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate the incoming data
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Nodemailer or Resend here.
    // Since we don't have SMTP credentials yet, we will simulate a successful email send.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: ['delivered@resend.dev'],
    //   subject: `New Lead: ${name} from ${company}`,
    //   html: `<p>...</p>`,
    // });
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, just return a success response
    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
