import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, CheckCircle, Star, Award, Layers,
  Truck, ShieldCheck, Zap, Globe, Phone,
} from "lucide-react";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "TradeFabric | Fabric Supplier Delhi — Sportswear, Activewear & Fashion Fabrics Wholesale",
  description:
    "TradeFabric — #1 fabric supplier in Badli, Delhi. Premium polyester, nylon & spandex blended fabrics for sportswear, activewear & fashion. Wholesale prices, flexible MOQ, 50+ countries. Call 78-400-500-11.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "TradeFabric | Premium Fabric Supplier Delhi — Sportswear & Activewear Fabrics",
    description: "Wholesale sportswear & activewear fabric supplier in Delhi, India. 500+ fabric varieties, 20+ years experience, 50+ countries. Get free samples.",
    url: SITE.url,
  },
};

/* ── Data ───────────────────────────────────────────────────── */
const TICKER_ITEMS = [
  "Polyester Spandex Knit","Nylon Spandex Jersey","Recycled Polyester","Supplex Nylon",
  "Cotton Spandex","Modal Blend","Bamboo Fabric","Softshell","Scuba Crepe","French Terry",
  "Ripstop Nylon","Chiffon Georgette","Micro Fleece","Ponte Roma","Performance Mesh",
];

const STATS = [
  { v: "500+", l: "Fabric Varieties",  sub: "Knitted & woven" },
  { v: "20+",  l: "Years Experience",  sub: "Anil International" },
  { v: "50+",  l: "Countries Served",  sub: "Global exports" },
  { v: "99%",  l: "On-time Delivery",  sub: "Guaranteed reliability" },
];

