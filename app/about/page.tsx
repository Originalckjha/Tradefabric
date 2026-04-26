import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Award, Globe, Users, Layers } from "lucide-react";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Premium Fabric Manufacturer & Supplier, Badli Delhi",
  description:
    "TradeFabric (Anil International) is a leading fabric supplier based in Badli, Delhi with 20+ years supplying polyester/nylon spandex fabrics to global apparel brands.",
  alternates: { canonical: `${SITE.url}/about` },
};

const milestones = [
  { year: "2000", event: "Founded as Anil International in Badli, Delhi — specialising in performance textiles" },
  { year: "2005", event: "Expanded into technical performance fabrics for the growing sportswear market" },
  { year: "2010", event: "Reached 20+ export markets across Asia, Europe and the Americas" },
  { year: "2015", event: "Launched TradeFabric brand — a dedicated premium sportswear textile division" },
  { year: "2018", event: "Introduced recycled polyester and sustainable fabric lines for eco-conscious brands" },
  { year: "2022", event: "Achieved 50+ country presence with 500+ fabric varieties in active production" },
  { year: "Today", event: "Continuing to innovate — developing next-generation performance and sustainable fabrics" },
];

const qa = [
  "Raw material inspection & yarn quality testing",
  "Production monitoring at every stage",
  "Colour fastness testing (ISO 105 standards)",
  "Tensile strength & tear resistance testing",
  "Shrinkage & dimensional stability testing",
  "Final roll inspection before dispatch",
];

const values = [
  { icon: Award,  title: "Quality First",     desc: "Zero compromise — every batch tested to ISO standards before it leaves our facility." },
  { icon: Users,  title: "Client Partnership", desc: "We treat every client as a long-term partner, not a transaction. Your success is our success." },
  { icon: Globe,  title: "Global Reach",       desc: "Deep expertise in international logistics, documentation and compliance across 50+ countries." },
  { icon: Layers, title: "Innovation",         desc: "Continuously expanding our range with new compositions, treatments and sustainable options." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: SITE.url },
        { name: "About Us", url: `${SITE.url}/about` },
      ]} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-[102px] overflow-hidden bg-[#080808]">
        <Image
          src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1800&q=80"
          alt="TradeFabric fabric manufacturing Badli Delhi"
          fill priority className="object-cover object-center"
          style={{ opacity: .1 }} sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(8,8,8,.8) 0%,#080808 100%)" }} />
        <div className="bg-grid absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <span className="label mb-4">Our Story</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-5 max-w-2xl leading-tight">
            Fabric Excellence,<br />
            <span className="text-gradient">Built Over Decades</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
            TradeFabric is the premium fabric supply brand of Anil International — a Badli, Delhi-based textile company with over 20 years of experience serving global apparel manufacturers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Talk to Our Team <ArrowRight size={16} /></Link>
            <Link href="/products" className="btn-ghost">View Fabrics</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { v: "20+",  l: "Years Experience",  s: "Deep industry expertise" },
              { v: "500+", l: "Fabric Varieties",  s: "Knitted and woven" },
              { v: "50+",  l: "Countries Served",  s: "Global reach" },
              { v: "99%",  l: "On-time Delivery",  s: "Reliable supply chain" },
            ].map(({ v, l, s }, i) => (
              <div key={l} className="py-8 px-6 text-center"
                style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div className="stat-num mb-1">{v}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{l}</div>
                <div className="text-xs text-gray-600">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────── */}
      <section className="py-24" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label mb-3">Who We Are</span>
              <h2 className="text-4xl font-black text-white mt-3 mb-6">A Legacy of Quality in Every Thread</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Tradefabric specializes in trading high-quality imported and domestic fabrics — specially polyester/nylon spandex blended knitted and woven fabrics. Quick-drying, breathable, durable and perfect for sports and casual wear.</p>
                <p>As a division of Anil International, we bring together deep industry expertise, modern production capabilities, and an unwavering commitment to quality. Our team of textile engineers and sourcing experts deliver fabrics that perform in every application.</p>
                <p>Today, TradeFabric supplies to sportswear brands, activewear labels, fashion houses and garment manufacturers across 50+ countries — from boutique designers to large-scale manufacturers.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/products" className="btn-primary">Explore Collection <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-ghost">Request Samples</Link>
              </div>
            </div>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="TradeFabric premium fabric manufacturing Delhi"
                fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,8,8,.7) 0%,transparent 60%)" }} />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#228B22" }}>
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">20+ Years of Excellence</p>
                  <p className="text-gray-400 text-xs mt-0.5">Anil International · Badli, Delhi 110042</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="label mb-3 justify-center">Our Values</span>
            <h2 className="text-4xl font-black text-white mt-3">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.title} className="card-base card-accent p-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(34,139,34,0.1)" }}>
                  <v.icon size={20} style={{ color: "#228B22" }} />
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QA Process ───────────────────────────────────── */}
      <section className="py-24" style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label mb-3">Quality Assurance</span>
              <h2 className="text-4xl font-black text-white mt-3 mb-5">Our QA Process</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Every fabric batch passes through a rigorous multi-stage quality assurance process. We test to international ISO standards and provide test reports on request.
              </p>
              <ul className="space-y-2.5">
                {qa.map((item, i) => (
                  <li key={item} className="flex items-center gap-4 p-3.5 rounded-xl"
                    style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                      style={{ background: "rgba(34,139,34,0.15)", color: "#228B22" }}>
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-300 flex-1">{item}</span>
                    <CheckCircle size={14} className="shrink-0" style={{ color: "#228B22" }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="TradeFabric quality assurance process"
                fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,8,8,.75) 0%,transparent 55%)" }} />
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                {[{ v: "< 0.5%", l: "Defect Rate" }, { v: "ISO", l: "Certified" }].map(s => (
                  <div key={s.l} className="p-3 rounded-xl text-center"
                    style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="text-lg font-black" style={{ color: "#228B22" }}>{s.v}</div>
                    <div className="text-xs text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="label mb-3 justify-center">Our Journey</span>
            <h2 className="text-4xl font-black text-white mt-3">Milestones</h2>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-3.5 top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom,#228B22,rgba(34,139,34,0.1))" }} />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-5 group">
                  <div className="absolute -left-10 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                    style={{ background: i === milestones.length - 1 ? "#228B22" : "#111", border: "1px solid rgba(34,139,34,0.4)" }}>
                    {i === milestones.length - 1
                      ? <div className="w-2.5 h-2.5 rounded-full bg-white pulse-dot" />
                      : <div className="w-2 h-2 rounded-full" style={{ background: "#228B22" }} />
                    }
                  </div>
                  <div className="flex-1 p-4 rounded-xl transition-all hover:border-green-500/20"
                    style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <span className="text-xs font-black uppercase tracking-widest block mb-1" style={{ color: "#228B22" }}>
                      {m.year}
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#228B22" }}>
        <div className="bg-dots absolute inset-0" style={{ opacity: .15 }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-white/80 text-lg mb-10">
            Whether you&apos;re a global brand or an emerging label, we have the fabric expertise to support your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold bg-black text-white rounded-xl hover:-translate-y-1 transition-all">
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <Link href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold text-white rounded-xl border-2 border-white/40 hover:border-white hover:-translate-y-1 transition-all">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
