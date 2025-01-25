import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider, createTheme } from "@mantine/core";
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

// const theme = createTheme({
//   primaryColor: 'purple',
//   defaultRadius: 'md',
//   colors: {
//     purple: [
//       '#f3e5f5', 
//       '#e1bee7', 
//       '#ce93d8', 
//       '#ba68c8', 
//       '#ab47bc', 
//       '#9c27b0', 
//       '#8e24aa', 
//       '#7b1fa2', 
//       '#6a1b9a', 
//       '#4a148c'
//     ],
//   },
//   components: {
//     Text: {
//       defaultProps: {
//         color: 'purple.6'
//       }
//     }
//   }
// });

export const metadata: Metadata = {
  title: "Luca Bianchini's Portfolio",
  description: "Welcome to my portfolio site",
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