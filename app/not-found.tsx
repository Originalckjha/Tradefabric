import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center px-4"
      style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}
    >
      <div>
        <div className="text-8xl font-bold mb-4" style={{ color: "#d4842a" }}>404</div>
        <h1
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-md"
          style={{ backgroundColor: "#d4842a" }}
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
