import prisma from "@/app/(common)/db";
import {NextResponse} from "next/server";

export async function GET() {
    const countries = await prisma.country.findMany();
    return NextResponse.json({countries});
}