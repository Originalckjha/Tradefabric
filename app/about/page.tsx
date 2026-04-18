import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Eye, Heart } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Premium Fabric Manufacturer & Supplier",
  description:
    "TradeFabric (Anil International) is a leading premium fabric supplier based in New Delhi, India with 20+ years of experience supplying knitted and woven fabrics to global apparel brands.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every fabric we produce is engineered to exact specifications, ensuring consistency across every batch.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "We believe in open, honest partnerships — from sourcing to pricing to delivery timelines.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    desc: "We actively develop eco-friendly fabric options including recycled polyester and organic blends.",
  },
];

const milestones = [
  { year: "2000", event: "Founded as Anil International in New Delhi, India" },
  { year: "2005", event: "Expanded product range to include technical performance fabrics" },
  { year: "2010", event: "Reached 20+ export markets across Asia, Europe, and the Americas" },
  { year: "2015", event: "Launched TradeFabric brand — focusing on premium sportswear textiles" },
  { year: "2018", event: "Introduced recycled polyester and sustainable fabric lines" },
  { year: "2022", event: "Achieved 50+ country presence and 500+ fabric varieties" },
  { year: "Today", event: "Continuing to innovate for the next generation of apparel manufacturing" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About Us", url: `${siteConfig.url}/about` },
        ]}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: "rgba(212,132,42,0.15)", color: "#e29f4d" }}
            >
              Our Story
            </span>
            <h1
              className="text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Fabric Excellence, Built Over Decades
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              TradeFabric is the premium fabric supply brand of Anil International — a New Delhi-based textile company with over 20 years of experience serving global apparel manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#d4842a" }}>
                Who We Are
              </span>
              <h2
                className="text-3xl font-bold mt-2 mb-6"
                style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                A Legacy of Quality in Every Thread
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TradeFabric was born from a simple belief: the foundation of every great garment is great fabric, and great fabric starts with great yarns. For over two decades, we have built our reputation on this principle — sourcing the finest raw materials and transforming them into premium textiles that meet the highest global standards.
                </p>
                <p>
                  As a division of Anil International, we bring together deep industry expertise, modern production capabilities, and a passionate commitment to quality. Our team of textile engineers, quality specialists, and sourcing experts work together to deliver fabrics that perform exceptionally in every application.
                </p>
                <p>
                  Today, TradeFabric supplies to sportswear brands, activewear labels, fashion houses, and garment manufacturers across 50+ countries. From small boutique designers to large-scale apparel manufacturers, we provide the fabric solutions that bring visions to life.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years Experience", desc: "Deep industry expertise" },
                { value: "500+", label: "Fabric Varieties", desc: "Knitted and woven options" },
                { value: "50+", label: "Countries Served", desc: "Global reach from India" },
                { value: "99%", label: "On-time Delivery", desc: "Reliable supply chain" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: "#d4842a" }}>
                    {s.value}
                  </div>
                  <div className="font-semibold text-gray-800 text-sm mb-1">{s.label}</div>
                  <div className="text-gray-400 text-xs">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#d4842a" }}>
              Our Values
            </span>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((v) => (
              <div key={v.title} className="text-center p-8 rounded-2xl bg-white shadow-sm">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(212,132,42,0.1)" }}
                >
                  <v.icon size={24} style={{ color: "#d4842a" }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#102a43" }}>
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Quality Process */}
          <div
            className="rounded-2xl p-10"
            style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Our Quality Process
                </h3>
                <p className="text-gray-300 mb-6">
                  Every fabric batch passes through a multi-stage quality assurance process before it reaches our customers.
                </p>
                <ul className="space-y-3">
                  {[
                    "Raw material inspection & yarn quality testing",
                    "Production monitoring at every stage",
                    "Colour fastness testing (ISO standards)",
                    "Tensile strength & tear resistance testing",
                    "Shrinkage & dimensional stability testing",
                    "Final inspection before dispatch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#d4842a" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "ISO Standards", value: "Compliant" },
                  { label: "Tests Per Batch", value: "6+" },
                  { label: "Defect Rate", value: "< 0.5%" },
                  { label: "Return Rate", value: "< 1%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-5 text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div className="text-xl font-bold text-white mb-1">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#d4842a" }}>
              Our Journey
            </span>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{ backgroundColor: "rgba(212,132,42,0.3)" }}
            />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 pl-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 -ml-4"
                    style={{ backgroundColor: "#d4842a" }}
                  >
                    &bull;
                  </div>
                  <div className="pb-2">
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#d4842a" }}>
                      {m.year}
                    </div>
                    <div className="text-gray-700 text-sm">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-500 mb-8">
            Whether you&apos;re a global brand or an emerging label, we have the fabric expertise and capacity to support your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-md"
              style={{ backgroundColor: "#d4842a" }}
            >
              Contact Our Team
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border-2"
              style={{ borderColor: "#102a43", color: "#102a43" }}
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
