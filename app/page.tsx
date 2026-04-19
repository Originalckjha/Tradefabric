import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star, Zap, Layers, Globe, Award, Truck, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE.name} | Premium Quality Fabrics for Sportswear, Activewear & Fashion`,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

const stats = [
  { v: "500+", l: "Fabric Varieties" },
  { v: "20+",  l: "Years Experience" },
  { v: "50+",  l: "Countries Served" },
  { v: "99%",  l: "On-time Delivery" },
];

const categories = [
  { id: "sportswear", name: "Sportswear Fabrics",  desc: "High-performance knitted fabrics — breathable, quick-dry and durable for athletic use.", tags: ["Polyester/Spandex","Nylon/Spandex","Recycled Polyester"], img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80" },
  { id: "activewear", name: "Activewear Fabrics",  desc: "Ultra-stretch fabrics with excellent recovery for yoga, gym and daily active wear.",        tags: ["Nylon/Spandex","Supplex Nylon","PowerFlex"],              img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80" },
  { id: "athleisure", name: "Athleisure Fabrics",  desc: "Versatile comfort fabrics bridging sport and casual — cotton, modal and bamboo blends.",    tags: ["Cotton/Spandex","Modal Blend","Bamboo"],                  img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80" },
  { id: "fashion",    name: "Fashion & Casual",    desc: "Trend-forward woven and knitted fabrics for contemporary fashion and garment labels.",       tags: ["Woven Polyester","Scuba Crepe","Chiffon"],               img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
];

const features = [
  { icon: Award,       title: "Premium Quality Yarns",   desc: "Superior fabric starts with superior yarns — we source only the finest raw materials." },
  { icon: Layers,      title: "500+ Fabric Varieties",   desc: "From high-stretch spandex blends to technical performance textiles — all in one place." },
  { icon: Zap,         title: "Performance Engineered",  desc: "Unmatched comfort, four-way stretch, moisture management and wash durability." },
  { icon: Globe,       title: "Global Standards",        desc: "ISO-compliant testing for colour fastness, tensile strength and dimensional stability." },
  { icon: Truck,       title: "Flexible MOQs",           desc: "We serve large manufacturers and boutique labels alike — no order is too small or too big." },
  { icon: ShieldCheck, title: "Rigorous QA",             desc: "Every batch is tested and certified before dispatch. Zero-compromise quality assurance." },
];

const process = [
  { n: "01", t: "Share Requirements", d: "Tell us your fabric specification — composition, weight, GSM, end use and quantity." },
  { n: "02", t: "Sample Development", d: "We dispatch physical swatches or develop a custom sample within 5–7 working days." },
  { n: "03", t: "Confirm & Produce",  d: "Approve the sample, confirm your order, and we begin production with full QA oversight." },
  { n: "04", t: "Test & Dispatch",    d: "Every roll is tested, measured and packed. Real-time tracking shared on dispatch." },
];

const testimonials = [
  { name: "Priya M.",   role: "Head of Sourcing, ActiveEdge Apparel",  flag: "🇮🇳", quote: "Six years, zero batch inconsistencies. TradeFabric is simply the most reliable fabric partner we've worked with in India." },
  { name: "Marco B.",   role: "Production Director, SportLux Milano",   flag: "🇮🇹", quote: "We source our entire nylon-spandex range from TradeFabric. The hand feel and recovery are unmatched at this price point." },
  { name: "Sarah C.",   role: "Founder, Moxie Activewear",             flag: "🇬🇧", quote: "As a small brand needing low MOQs, TradeFabric was flexible and responsive. Sample turnaround was excellent." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-[105px] overflow-hidden bg-black">
        {/* Background */}
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
          alt="Premium performance fabric" fill priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        <div className="bg-grid absolute inset-0 opacity-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Premium Fabric Supplier · Badli, Delhi 110042
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Premium Quality<br />
              <span className="text-green-gradient">Fabrics</span> For<br />
              Sportswear, Activewear<br />
              <span className="text-gray-300">&amp; Fashion Industry</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
              With a strong foundation in polyester, nylon, and spandex blends, our fabrics are crafted for performance, comfort, and durability — ensuring your products stand out in competitive markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black rounded-lg transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-lg"
                style={{ background: "#22c55e", boxShadow: "0 4px 20px rgba(34,197,94,0.3)" }}>
                EXPLORE COLLECTION <ArrowRight size={17} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 rounded-lg border border-white/10 hover:border-white/20 hover:text-white transition-all">
                REQUEST SWATCHES
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
              {["500+ Fabric Varieties", "20+ Years Experience", "50+ Countries", "contact@tradefabric.com"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={13} className="text-green-500" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.06] bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {stats.map(({ v, l }) => (
              <div key={l} className="py-8 px-6 text-center">
                <div className="text-4xl font-black text-green-400 mb-1">{v}</div>
                <div className="text-sm text-gray-500 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Our Range</p>
            <h2 className="text-4xl font-black text-white mb-3">Fabric Categories</h2>
            <p className="text-gray-500 max-w-lg mx-auto">From technical sportswear to trend-forward fashion — the right fabric for every application.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {categories.map(cat => (
              <Link key={cat.id} href={`/products#${cat.id}`}
                className="group relative rounded-2xl overflow-hidden min-h-[270px] flex">
                <Image src={cat.img} alt={cat.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 transition-all" />
                {/* Green top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="relative flex flex-col justify-end p-7 text-white w-full">
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.tags.map(t => <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10">{t}</span>)}
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-green-400 group-hover:gap-3 transition-all">
                    View fabrics <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-black transition-all hover:brightness-110"
              style={{ background: "#22c55e" }}>
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Why TradeFabric</p>
              <h2 className="text-4xl font-black text-white mb-5">Quality Starts at the First Thread</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We combine 20+ years of expertise, modern manufacturing capabilities, and an unwavering commitment to quality. Every fabric begins with rigorously selected yarns and ends with a comprehensive QA process before it reaches you.
              </p>
              <ul className="space-y-3 mb-10">
                {["ISO-compliant quality standards on all batches","Flexible MOQs — we work with all business sizes","Custom dyeing, printing & finishing available","Samples dispatched within 5–7 working days","Dedicated account manager per client"].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-black"
                style={{ background: "#22c55e" }}>
                Talk to Our Team <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map(f => (
                <div key={f.title} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-green-500/25 hover:bg-green-500/[0.03] transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-3 group-hover:bg-green-500/20 transition-colors">
                    <f.icon size={19} className="text-green-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Our Process</p>
            <h2 className="text-4xl font-black text-white mb-3">From Enquiry to Delivery</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Simple, transparent and built for speed — getting the right fabric to you as fast as possible.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((s, i) => (
              <div key={s.n} className="relative p-6 rounded-2xl bg-[#111] border border-white/[0.06] hover:border-green-500/20 transition-all">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2.5 w-5 h-px bg-green-500/30 z-10" />
                )}
                <div className="text-5xl font-black text-green-500/15 mb-4 leading-none">{s.n}</div>
                <h3 className="text-white font-bold mb-2">{s.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold border border-green-500/40 text-green-400 hover:bg-green-500/5 transition-all">
              Start Your Enquiry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Client Stories</p>
            <h2 className="text-4xl font-black text-white">Trusted by Brands Worldwide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="p-7 rounded-2xl bg-[#111] border border-white/[0.06] hover:border-green-500/20 transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#22c55e" className="text-green-500" />)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name} {t.flag}</p>
                    <p className="text-xs text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.06]">
              <Image
                src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=900&q=85"
                alt="TradeFabric fabric quality" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
                    <Award size={18} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">20+ Years of Excellence</p>
                    <p className="text-gray-400 text-xs">Anil International · Badli, Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">About TradeFabric</p>
              <h2 className="text-4xl font-black text-white mb-5">Decades of Fabric Expertise, Delivered Globally</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Tradefabric specializes in trading high-quality imported and domestic fabrics, specially in polyester/nylon spandex blended knitted and woven fabrics. Our expertise lies in providing fabrics that are quick-drying, breathable, durable and perfect for sports and casual wear.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Based in Badli, Delhi, we&apos;ve built a reputation for consistent quality and reliable delivery across 50+ countries. Superior yarns make superior fabrics — that philosophy drives everything we do.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors">
                Read Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #15803d 0%, #22c55e 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-black mb-4">Ready to Source Premium Fabrics?</h2>
          <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">Contact our team for samples, bulk pricing and custom fabric development. We work with brands of all sizes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold bg-black text-white rounded-lg hover:-translate-y-0.5 transition-all">
              Get a Free Quote <ArrowRight size={17} />
            </Link>
            <Link href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold text-black rounded-lg border-2 border-black/30 hover:border-black hover:-translate-y-0.5 transition-all">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
