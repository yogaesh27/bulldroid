import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../src/styles/index.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Bulldroid | AI, Robotics & Automation",
  description:
    "Bulldroid develops AI, robotics, automation, IoT, and software solutions.",

  openGraph: {
    title: "Bulldroid | AI, Robotics & Automation",
    description:
      "Bulldroid develops AI, robotics, automation, IoT, and software solutions.",
    url: "https://bulldroid.in",
    siteName: "Bulldroid",
    images: [
      {
        url: "/images/og-image.jpg", // Place this image in your public/images folder
        width: 1200,
        height: 630,
        alt: "Bulldroid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}