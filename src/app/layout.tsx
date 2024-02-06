import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import RootLayoutClient from "@/components/layouts/RootLayoutClient";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social network with chat",
  description: "Social network app description",
  icons: "/icons/logo.svg",
};

export const viewport: Viewport = {
  themeColor: "#0E0B18",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
