import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Package, Phone } from "lucide-react";
import { SITE } from "@/lib/config";

export const metadata: Metadata = { title: "404 — Page Not Found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-[#080808]">
      <div className="bg-grid absolute inset-0" style={{ opacity: .5 }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(34,139,34,.06) 0%,transparent 70%)" }} />

      <div className="relative text-center max-w-lg">
        <div className="text-[10rem] font-black leading-none select-none mb-2"
          style={{ color: "rgba(34,139,34,0.08)" }}>
          404
        </div>
        <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "#228B22" }} />
        <h1 className="text-3xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { href: "/",         icon: Home,    label: "Home" },
            { href: "/products", icon: Package, label: "Fabrics" },
            { href: "/contact",  icon: Phone,   label: "Contact" },
          ].map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href}
              className="flex flex-col items-center gap-2 py-4 rounded-2xl text-sm font-semibold text-gray-400 hover:text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Icon size={18} style={{ color: "#228B22" }} />
              {label}
            </Link>
          ))}
        </div>

        <Link href="/" className="btn-primary inline-flex">
          Back to Home <ArrowRight size={16} />
        </Link>

        <p className="mt-8 text-xs text-gray-700">
          {SITE.name} · {SITE.addressShort} · {SITE.phone}
        </p>
      </div>
    </div>
  );
}
