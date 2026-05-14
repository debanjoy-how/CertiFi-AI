import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";

import { APP_NAME, TAGLINE } from "@/lib/constants";

import "@/app/globals.css";

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontDisplay = Orbitron({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: `${APP_NAME} | Hackathon Starter`,
  description: TAGLINE
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased`}>
        <div className="fixed inset-0 -z-20 bg-grid opacity-30" />
        <div className="fixed inset-0 -z-10 bg-spotlight" />
        {children}
      </body>
    </html>
  );
}

