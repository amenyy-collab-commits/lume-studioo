import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lume Studio — Design & expériences digitales",
  description: "Agence créative — branding, interfaces et sites web premium.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${space.variable} ${instrument.variable} font-[family-name:var(--font-space)] antialiased`}>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
