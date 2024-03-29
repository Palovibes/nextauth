"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Removed the metadata export

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
