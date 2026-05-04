import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirLock — Source-to-sink firewall for agentic browsing",
  description: "Airlock strips prompt injection, hostile instructions, and hidden content before your agent ever sees it. The protocol that makes agentic browsing safe by default.",
  keywords: ["AI security", "prompt injection", "agentic browsing", "agent safety", "web security", "LLM security", "airlock protocol"],
  openGraph: {
    title: "AirLock — The protocol for agent-safe web content",
    description: "Let agents explore the web without letting the web rewrite your agents.",
    url: "https://airlock.codes",
    siteName: "AirLock",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirLock — Source-to-sink firewall for agentic browsing",
    description: "Airlock strips prompt injection, hostile instructions, and hidden content before your agent ever sees it.",
    creator: "@AirLockcodes",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
