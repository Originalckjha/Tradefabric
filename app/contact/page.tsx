import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Request Fabric Samples & Pricing",
  description:
    "Contact TradeFabric for fabric samples, bulk pricing, and custom fabric development. Based in New Delhi, India. Supplying sportswear and activewear fabrics globally.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Anil International", "New Delhi, India — 110001"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91-11-0000-0000"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@tradefabric.com", "sales@tradefabric.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM IST", "Sun: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(212,132,42,0.15)", color: "#e29f4d" }}
          >
            Get in Touch
          </span>
          <h1
            className="text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let&apos;s Talk Fabrics
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Reach out for samples, pricing, custom development, or general enquiries. Our team typically responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Contact Information
                </h2>
                <p className="text-gray-500 text-sm">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-5">
                {contactDetails.map((c) => (
                  <div key={c.title} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(212,132,42,0.1)" }}
                    >
                      <c.icon size={18} style={{ color: "#d4842a" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                        {c.title}
                      </div>
                      {c.lines.map((l) => (
                        <div key={l} className="text-sm text-gray-700">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enquiry types */}
              <div className="p-5 bg-white rounded-xl border border-gray-100">
                <div className="flex gap-3 items-start mb-3">
                  <MessageSquare size={18} style={{ color: "#d4842a" }} className="mt-0.5" />
                  <div className="text-sm font-semibold text-gray-700">We can help with:</div>
                </div>
                <ul className="space-y-1.5 pl-7">
                  {[
                    "Fabric samples and swatch books",
                    "Bulk pricing and MOQ enquiries",
                    "Custom dyeing and finishing",
                    "New composition development",
                    "Export and shipping queries",
                    "Technical fabric specifications",
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-500 list-disc">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill in your details below and one of our fabric specialists will be in touch within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
