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
  title: "Luca Bianchini's Portfolio",
  description: "My personal portfolio website",
  openGraph: {
    title: "Luca Bianchini's Portfolio",
    description: "My personal portfolio website",
    url: "https://lucabianchini.dev",
    images: [
      {
        url: "https://ibb.co/HnQq00N",
        width: 150,
        height: 150,
        alt: "Preview of Luca Bianchini's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Bianchini's Portfolio",
    description: "My personal portfolio website",
    images: "https://ibb.co/HnQq00N",
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
