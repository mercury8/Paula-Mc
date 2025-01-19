import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// component
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Paula Mcnamara",
  description: "fashion stylist / designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <StairTransition />
        {/* Content area */}
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
