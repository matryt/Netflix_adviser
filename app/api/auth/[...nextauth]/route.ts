import { authOptions } from '../authOptions';
import NextAuth from 'next-auth';

export async function GET(req: never, res: never) {
    return NextAuth(req, res, authOptions);
}

export async function POST(req: never, res: never) {
    return NextAuth(req, res, authOptions);
}