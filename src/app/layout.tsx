import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from 'next/font/google'
import "./globals.css";

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
const Monts = Montserrat({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Naval Nexus",
  description: "A community based platform for the gam World of Warships",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Monts.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
