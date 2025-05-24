import { getThankingMailTemplate } from "@/utils/mailTemplate";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
        return NextResponse.json({ success: false, error: true, message: "Missing fields" }, { status: 400 });
    }

    // Set up transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: "New Contact Message from Webtricker",
            html: `
         <p>You have received a new message from ${name} (${email})</p>
         <br />
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Feedback from Webtricker",
            html: getThankingMailTemplate(),
        });


        return NextResponse.json({ success: true, error: false, message: "Contact form submitted" }, { status: 200 });
    } catch (err) {
        console.error("Email sending error:", err);
        return NextResponse.json({ success: false, error: true, message: "Failed to send email" }, { status: 500 });
    }
}