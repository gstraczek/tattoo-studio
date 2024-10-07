import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/ui/Navbar";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "TypeScript Next.js Stripe Example",
    template: "%s | Next.js + TypeScript Example",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node.",
    images: [
      {
        url: "https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png",
      },
    ],
    site: "@StripeDev",
    title: "TypeScript Next.js Stripe Example",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
          <Navbar />
        <div className="container mx-auto p-4">
          <header className="bg-white shadow-md py-4 mb-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-blue-600">
                {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
              </Link>
              <h1 className="text-2xl font-light">
                <span className="text-gray-600">Kup voucher na tatuaż</span>
              </h1>
            </div>
          </header>
          <main>{children}</main>
        </div>
       
      </body>
    </html>
  );
}