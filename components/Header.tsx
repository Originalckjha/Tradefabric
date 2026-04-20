"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/config";

const NAV = [
  { href: "/",        label: "Home" },
  { href: "/products",label: "Collection" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq",     label: "FAQ" },
];

export default function Header() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-[#080808]"
      }`}
    >
      {/* ── Top info bar ─────────────────────────────── */}
      <div className="hidden lg:block" style={{ background: "#060606", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-[11px] text-gray-500">
          <span>📍 {SITE.addressShort} &nbsp;·&nbsp; Premium Fabric Exporter &amp; Wholesaler</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phoneE164}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone size={10} /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[62px]">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo-dark.svg"
              alt="TradeFabric — Premium Fabric Supplier Delhi"
              width={196}
              height={50}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${SITE.social.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20fabrics.`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all"
              style={{ color: "#2ecc71", borderColor: "rgba(34,139,34,0.3)" }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.845L.057 23.54l5.76-1.498A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.276-1.535l-3.92 1.02 1.04-3.803A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm"
              style={{ padding: "9px 22px" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[420px]" : "max-h-0"}`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a" }}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all group"
            >
              {label} <ChevronDown size={14} className="text-gray-600 -rotate-90 group-hover:text-white" />
            </Link>
          ))}
          <div className="pt-3 space-y-2 pb-2">
            <Link href="/contact" onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center">
              Get a Quote
            </Link>
            <a href={`tel:${SITE.phoneE164}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-500 hover:text-white transition-colors">
              <Phone size={13} /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
