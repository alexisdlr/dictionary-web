import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/theme-provider";
import "./globals.css";
import FontProvider from "@/components/providers/font-provider";


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
      <FontProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FontProvider>
    </html>
  );
}
