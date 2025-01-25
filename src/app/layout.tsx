import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
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
  title: "Luca Bianchini | Full Stack Developer",
  description: "19-year-old full stack developer creating intuitive web applications",
  metadataBase: new URL("https://lucabianchini.dev"),
  openGraph: {
    title: "Luca Bianchini - Portfolio",
    description: "19-year-old full stack developer creating intuitive web applications",
    url: "https://lucabianchini.dev",
    images: [
      {
        url: "/images/image_2.jpg", // Use a path from your public folder
        width: 1200,
        height: 630,
        alt: "Luca Bianchini's Portfolio Preview",
      },
    ],
    type: "website",
    siteName: "Luca Bianchini Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Bianchini | Full Stack Developer",
    description: "19-year-old full stack developer creating intuitive web applications",
    images: "/images/image_2.jpg",
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}