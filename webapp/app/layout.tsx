import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhatsApp Bulk SMS Video Promo",
  description: "30-second promotional video showcasing WhatsApp bulk messaging service.",
  openGraph: {
    title: "WhatsApp Bulk SMS Video Promo",
    description:
      "Send WhatsApp campaigns for just 20 paisa per message. Share PDFs, videos, and interactive CTAs with high engagement.",
    url: "https://agentic-37f66590.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
