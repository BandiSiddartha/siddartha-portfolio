import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Siddartha Bandi | Data Scientist & AI Engineer",
  description:
    "Portfolio of Siddartha Bandi — MS Data Science at UND. Specializing in Machine Learning, Deep Learning, and Data Engineering.",
  keywords: ["Data Science", "AI Engineer", "Machine Learning", "Deep Learning", "Python", "PyTorch"],
  authors: [{ name: "Siddartha Bandi" }],
  openGraph: {
    title: "Siddartha Bandi | Data Scientist & AI Engineer",
    description: "MS Data Science · ML/DL · Data Engineering · AWS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#0a0e1a] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
