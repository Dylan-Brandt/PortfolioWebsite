import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import "./globals.css";

const googleSansCode = Google_Sans_Code({
  variable: '--font-google-sans-code',
  display: 'swap',
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "DB on the Net",
  description: "Personal website highlighting programming projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googleSansCode.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
