"use client"

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import React from "react";
import { usePathname } from "next/navigation";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    return (
        <>
            {!isLoginPage && <Header />}
            {children}
            {!isLoginPage && <Footer />}
        </>
    );
}
