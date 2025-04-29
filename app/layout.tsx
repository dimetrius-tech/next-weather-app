import {ReactNode} from "react";
import "@/app/globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import type {Metadata} from "next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next Weather",
    description: "App to check weather around the globe",
};

export default function RootLayout({ children }: {children: ReactNode}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <main>{children}</main>
        </body>
        </html>
    )
}