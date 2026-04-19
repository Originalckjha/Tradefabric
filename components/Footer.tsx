import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/config";

const connectLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/contact#bulk", label: "Bulk Inquires" },
  { href: "/contact#session", label: "Schedule A Live Session" },
];
const quickLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/faq", label: "F.A.Q." },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  const cls = "flex items-center gap-2.5 text-sm text-gray-500 hover:text-green-400 transition-colors group";
  const inner = (
    <>
      <span className="w-5 h-px bg-green-600/50 group-hover:w-7 group-hover:bg-green-400 transition-all duration-200 shrink-0" />
      {label}
    </>
  );
  return isExternal
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
    : <Link href={href} className={cls}>{inner}</Link>;
}

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400">
      {/* Contact strip */}
      <div className="border-y border-white/[0.06] bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: MapPin, label: "Address", value: SITE.addressShort, href: "https://maps.google.com/?q=Badli+Delhi+110042" },
              { icon: Phone, label: "Call Us On", value: SITE.phone, href: `tel:${SITE.phoneE164}` },
              { icon: Mail,  label: "Email Us",   value: SITE.email,  href: `mailto:${SITE.email}` },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={label === "Address" ? "_blank" : undefined}
                rel={label === "Address" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-green-500/25 hover:bg-green-500/[0.04] transition-all group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <Icon size={17} className="text-green-400" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm text-gray-200 group-hover:text-white transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image src="/logo-dark.svg" alt="TradeFabric" width={170} height={40} className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Tradefabric specializes in trading high-quality imported and domestic fabrics — specially polyester/nylon spandex blended knitted and woven fabrics. Quick-drying, breathable, durable and perfect for sports and casual wear.
            </p>
            <div className="flex gap-2">
              {[
                { label: "Facebook", href: SITE.social.facebook, d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", href: SITE.social.instagram, d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01", isStroke: true },
                { label: "YouTube", href: SITE.social.youtube, d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" },
              ].map(({ label, href, d, isStroke }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white transition-all">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill={isStroke ? "none" : "currentColor"} stroke={isStroke ? "currentColor" : "none"} strokeWidth={isStroke ? "2" : "0"}>
                    <path d={d} />
                    {label === "Instagram" && <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />}
                    {label === "YouTube" && <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Connect With Us</h3>
            <ul className="space-y-3">{connectLinks.map(l => <li key={l.href}><FooterLink {...l} /></li>)}</ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">{quickLinks.map(l => <li key={l.href}><FooterLink {...l} /></li>)}</ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Subscribe For Updates</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Get Regular Fabric Updates and deals from us on WhatsApp
            </p>
            <ul className="space-y-3 mb-5">
              <li><FooterLink href={`${SITE.social.whatsapp}?text=Subscribe`} label="Subscription For Regular Supplies" /></li>
            </ul>
            <a href={`${SITE.social.whatsapp}?text=Hi%2C%20I%20want%20to%20subscribe%20for%20fabric%20updates`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white transition-all hover:-translate-y-px"
              style={{ background: "#25d366", boxShadow: "0 2px 12px rgba(37,211,102,0.25)" }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.845L.057 23.54l5.76-1.498A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.276-1.535l-3.92 1.02 1.04-3.803A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Join on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>Made with ♥ by Trade Fabric &nbsp;·&nbsp; © {new Date().getFullYear()} TradeFabric. All rights reserved.</span>
          <span>{SITE.address}</span>
        </div>
      </div>
    </footer>
  );
}
