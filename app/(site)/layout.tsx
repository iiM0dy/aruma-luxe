"use client"

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DemoBanner from "@/app/components/DemoBanner";
import React from "react";
import { usePathname } from "next/navigation";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";
    const isForBusinessesPage = pathname === "/for-businesses";

    return (
        <>
            {!isLoginPage && !isForBusinessesPage && <DemoBanner />}
            {!isLoginPage && <Header />}
            {children}
            {!isLoginPage && <Footer />}
        </>
    );
}
