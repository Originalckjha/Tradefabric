import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions about Fabric Ordering",
  description:
    "Answers to common questions about TradeFabric's fabrics, MOQs, samples, shipping and custom orders. Wholesale fabric supplier Badli, Delhi.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our MOQ varies by fabric type — typically 100–500 metres for standard fabrics. We are flexible for sample orders and can discuss lower MOQs for new clients. Contact us to discuss your specific requirements.",
  },
  {
    q: "How do I request fabric samples?",
    a: "You can request samples via our Contact page, WhatsApp or email. We dispatch physical swatches within 5–7 working days. Standard sample charges apply and are credited against your bulk order.",
  },
  {
    q: "What fabric compositions do you specialise in?",
    a: "We specialise in polyester/nylon spandex blended knitted and woven fabrics — including 88/12 Polyester Spandex, 80/20 Nylon Spandex, Supplex Nylon blends, recycled polyester, cotton/spandex, modal and bamboo blends.",
  },
  {
    q: "Do you offer custom dyeing and finishing?",
    a: "Yes. We offer custom dyeing, printing, and finishing treatments including DWR (water-repellent), anti-odour, UV protection and custom GSM development. Minimum quantities apply for custom orders.",
  },
  {
    q: "Which countries do you export to?",
    a: "We export to 50+ countries across Asia, Europe, the Americas, and the Middle East. We work with established freight partners and handle all documentation for international shipments.",
  },
  {
    q: "How long does bulk order production take?",
    a: "Standard production lead time is 3–5 weeks depending on fabric type, quantity and finishing requirements. We provide a confirmed timeline at the point of order.",
  },
  {
    q: "What quality certifications do you have?",
    a: "Our fabrics are tested to ISO standards including colour fastness (ISO 105), tensile strength (ISO 13934), and dimensional stability. Test reports are available on request.",
  },
  {
    q: "Can I schedule a video call or live session?",
    a: `Absolutely. Contact us at ${SITE.email} or on WhatsApp to schedule a live session where we can walk you through our fabric range and discuss your requirements in detail.`,
  },
  {
    q: "Do you offer recycled or sustainable fabrics?",
    a: "Yes — we carry a growing range of recycled polyester (rPET), organic cotton and bamboo blends for brands with sustainability commitments. Ask us for our eco fabric catalogue.",
  },
  {
    q: "What is your payment policy for new clients?",
    a: "We typically work on advance payment for first orders, with credit terms available for established clients. We accept bank transfer (TT), and can discuss Letter of Credit for large international orders.",
  },
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: SITE.url },
        { name: "FAQ", url: `${SITE.url}/faq` },
      ]} />
      <FAQJsonLd faqs={faqs} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-[102px] pb-16" style={{ background: "#080808" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="label mb-4 justify-center">Help Centre</span>
          <h1 className="text-5xl font-black text-white mt-4 mb-4">
            Frequently Asked<br />
            <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Everything you need to know about ordering fabrics from TradeFabric.
          </p>
        </div>
      </section>

      {/* ── FAQ accordion ────────────────────────────────── */}
      <section className="pb-24" style={{ background: "#080808" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Contact options ──────────────────────────────── */}
      <section className="py-16" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">Still Have Questions?</h2>
            <p className="text-gray-400">Our team is happy to help — reach out via any channel below.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: `${SITE.social.whatsapp}?text=Hi%2C%20I%20have%20a%20question.`, color: "#25d366", ext: true },
              { icon: Phone,         label: "Call Us",  value: SITE.phone,  href: `tel:${SITE.phoneE164}`, color: "#228B22", ext: false },
              { icon: Mail,          label: "Email Us", value: SITE.email,  href: `mailto:${SITE.email}`,  color: "#228B22", ext: false },
            ].map(({ icon: Icon, label, value, href, color, ext }) => (
              <a key={label} href={href} target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}15` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-white">{value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary inline-flex">
              Send a Detailed Enquiry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
