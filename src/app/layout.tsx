import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { connectToMongoDB } from "../../lib/db";
import "./globals.css";

const inter = IBM_Plex_Sans_Arabic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor",
  description:
    "نوور وێبسایتێکی قازانج نەویستە ئامانجمان بڵاوکردنەوەی زۆرترین زانیاریە دەربارەی ئاینی ئیسلام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="h-full">
            <Header />
            <main className="min-h-full">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
