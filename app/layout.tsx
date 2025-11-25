import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORMÉ - Activewear Designed for Indian Bodies",
  description: "Culturally intelligent activewear merging sustainability with functionality, tailored specifically for Indian proportions and comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
