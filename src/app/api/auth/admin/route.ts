import connectToDatabase from "@/lib/dbConnect";
import { getAdminMailTemplate } from "@/utils/mailTemplate";
import { getMailTransporter } from "@/utils/transporter";
import { generateToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { printErr } from "@/lib/logError";

export const GET = async (req: NextRequest) => {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json(
            { success: false, error: true, message: "Missing fields" },
            { status: 400 }
        );
    }

    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) {
        return NextResponse.json(
            { success: false, error: true, message: "Invalid credentials" },
            { status: 401 }
        );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return NextResponse.json(
            { success: false, error: true, message: "Invalid credentials" },
            { status: 401 }
        );
    }

    // Generate token
    const token = generateToken({ email: user.email, name: user.name, role: user.role });

    // Send email to site admin
    try {
        const transporter = getMailTransporter();
        const html = getAdminMailTemplate()

        await transporter.sendMail({
            from: process.env.EMAIL_USER || "no-reply@example.com",
            to: process.env.ADMIN_EMAIL || "admin@example.com",
            subject: "Admin Login Notification",
            html,
        });
    } catch (err) {
        printErr(err);
    }

    return NextResponse.json({
        success: true,
        error: false,
        message: "Logged in successfully",
        token,
        user: {
            email: user.email,
            name: user.name,
            role: user.role,
        },
    });
};




export const POST = async (req: NextRequest) => {
    try {
        const { email, password, role } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: true, message: "Email and password are required." },
                { status: 400 }
            );
        }
        // return NextResponse.json({success:true,MONGODB_URI});
        await connectToDatabase();


        // Check if admin already exists
        const existingAdmin = await User.findOne({ email });
        if (existingAdmin) {
            return NextResponse.json(
                { success: false, error: true, message: "Admin with this email already exists.", existingAdmin },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create admin
        const newAdmin = await User.create({
            email,
            password: hashedPassword,
            role: role || "subscriber",
        });

        return NextResponse.json(
            {
                success: true,
                error: false,
                message: "Admin created successfully.",
                admin: {
                    _id: newAdmin._id,
                    email: newAdmin.email,
                    name: newAdmin.name,
                    role: newAdmin.role,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        printErr(error);
        return NextResponse.json(
            { success: false, error: true, message: "Something went wrong." },
            { status: 500 }
        );
    }
};