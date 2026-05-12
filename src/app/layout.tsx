import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Internal Gear Exchange",
  description: "Internal marketplace for unused electronics and parts"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="border-b border-slate-200 bg-white">
            <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
              <Link href="/" className="text-lg font-semibold text-slate-800">Internal Gear Exchange</Link>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                <Link href="/">Listings</Link>
                <Link href="/new-listing">New Listing</Link>
                <Link href="/my-listings">My Listings</Link>
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
