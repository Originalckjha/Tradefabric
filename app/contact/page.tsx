import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Fabric Samples, Bulk Pricing & Enquiries",
  description: `Contact TradeFabric at ${SITE.email} or call ${SITE.phone}. Located at ${SITE.address}. Request fabric samples, bulk pricing, and custom fabric development.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

const contactCards = [
  {
    icon: MapPin, label: "Visit Us",
    lines: ["Badli, Delhi 110042, India"],
    sub: "Open Mon–Sat, 9 AM – 6 PM",
    href: "https://maps.google.com/?q=Badli+Delhi+110042",
    ext: true,
  },
  {
    icon: Phone, label: "Call Us On",
    lines: [SITE.phone],
    sub: "Mon–Sat · 9:00 AM – 6:00 PM IST",
    href: `tel:${SITE.phoneE164}`,
    ext: false,
  },
  {
    icon: Mail, label: "Email Us",
    lines: [SITE.email],
    sub: "We reply within 24 hours",
    href: `mailto:${SITE.email}`,
    ext: false,
  },
  {
    icon: Clock, label: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM IST"],
    sub: "Sunday: Closed",
    href: undefined,
    ext: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: SITE.url },
        { name: "Contact", url: `${SITE.url}/contact` },
      ]} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-[102px] pb-16" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="label mb-4 justify-center">Get in Touch</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-5">
            Let&apos;s Talk<br />
            <span className="text-gradient">Fabrics</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Reach out for samples, pricing, custom development, or general enquiries. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact cards ────────────────────────────────── */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map(({ icon: Icon, label, lines, sub, href, ext }) => {
              const inner = (
                <div className="flex gap-4 p-5 rounded-2xl transition-all group h-full"
                  style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: "rgba(34,139,34,0.1)" }}>
                    <Icon size={18} style={{ color: "#228B22" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">{label}</p>
                    {lines.map(l => <p key={l} className="text-sm font-semibold text-white leading-snug">{l}</p>)}
                    <p className="text-xs text-gray-600 mt-1">{sub}</p>
                  </div>
                </div>
              );
              if (!href) return <div key={label}>{inner}</div>;
              return (
                <a key={label} href={href} target={ext ? "_blank" : undefined}
                  rel={ext ? "noopener noreferrer" : undefined}
                  className="hover:-translate-y-0.5 transition-transform block">
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ───────────────────────────────── */}
      <section className="py-20" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* WhatsApp CTA */}
              <a href={`${SITE.social.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20fabrics.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:-translate-y-0.5 group"
                style={{ border: "1px solid rgba(37,211,102,0.25)", background: "rgba(37,211,102,0.04)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#25d366" }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.845L.057 23.54l5.76-1.498A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.276-1.535l-3.92 1.02 1.04-3.803A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-white">Chat on WhatsApp</p>
                  <p className="text-xs text-gray-400 mt-0.5">Fastest response · {SITE.phone}</p>
                </div>
              </a>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.06)", height: 220 }}>
                <iframe
                  title="TradeFabric location — Badli, Delhi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4!2d77.1445!3d28.7384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01!2sBadli%2C%20Delhi%20110042!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* We can help */}
              <div className="p-5 rounded-2xl"
                style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">We can help with</p>
                <ul className="space-y-2">
                  {[
                    "Fabric samples & swatch books",
                    "Bulk pricing & MOQ enquiries",
                    "Custom dyeing & finishing",
                    "New composition development",
                    "Export & shipping queries",
                    "Live session / video call",
                  ].map(i => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#228B22" }} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Anchors */}
              <div id="bulk" /><div id="session" />
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl"
                style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h2 className="text-2xl font-black text-white mb-1">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Our fabric specialists respond within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section className="py-14"
        style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-5">Ready to start your fabric order?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="btn-ghost">
              Browse Fabrics <ArrowRight size={15} />
            </Link>
            <Link href="/faq" className="btn-ghost">
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
