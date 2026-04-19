import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Fabric Samples, Bulk Pricing & Enquiries",
  description: `Contact TradeFabric at ${SITE.email} or call ${SITE.phone}. Located at ${SITE.address}. Request fabric samples, bulk pricing, and custom fabric development.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

const details = [
  { icon: MapPin, label: "Address",        lines: ["Badli, Delhi 110042, India"],      href: "https://maps.google.com/?q=Badli+Delhi+110042" },
  { icon: Phone,  label: "Call Us On",     lines: [SITE.phone],                        href: `tel:${SITE.phoneE164}` },
  { icon: Mail,   label: "Email Us",       lines: [SITE.email],                        href: `mailto:${SITE.email}` },
  { icon: Clock,  label: "Business Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM IST","Sun: Closed"], href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "Contact", url: `${SITE.url}/contact` }]} />

      {/* Hero */}
      <section className="pt-[105px] pb-16 bg-black border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold uppercase tracking-widest mb-5">Get in Touch</div>
          <h1 className="text-5xl font-black text-white mb-4">Let&apos;s Talk Fabrics</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Reach out for samples, pricing, custom development, or general enquiries. We typically respond within 24 hours.</p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              {details.map(d => {
                const inner = (
                  <div key={d.label} className="flex gap-4 p-4 rounded-xl bg-[#111] border border-white/[0.06] hover:border-green-500/25 hover:bg-green-500/[0.03] transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <d.icon size={16} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 mb-1">{d.label}</p>
                      {d.lines.map(l => <p key={l} className="text-sm text-gray-200">{l}</p>)}
                    </div>
                  </div>
                );
                return d.href
                  ? <a key={d.label} href={d.href} target={d.label === "Address" ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
                  : <div key={d.label}>{inner}</div>;
              })}

              {/* WhatsApp */}
              <a href={`${SITE.social.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20fabrics.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-[#25d366]/25 bg-[#25d366]/5 hover:bg-[#25d366]/10 transition-all group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#25d366" }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.845L.057 23.54l5.76-1.498A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.276-1.535l-3.92 1.02 1.04-3.803A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Chat on WhatsApp</p>
                  <p className="text-xs text-gray-500">Quick replies · {SITE.phone}</p>
                </div>
              </a>

              {/* We can help */}
              <div className="p-5 rounded-xl bg-[#111] border border-white/[0.06]">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">We can help with</p>
                <ul className="space-y-1.5">
                  {["Fabric samples & swatch books","Bulk pricing & MOQ enquiries","Custom dyeing & finishing","New composition development","Export & shipping queries","Live session / video call"].map(i => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-green-500 shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-[#111] border border-white/[0.06]">
                <h2 className="text-2xl font-black text-white mb-1">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">Our fabric specialists respond within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
