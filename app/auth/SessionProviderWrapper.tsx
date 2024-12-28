"use client";

import { SessionProvider } from "next-auth/react";

interface SessionProviderWrapperProps {
    children: React.ReactNode;
    session?: never; // Replace 'any' with the actual type from next-auth
}

export function SessionProviderWrapper({
                                           children,
                                           session,
                                       }: SessionProviderWrapperProps) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}