import { printErr } from "@/lib/logError";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const cookieHeader = await cookies();
        cookieHeader.delete("accessToken");
        return NextResponse.json({ success: true, error: false, message: 'Logged out successfully' }, { status: 200 });
    } catch (error) {
        printErr(error);
        return NextResponse.json({ success: false, error: true, message: 'Internal Server Error during logout' }, { status: 200 });
    }
}