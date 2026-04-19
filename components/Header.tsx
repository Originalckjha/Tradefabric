"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { SITE } from "@/lib/config";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collection" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/98 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md" : "bg-[#0a0a0a]"}`}>
      {/* Top bar — desktop only */}
      <div className="hidden lg:block border-b border-white/[0.06] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-[11px] text-gray-500">
          <span>📍 {SITE.addressShort} &nbsp;·&nbsp; Premium Fabric Supplier</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phoneE164}`} className="hover:text-green-500 transition-colors flex items-center gap-1">
              <Phone size={10} /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-green-500 transition-colors">{SITE.email}</a>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo-dark.svg" alt="TradeFabric" width={185} height={46} priority className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group">
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-green-500 group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="text-sm font-medium text-gray-400 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:text-white transition-all">
              Bulk Inquiry
            </Link>
            <Link
              href="/products"
              className="text-sm font-semibold text-black px-5 py-2.5 rounded-lg transition-all hover:brightness-110 hover:-translate-y-px"
              style={{ background: "#22c55e" }}
            >
              Explore Collection →
            </Link>
          </div>

          {/* Mobile icons */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/contact" aria-label="Cart" className="p-2 text-gray-400 hover:text-white">
              <ShoppingCart size={20} />
            </Link>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 text-gray-400 hover:text-white">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/[0.06] bg-[#0d0d0d] ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-4 py-4 space-y-1">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-green-400 hover:bg-white/5 rounded-lg transition-all">
              {label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <Link href="/products" onClick={() => setOpen(false)}
              className="block text-center py-3 text-sm font-semibold text-black rounded-lg"
              style={{ background: "#22c55e" }}>
              Explore Collection →
            </Link>
            <a href={`tel:${SITE.phoneE164}`} className="flex items-center justify-center gap-2 py-2 text-sm text-gray-500">
              <Phone size={13} /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
