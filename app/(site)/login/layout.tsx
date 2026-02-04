

import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Aruma Luxe | عطور فاخرة",
    description: "عطور فاخرة بلمسة شرقية تدوم طويلاً - اكتشف مجموعتنا الحصرية من الروائح",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <body>
                {children}
            </body>
        </html>
    );
}