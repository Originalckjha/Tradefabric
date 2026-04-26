import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd, ProductCatalogJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Premium Sportswear & Activewear Fabrics — Full Catalogue",
  description:
    "Browse TradeFabric's full range — sportswear, activewear, athleisure, technical and fashion fabrics. Polyester, nylon, spandex blends wholesale from Badli, Delhi.",
  keywords: [
    "sportswear fabric wholesale","activewear fabric India",
    "polyester spandex fabric","nylon fabric supplier Delhi",
    "knitted fabric manufacturer",
  ],
  alternates: { canonical: `${SITE.url}/products` },
};

const cats = [
  {
    id: "sportswear", name: "Sportswear Fabrics", sub: "Engineered for Athletic Performance",
    accent: "#3b82f6",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    desc: "Precision-engineered to meet the demands of professional and recreational athletes. Advanced moisture-wicking, four-way stretch, and exceptional durability.",
    features: [
      "Moisture-wicking & quick-dry finish","Four-way stretch with excellent recovery",
      "UV protection options available","Anti-odour treatment",
      "Lightweight yet durable","100+ colour options",
    ],
    fabrics: [
      { name: "Performance Knit",  comp: "88% Polyester / 12% Spandex",           gsm: "180–220 gsm", use: "Running, Training" },
      { name: "Compression Knit",  comp: "80% Nylon / 20% Spandex",               gsm: "200–250 gsm", use: "Compression wear" },
      { name: "Eco Sport",         comp: "90% Recycled Polyester / 10% Spandex",  gsm: "160–180 gsm", use: "Sustainable sport" },
      { name: "Airmesh",           comp: "100% Polyester Mesh",                   gsm: "100–130 gsm", use: "Jersey, inserts" },
    ],
  },
  {
    id: "activewear", name: "Activewear Fabrics", sub: "Stretch, Support & Style",
    accent: "#228B22",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    desc: "Designed for yoga, pilates, gym, and everyday active living. Premium stretch, buttery-smooth hand feel, and exceptional shape retention wash after wash.",
    features: [
      "Ultra-soft buttery hand feel","High stretch: up to 80% four-way",
      "Excellent shape retention","Squat-proof opacity",
      "Sweat-wicking & breathable","Chlorine-resistant options",
    ],
    fabrics: [
      { name: "Butter Soft",  comp: "72% Nylon / 28% Spandex",                      gsm: "180–200 gsm", use: "Yoga, Leggings" },
      { name: "Supplex",      comp: "85% Supplex Nylon / 15% Spandex",              gsm: "190–210 gsm", use: "Gym, Active" },
      { name: "PowerFlex",    comp: "75% Polyester / 25% Spandex",                  gsm: "220–260 gsm", use: "Tights, Shorts" },
      { name: "Swim Active",  comp: "80% Nylon / 20% Spandex (chlorine-resistant)", gsm: "170–190 gsm", use: "Swimwear" },
    ],
  },
  {
    id: "athleisure", name: "Athleisure Fabrics", sub: "From Studio to Street",
    accent: "#a855f7",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    desc: "Bridging performance and everyday fashion — comfortable enough for workouts, stylish enough for daily wear.",
    features: [
      "Versatile for sport and casual","Natural-feel blends",
      "Soft drape with stretch","Machine washable",
      "Fashion-forward colours","Sustainable fibre options",
    ],
    fabrics: [
      { name: "Cotton Flex",   comp: "95% Cotton / 5% Spandex",                  gsm: "200–250 gsm", use: "Casual, Loungewear" },
      { name: "Modal Stretch", comp: "90% Modal / 10% Spandex",                  gsm: "160–190 gsm", use: "Athleisure, Tees" },
      { name: "Bamboo Blend",  comp: "95% Bamboo Viscose / 5% Spandex",          gsm: "170–200 gsm", use: "Eco athleisure" },
      { name: "French Terry",  comp: "85% Cotton / 12% Polyester / 3% Spandex",  gsm: "280–320 gsm", use: "Hoodies, Sweatshirts" },
    ],
  },
  {
    id: "technical", name: "Technical Fabrics", sub: "Advanced Performance Textiles",
    accent: "#f59e0b",
    img: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=80",
    desc: "Specialist fabrics for outdoor, technical and extreme performance applications — advanced treatments for demanding use cases.",
    features: [
      "Water-repellent DWR finish","Wind-resistant constructions",
      "Thermal regulation","High abrasion resistance",
      "Reflective options","Flame retardant variants",
    ],
    fabrics: [
      { name: "Softshell",     comp: "90% Polyester / 10% Spandex + Fleece",    gsm: "280–340 gsm", use: "Jackets, Outerwear" },
      { name: "Ripstop Nylon", comp: "100% Nylon Ripstop",                       gsm: "50–80 gsm",   use: "Windbreakers" },
      { name: "Micro Fleece",  comp: "100% Polyester Micro Fleece",              gsm: "180–260 gsm", use: "Midlayer, Base" },
      { name: "4D Stretch",    comp: "78% Polyester / 19% Nylon / 3% Spandex",  gsm: "200–240 gsm", use: "Technical trousers" },
    ],
  },
  {
    id: "fashion", name: "Fashion & Casual Fabrics", sub: "Trend-Forward Textiles",
    accent: "#ec4899",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    desc: "Woven and knitted fabrics for contemporary fashion — updated seasonally to reflect global trends in colour, texture and construction.",
    features: [
      "Trend-led seasonal colours","Woven and knitted options",
      "Wide variety of finishes","Suitable for all garment types",
      "Low MOQ for fashion brands","Custom dyeing available",
    ],
    fabrics: [
      { name: "Chiffon Georgette", comp: "100% Polyester",                             gsm: "40–60 gsm",   use: "Dresses, Blouses" },
      { name: "Scuba Crepe",       comp: "95% Polyester / 5% Spandex",                gsm: "260–300 gsm", use: "Structured garments" },
      { name: "Ponte Roma",        comp: "65% Polyester / 30% Viscose / 5% Spandex", gsm: "220–260 gsm", use: "Trousers, Dresses" },
      { name: "Satin Weave",       comp: "100% Polyester Satin",                       gsm: "80–120 gsm",  use: "Linings, Eveningwear" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "Products", url: `${SITE.url}/products` }]} />
      <ProductCatalogJsonLd />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-[102px] overflow-hidden bg-[#080808]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
          alt="Premium fabric collection TradeFabric"
          fill priority className="object-cover object-center"
          style={{ opacity: .08 }} sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(8,8,8,.7) 0%,#080808 100%)" }} />
        <div className="bg-grid absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <span className="label mb-4 justify-center">Full Product Range</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-5 leading-tight">
            Premium Fabrics for<br />
            <span className="text-gradient">Every Application</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Sportswear, activewear, athleisure, technical, and fashion fabrics — engineered from superior yarns and delivered to global standards.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[["500+","Fabric varieties"],["5","Categories"],["50+","Countries"],["Flexible","MOQ"]].map(([v,l]) => (
              <div key={l} className="text-center">
                <div className="text-xl font-black" style={{ color: "#228B22" }}>{v}</div>
                <div className="text-xs text-gray-500 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary inline-flex">
            Request Samples <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Jump nav ─────────────────────────────────────── */}
      <nav className="sticky top-[62px] z-40"
        style={{ background: "rgba(13,13,13,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {cats.map(c => (
              <a key={c.id} href={`#${c.id}`}
                className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c.accent }} />
                {c.name.replace(" Fabrics","").replace(" & Casual","")}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Categories ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-24">
        {cats.map((cat, ci) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-32">
            {/* Header image card */}
            <div className="relative rounded-2xl overflow-hidden mb-10"
              style={{ height: 240, border: "1px solid rgba(255,255,255,0.06)" }}>
              <Image src={cat.img} alt={`${cat.name} — TradeFabric`}
                fill className="object-cover" sizes="(max-width:1280px) 100vw, 1280px" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(100deg,rgba(8,8,8,.93) 0%,rgba(8,8,8,.65) 55%,rgba(8,8,8,.2) 100%)" }} />
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: cat.accent }} />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: cat.accent }}>
                      {cat.sub}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">{cat.name}</h2>
                  </div>
                  <span className="hidden sm:block text-7xl font-black leading-none select-none opacity-20 text-white">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* Details grid */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Description + features */}
              <div>
                <p className="text-gray-400 leading-relaxed mb-6 text-base">{cat.desc}</p>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                  {cat.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300 p-3 rounded-xl"
                      style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <CheckCircle size={13} className="mt-0.5 shrink-0" style={{ color: cat.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: cat.accent, boxShadow: `0 4px 20px ${cat.accent}40` }}>
                  Request Samples <ArrowRight size={14} />
                </Link>
              </div>

              {/* Fabric table */}
              <div className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#111" }}>
                <div className="px-5 py-4 flex items-center justify-between"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#141414" }}>
                  <h3 className="text-sm font-bold text-white">Available Fabrics</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${cat.accent}15`, color: cat.accent }}>
                    {cat.fabrics.length} types
                  </span>
                </div>
                <div className="px-5 py-2 grid grid-cols-3 text-[10px] font-bold uppercase tracking-widest text-gray-600"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span>Fabric</span><span>GSM</span><span>End Use</span>
                </div>
                <div>
                  {cat.fabrics.map(f => (
                    <div key={f.name} className="px-5 py-4 hover:bg-white/[0.02] transition-colors"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <div className="grid grid-cols-3 gap-2 items-start">
                        <div>
                          <p className="text-sm font-semibold text-white">{f.name}</p>
                          <p className="text-xs text-gray-600 mt-0.5 leading-tight">{f.comp}</p>
                        </div>
                        <p className="text-xs font-semibold text-gray-300 pt-0.5">{f.gsm}</p>
                        <span className="inline-block text-xs px-2 py-1 rounded-full font-medium"
                          style={{ background: `${cat.accent}15`, color: cat.accent }}>
                          {f.use}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#228B22" }}>
        <div className="bg-dots absolute inset-0" style={{ opacity: .15 }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Need a Custom Fabric Solution?</h2>
          <p className="text-white/80 text-lg mb-10">
            Custom dyeing, finishing and composition development — tell us your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold bg-black text-white rounded-xl hover:-translate-y-1 transition-all">
              Discuss Requirements <ArrowRight size={16} />
            </Link>
            <a href={`${SITE.social.whatsapp}?text=Hi%2C%20I'd%20like%20custom%20fabric%20development.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl border-2 border-white/40 hover:border-white hover:-translate-y-1 transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
