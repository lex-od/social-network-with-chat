import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taiga Social",
  description: "App description",
  icons: "/icons/logo.svg",
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// Light / dark theme icon example
// icons: {
//   icon: [
//     { url: "/icons/logo-light-theme.svg" },
//     {
//       url: "/icons/logo-dark-theme.svg",
//       media: "(prefers-color-scheme: dark)",
//     },
//   ],
// }
