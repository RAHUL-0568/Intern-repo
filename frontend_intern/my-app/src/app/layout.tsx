import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intern Web App",
  description: "Next.js Intern Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-gray-50
          text-gray-900
          flex flex-col
          min-h-screen
        `}
      >

        {/* Header */}
        <header className="bg-white shadow-sm border-b">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">

            <Navigation />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t text-gray-500">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">

            ©  Intern Web App
          </div>
        </footer>

      </body>
    </html>
  );
}
