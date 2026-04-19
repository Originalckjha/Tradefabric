import type { Metadata } from "next";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description: "Answers to common questions about TradeFabric's fabrics, MOQs, samples, shipping and custom orders.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const faqs = [
  { q: "What is the minimum order quantity (MOQ)?", a: "Our MOQ varies by fabric type — typically 100–500 metres for standard fabrics. We are flexible for sample orders and can discuss lower MOQs for new clients. Contact us to discuss your specific requirements." },
  { q: "How do I request fabric samples?", a: "You can request samples via our Contact page or by WhatsApp/email. We typically dispatch physical swatches within 5–7 working days. Standard sample charges apply and are adjusted against bulk orders." },
  { q: "What fabric compositions do you specialise in?", a: "We specialise in polyester/nylon spandex blended knitted and woven fabrics — including 88/12 Polyester Spandex, 80/20 Nylon Spandex, Supplex Nylon blends, recycled polyester, cotton/spandex, modal and bamboo blends." },
  { q: "Do you offer custom dyeing and finishing?", a: "Yes. We offer custom dyeing, printing, finishing treatments (DWR, anti-odour, UV protection) and custom GSM/weight development. Minimum quantities apply for custom orders." },
  { q: "Which countries do you export to?", a: "We export to 50+ countries across Asia, Europe, the Americas, and the Middle East. We work with established freight partners and can handle all documentation for international shipments." },
  { q: "How long does bulk order production take?", a: "Standard production lead time is 3–5 weeks depending on fabric type, quantity and finishing requirements. We provide a confirmed timeline at the point of order." },
  { q: "What quality certifications do you have?", a: "Our fabrics are tested to ISO standards including colour fastness (ISO 105), tensile strength (ISO 13934), and dimensional stability. We can provide test reports on request." },
  { q: "Can I schedule a video call or live session?", a: `Absolutely. Contact us at ${SITE.email} or on WhatsApp to schedule a live session where we can show you our fabric range and discuss your requirements in detail.` },
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "FAQ", url: `${SITE.url}/faq` }]} />

      <section className="pt-[105px] pb-16 bg-black border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold uppercase tracking-widest mb-5">Help Centre</div>
          <h1 className="text-5xl font-black text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400">Everything you need to know about ordering fabrics from TradeFabric.</p>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111] border border-white/[0.06] hover:border-green-500/20 transition-all">
                <h2 className="text-base font-bold text-white mb-3">{faq.q}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl text-center border border-green-500/20 bg-green-500/5">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-gray-400 text-sm mb-6">Our team is happy to help — reach out via email, phone or WhatsApp.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-black rounded-lg" style={{ background: "#22c55e" }}>
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
