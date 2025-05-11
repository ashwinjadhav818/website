import type { Metadata } from "next";
import { FiraMono400 } from '@/fonts'
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Ashwin Jadhav",
    description: "Ashwin Jadhav's portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                style={FiraMono400.style}
            >
                <div className="min-h-screen flex flex-col justify-between pt-18 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
                    <main className="max-w-[60ch] mx-auto w-full space-y-6">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
