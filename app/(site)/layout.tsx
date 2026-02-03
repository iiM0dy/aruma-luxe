import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import React from "react";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
