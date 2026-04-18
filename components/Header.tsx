"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.svg"
              alt="TradeFabric — Premium Performance Textiles"
              width={200}
              height={46}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200"
                  style={{ backgroundColor: "#d4842a" }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="tel:+911100000000"
              className="text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors"
            >
              +91-11-0000-0000
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              style={{ backgroundColor: "#d4842a" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } bg-white border-t border-gray-100`}
      >
        <div className="px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-base font-medium text-gray-700 border-b border-gray-100 hover:text-amber-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 block text-center px-5 py-3 text-sm font-semibold text-white rounded-lg"
            style={{ backgroundColor: "#d4842a" }}
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
