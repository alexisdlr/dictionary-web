import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/provider/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dictionary Web App",
  description: "A dictionary web app built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-absolute-dark bg-white">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
