import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "404 — Page Not Found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 bg-black">
      <div>
        <div className="text-8xl font-black text-green-500/20 mb-2">404</div>
        <h1 className="text-3xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-black rounded-lg" style={{ background: "#22c55e" }}>
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