const CATS = [
  {
    id: "sportswear", name: "Sportswear Fabrics",
    desc: "Moisture-wicking, four-way stretch fabrics engineered for peak athletic performance.",
    tags: ["Polyester/Spandex","Nylon/Spandex","Recycled Polyester"],
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80",
    col: "#1a4fa8",
  },
  {
    id: "activewear", name: "Activewear Fabrics",
    desc: "Ultra-stretch, buttery-smooth fabrics for yoga, gym and daily active lifestyle.",
    tags: ["80% Nylon / 20% Spandex","Supplex Nylon","PowerFlex"],
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80",
    col: "#166534",
  },
  {
    id: "athleisure", name: "Athleisure Fabrics",
    desc: "Versatile cotton, modal and bamboo blends for the sport-to-street crossover.",
    tags: ["Cotton/Spandex","Modal Blend","Bamboo"],
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80",
    col: "#581c87",
  },
  {
    id: "fashion", name: "Fashion & Casual",
    desc: "Trend-forward woven and knitted fabrics for contemporary fashion labels.",
    tags: ["Woven Polyester","Scuba Crepe","Chiffon"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    col: "#9f1239",
  },
];

const WHY = [
  { icon: Award,       t: "Premium Quality Yarns",   d: "Superior fabric starts with superior yarns. We source only the finest raw materials for every production run." },
  { icon: Layers,      t: "500+ Fabric Varieties",   d: "From high-stretch spandex blends to technical performance textiles — all categories under one roof." },
  { icon: Zap,         t: "Performance Engineered",  d: "Four-way stretch, moisture management, quick-dry finish and wash durability — engineered in." },
  { icon: Globe,       t: "ISO Quality Standards",   d: "Every batch tested to ISO benchmarks: colour fastness, tensile strength and dimensional stability." },
  { icon: Truck,       t: "Flexible MOQ",            d: "We serve large manufacturers and small boutique labels alike. No order too big or too small." },
  { icon: ShieldCheck, t: "100% QA Guaranteed",      d: "Zero-compromise quality assurance. Every roll inspected and certified before dispatch." },
];

const PROCESS = [
  { n: "01", t: "Share Your Requirements", d: "Tell us composition, GSM, end use and quantity. We'll guide you to the perfect fabric." },
  { n: "02", t: "Receive Physical Samples", d: "Swatches dispatched within 5–7 working days. No commitment required for samples." },
  { n: "03", t: "Confirm & Produce",        d: "Approve samples, confirm the order — production begins with full QA oversight." },
  { n: "04", t: "Test, Pack & Dispatch",    d: "Every roll tested, measured, packed. Tracking number shared on dispatch." },
];

const REVIEWS = [
  { name: "Priya Mehta",  role: "Head of Sourcing",      co: "ActiveEdge Apparel, India",    q: "Six years with TradeFabric — zero batch inconsistencies. The most reliable fabric partner we have worked with in India. Quality is non-negotiable for them." },
  { name: "Marco B.",     role: "Production Director",   co: "SportLux Milano, Italy",        q: "We source our entire nylon-spandex range exclusively from TradeFabric. The hand feel and recovery are unmatched at this price point. Highly recommend." },
  { name: "Sarah Collins",role: "Founder",               co: "Moxie Activewear, UK",          q: "As a small brand needing low MOQs, TradeFabric was flexible, fast to respond, and the sample turnaround was excellent. They treat every client like a big account." },
];

const CLIENTS = [
  "Sportswear Brands","Activewear Labels","Fashion Houses",
  "Garment Exporters","OEM Manufacturers","Retail Chains","Start-ups",
];

/* ── Component ─────────────────────────────────────────────── */
export default function HomePage() {
  const tickerAll = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-[102px] overflow-hidden bg-[#080808]">
        {/* Background fabric photo */}
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
          alt="Premium performance fabric textile background"
          fill priority className="object-cover object-center"
          style={{ opacity: .13 }} sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg,#080808 0%,rgba(8,8,8,.92) 55%,rgba(8,8,8,.6) 100%)" }} />
        {/* Grid */}
        <div className="bg-grid absolute inset-0" />
        {/* Green radial glow — top left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(34,139,34,.12) 0%, transparent 70%)" }} />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-[780px]">

            {/* Badge */}
            <div className="fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(34,139,34,.1)", border: "1px solid rgba(34,139,34,.25)", color: "#2ecc71" }}>
              <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#228B22" }} />
              Premium Fabric Supplier · Badli, Delhi 110042 · Est. 2000
            </div>

            {/* H1 */}
            <h1 className="fade-up-2 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Premium Quality<br />
              <span className="text-gradient">Fabrics</span> For<br />
              <span style={{ color: "#e5e7eb" }}>Sportswear, Activewear</span><br />
              <span style={{ color: "#9ca3af" }}>&amp; Fashion Industry</span>
            </h1>

            {/* Sub */}
            <p className="fade-up-3 text-lg text-gray-400 leading-relaxed mb-10 max-w-[600px]">
              With a strong foundation in polyester, nylon, and spandex blends, our fabrics are crafted for performance, comfort, and durability — ensuring your products stand out in competitive markets.
            </p>

            {/* CTAs */}
            <div className="fade-up-4 flex flex-wrap gap-4 mb-12">
              <Link href="/products" className="btn-primary">
                EXPLORE COLLECTION <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                REQUEST SWATCHES
              </Link>
              <a href={`tel:${SITE.phoneE164}`}
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                <Phone size={15} style={{ color: "#228B22" }} /> {SITE.phone}
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3">
              {["ISO Quality Standards","500+ Fabric Varieties","20+ Years Experience","50+ Countries Exported","Free Samples Available"].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <CheckCircle size={12} style={{ color: "#228B22" }} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span className="uppercase tracking-widest text-[10px]">Scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom,#228B22,transparent)" }} />
        </div>
      </section>

      {/* ══ STATS BAR ═════════════════════════════════════════ */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 0 }}>
            {STATS.map(({ v, l, sub }, i) => (
              <div key={l} className="py-8 px-6 text-center"
                style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div className="stat-num mb-1">{v}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{l}</div>
                <div className="text-xs text-gray-600">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE TICKER ════════════════════════════════════ */}
      <div className="marquee-wrap py-4 overflow-hidden" style={{ background: "#228B22" }}>
        <div className="marquee-inner">
          {tickerAll.map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-5 text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ══ CLIENT TYPES ══════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-600 mr-2">Supplying to</span>
            {CLIENTS.map(c => (
              <span key={c} className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-400 border"
                style={{ background: "#111", borderColor: "rgba(255,255,255,0.07)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FABRIC CATEGORIES ═════════════════════════════════ */}
      <section className="py-24" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="label mb-3">Our Range</span>
            <h2 className="text-4xl font-black text-white mt-3 mb-4">Fabric Categories</h2>
            <p className="text-gray-500 max-w-lg mx-auto">From technical sportswear to trend-forward fashion — we have the right fabric for every application and budget.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {CATS.map(cat => (
              <Link key={cat.id} href={`/products#${cat.id}`}
                className="group relative rounded-2xl overflow-hidden flex min-h-[280px] card-accent"
                style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>

                <Image src={cat.img} alt={`${cat.name} — TradeFabric wholesale supplier`}
                  fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw" />

                {/* Gradient */}
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: `linear-gradient(160deg, ${cat.col}dd 0%, rgba(0,0,0,0.85) 100%)` }} />

                {/* Top label */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80"
                    style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
                    {cat.id}
                  </span>
                </div>

                <div className="relative flex flex-col justify-end p-7 w-full text-white">
                  <h3 className="text-2xl font-black mb-2">{cat.name}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.tags.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all"
                    style={{ color: "#2ecc71" }}>
                    View Fabrics <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="btn-primary">
              View Full Catalogue <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY TRADEFABRIC ═══════════════════════════════════ */}
      <section className="py-24" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text col */}
            <div>
              <span className="label mb-3">Why TradeFabric</span>
              <h2 className="text-4xl font-black text-white mt-3 mb-5">Quality Starts at the First Thread</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We combine 20+ years of expertise, modern manufacturing, and an unwavering commitment to quality. Every fabric begins with rigorously selected yarns and ends with a comprehensive QA process — before it ever reaches you.
              </p>
              <ul className="space-y-3.5 mb-10">
                {[
                  "ISO-compliant QA on every batch",
                  "Flexible MOQs — boutique to bulk",
                  "Custom dyeing, printing & finishing",
                  "Samples dispatched in 5–7 working days",
                  "Dedicated account manager per client",
                  "Export documentation handled end-to-end",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#228B22" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Talk to Our Team <Phone size={15} /></Link>
                <Link href="/products" className="btn-ghost">Browse Fabrics</Link>
              </div>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {WHY.map(f => (
                <div key={f.t} className="card-base card-accent p-5 cursor-default">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(34,139,34,0.1)" }}>
                    <f.icon size={19} style={{ color: "#228B22" }} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{f.t}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ═════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="label mb-3">Our Process</span>
            <h2 className="text-4xl font-black text-white mt-3 mb-4">From Enquiry to Delivery</h2>
            <p className="text-gray-500 max-w-lg mx-auto">A simple, transparent 4-step process designed to get the right fabric to you fast and right the first time.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((s, i) => (
              <div key={s.n} className="card-base card-accent p-7 relative">
                <div className="text-6xl font-black leading-none mb-4" style={{ color: "rgba(34,139,34,.12)" }}>{s.n}</div>
                <h3 className="text-white font-bold mb-2 text-base">{s.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px" style={{ background: "rgba(34,139,34,.3)" }} />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-outline-green">
              Start Your Enquiry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="label mb-3">Client Reviews</span>
            <h2 className="text-4xl font-black text-white mt-3">Trusted by Brands Worldwide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map(r => (
              <div key={r.name} className="card-base card-accent p-7 flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#228B22" style={{ color: "#228B22" }} />)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed italic flex-1 mb-6">
                  &ldquo;{r.q}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ background: "linear-gradient(135deg,#228B22,#1a6b1a)" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.role} · {r.co}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT STRIP ══════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <Image
                src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=900&q=80"
                alt="TradeFabric fabric manufacturing quality Delhi India"
                fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,.8) 0%, transparent 50%)" }} />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl"
                style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "#228B22" }}>
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">20+ Years of Excellence</p>
                    <p className="text-gray-400 text-xs mt-0.5">Anil International · Badli, Delhi 110042</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="label mb-3">About TradeFabric</span>
              <h2 className="text-4xl font-black text-white mt-3 mb-5">Decades of Fabric Expertise, Delivered Globally</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Tradefabric specializes in trading high-quality imported and domestic fabrics — specially polyester/nylon spandex blended knitted and woven fabrics. Our expertise lies in providing fabrics that are quick-drying, breathable, durable and perfect for sports and casual wear.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Based in Badli, Delhi, we have built a reputation for consistent quality and reliable delivery across 50+ countries. Our philosophy is simple: superior yarns make superior fabrics.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { v: "500+", l: "Fabric varieties" },
                  { v: "50+",  l: "Export countries" },
                  { v: "20+",  l: "Years in business" },
                  { v: "99%",  l: "Client retention" },
                ].map(s => (
                  <div key={s.l} className="p-4 rounded-xl text-center"
                    style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-2xl font-black mb-0.5" style={{ color: "#228B22" }}>{s.v}</div>
                    <div className="text-xs text-gray-500">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-outline-green">
                Read Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#228B22" }}>
        <div className="bg-dots absolute inset-0" style={{ opacity: .15 }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Source Premium Fabrics?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Contact our team for samples, bulk pricing and custom fabric development. We work with brands of all sizes across 50+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold bg-black text-white rounded-xl hover:-translate-y-1 transition-all shadow-lg">
              Get a Free Quote <ArrowRight size={17} />
            </Link>
            <a href={`tel:${SITE.phoneE164}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold text-white rounded-xl border-2 border-white/40 hover:border-white hover:-translate-y-1 transition-all">
              <Phone size={17} /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
