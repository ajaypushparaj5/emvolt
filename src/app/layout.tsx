import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emvolt Electromechanical Work LLC",
  description: "Premium MEP engineering solutions based in UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased text-white bg-transparent`}
    >
      <body className="min-h-full flex flex-col pt-0 m-0 overflow-x-hidden bg-transparent">{children}</body>
    </html>
  );
}
