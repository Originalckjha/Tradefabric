import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Premium Fabric Manufacturer & Supplier, Badli Delhi",
  description: "TradeFabric (Anil International) is a leading fabric supplier based in Badli, Delhi with 20+ years supplying polyester/nylon spandex fabrics to global apparel brands.",
  alternates: { canonical: `${SITE.url}/about` },
};

const milestones = [
  { year: "2000", event: "Founded as Anil International in Badli, Delhi" },
  { year: "2005", event: "Expanded into technical performance fabrics for sportswear" },
  { year: "2010", event: "Reached 20+ export markets across Asia, Europe and the Americas" },
  { year: "2015", event: "Launched TradeFabric brand — premium sportswear textiles" },
  { year: "2018", event: "Introduced recycled polyester and sustainable fabric lines" },
  { year: "2022", event: "Achieved 50+ country presence and 500+ fabric varieties" },
  { year: "Today", event: "Continuing to innovate for the next generation of apparel manufacturing" },
];

const qa = [
  "Raw material inspection & yarn quality testing",
  "Production monitoring at every stage",
  "Colour fastness testing (ISO standards)",
  "Tensile strength & tear resistance testing",
  "Shrinkage & dimensional stability testing",
  "Final inspection before dispatch",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "About Us", url: `${SITE.url}/about` }]} />

      {/* Hero */}
      <section className="pt-[105px] pb-16 bg-black border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold uppercase tracking-widest mb-5">Our Story</div>
          <h1 className="text-5xl font-black text-white mb-5 max-w-2xl">Fabric Excellence, Built Over Decades</h1>
          <p className="text-gray-400 text-lg max-w-2xl">TradeFabric is the premium fabric supply brand of Anil International — a Badli, Delhi-based textile company with over 20 years of experience serving global apparel manufacturers.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Who We Are</p>
              <h2 className="text-3xl font-black text-white mb-6">A Legacy of Quality in Every Thread</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Tradefabric specializes in trading high-quality imported and domestic fabrics, specially in polyester/nylon spandex blended knitted and woven fabrics. Our expertise lies in providing fabrics that are quick-drying, breathable, durable and perfect for sports and casual wear.</p>
                <p>As a division of Anil International, we bring together deep industry expertise, modern production capabilities, and a passionate commitment to quality. Our team of textile engineers, quality specialists and sourcing experts deliver fabrics that perform exceptionally in every application.</p>
                <p>Today, TradeFabric supplies to sportswear brands, activewear labels, fashion houses and garment manufacturers across 50+ countries — from boutique designers to large-scale manufacturers.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "20+", l: "Years Experience", s: "Deep industry expertise" },
                { v: "500+", l: "Fabric Varieties", s: "Knitted and woven" },
                { v: "50+", l: "Countries Served", s: "Global reach" },
                { v: "99%", l: "On-time Delivery", s: "Reliable supply chain" },
              ].map(s => (
                <div key={s.l} className="p-6 rounded-2xl bg-[#111] border border-white/[0.06] hover:border-green-500/20 transition-all text-center">
                  <div className="text-3xl font-black text-green-400 mb-1">{s.v}</div>
                  <div className="text-white font-semibold text-sm mb-1">{s.l}</div>
                  <div className="text-gray-600 text-xs">{s.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QA */}
      <section className="py-20 bg-[#0d0d0d] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Quality Assurance</p>
              <h2 className="text-3xl font-black text-white mb-5">Our Quality Process</h2>
              <p className="text-gray-400 leading-relaxed mb-6">Every fabric batch passes through a multi-stage QA process before it reaches our customers.</p>
              <ul className="space-y-3">
                {qa.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={15} className="text-green-500 mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.06]">
              <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Quality assurance" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                {[{ v: "< 0.5%", l: "Defect Rate" }, { v: "ISO", l: "Compliant" }].map(s => (
                  <div key={s.l} className="p-3 rounded-xl bg-black/70 backdrop-blur border border-white/10 text-center">
                    <div className="text-lg font-black text-green-400">{s.v}</div>
                    <div className="text-xs text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Our Journey</p>
            <h2 className="text-3xl font-black text-white">Milestones</h2>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-green-500/15" />
            <div className="space-y-8">
              {milestones.map(m => (
                <div key={m.year} className="relative flex gap-5">
                  <div className="absolute -left-8 w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500 block mb-1">{m.year}</span>
                    <p className="text-gray-300 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-gray-400 mb-8">Whether you&apos;re a global brand or an emerging label, we have the fabric expertise to support your vision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black rounded-lg" style={{ background: "#22c55e" }}>
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 rounded-lg border border-white/10 hover:border-white/20 hover:text-white transition-all">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
