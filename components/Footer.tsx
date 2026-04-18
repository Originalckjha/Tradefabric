import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const productLinks = [
  { href: "/products#sportswear", label: "Sportswear Fabrics" },
  { href: "/products#activewear", label: "Activewear Fabrics" },
  { href: "/products#athleisure", label: "Athleisure Fabrics" },
  { href: "/products#technical", label: "Technical Fabrics" },
  { href: "/products#fashion", label: "Fashion Fabrics" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1929" }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/logo-white.svg"
                alt="TradeFabric"
                width={180}
                height={42}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Premium quality knitted and woven fabrics for sportswear,
              activewear, and fashion industries. Engineered for performance,
              crafted for excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/tradefabric"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 hover:bg-amber-600 transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/tradefabric"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(212,132,42,0.1)" }}>
              <p className="text-xs text-amber-400 font-semibold mb-1">Business Hours</p>
              <p className="text-xs text-gray-400">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-amber-500" />
                <span>Anil International<br />New Delhi, India — 110001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={15} className="shrink-0 text-amber-500" />
                <a href="tel:+911100000000" className="hover:text-amber-400 transition-colors">
                  +91-11-0000-0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={15} className="shrink-0 text-amber-500" />
                <a href="mailto:info@tradefabric.com" className="hover:text-amber-400 transition-colors">
                  info@tradefabric.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TradeFabric (Anil International). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>New Delhi, India</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>GST Registered</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>ISO Quality Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
