import prisma from "@/app/(common)/db";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    const params = new URLSearchParams(req.url.split("?")[1]);
    if (!params.get("email")) {
        return NextResponse.json("Email is required", {status: 400});
    }
    const user = await prisma.account.findFirst({
        where: {
            email: params.get("email") || ""
        }
    });
    if (!user) {
        return NextResponse.json("User not found", {status: 404});
    }
    return NextResponse.json("Found", {status: 200});
}