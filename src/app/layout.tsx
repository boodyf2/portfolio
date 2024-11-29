import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
    title: "Abdalrahman Mahmoud's Portfolio",
    description: "A Modern Next.js 15 portfolio",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["400"],
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html className="scroll-smooth" lang="en">
            <body
                className={cn(
                    "bg-gray-900 text-white antialiased font-sans",
                    inter.variable,
                    calistoga.variable
                )}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
