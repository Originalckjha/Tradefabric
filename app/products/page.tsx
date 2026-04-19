import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Premium Sportswear & Activewear Fabrics — Full Collection",
  description: "Browse TradeFabric's full range — sportswear, activewear, athleisure, technical and fashion fabrics. Polyester, nylon, spandex blends wholesale from Badli, Delhi.",
  keywords: ["sportswear fabric wholesale","activewear fabric India","polyester spandex fabric","nylon fabric supplier Delhi","knitted fabric manufacturer"],
  alternates: { canonical: `${SITE.url}/products` },
};

const cats = [
  {
    id: "sportswear", name: "Sportswear Fabrics", sub: "Engineered for Athletic Performance", accent: "#3b82f6",
    desc: "Precision-engineered to meet the demands of professional and recreational athletes. Advanced moisture-wicking, four-way stretch, and exceptional durability.",
    features: ["Moisture-wicking & quick-dry finish","Four-way stretch with excellent recovery","UV protection options available","Anti-odour treatment","Lightweight yet durable","100+ colour options"],
    fabrics: [
      { name: "Performance Knit",   comp: "88% Polyester / 12% Spandex",          gsm: "180–220 gsm", use: "Running, Training" },
      { name: "Compression Knit",   comp: "80% Nylon / 20% Spandex",              gsm: "200–250 gsm", use: "Compression wear" },
      { name: "Eco Sport",          comp: "90% Recycled Polyester / 10% Spandex", gsm: "160–180 gsm", use: "Sustainable sport" },
      { name: "Airmesh",            comp: "100% Polyester Mesh",                  gsm: "100–130 gsm", use: "Jersey, inserts" },
    ],
  },
  {
    id: "activewear", name: "Activewear Fabrics", sub: "Stretch, Support & Style", accent: "#22c55e",
    desc: "Designed for yoga, pilates, gym, and everyday active living. Premium stretch, buttery-smooth hand feel, and exceptional shape retention wash after wash.",
    features: ["Ultra-soft buttery hand feel","High stretch: up to 80% four-way","Excellent shape retention","Squat-proof opacity","Sweat-wicking & breathable","Chlorine-resistant options"],
    fabrics: [
      { name: "Butter Soft",  comp: "72% Nylon / 28% Spandex",                       gsm: "180–200 gsm", use: "Yoga, Leggings" },
      { name: "Supplex",      comp: "85% Supplex Nylon / 15% Spandex",               gsm: "190–210 gsm", use: "Gym, Active" },
      { name: "PowerFlex",    comp: "75% Polyester / 25% Spandex",                   gsm: "220–260 gsm", use: "Tights, Shorts" },
      { name: "Swim Active",  comp: "80% Nylon / 20% Spandex (chlorine-resistant)",  gsm: "170–190 gsm", use: "Swimwear" },
    ],
  },
  {
    id: "athleisure", name: "Athleisure Fabrics", sub: "From Studio to Street", accent: "#a855f7",
    desc: "Bridging performance and everyday fashion — comfortable enough for workouts, stylish enough for daily wear.",
    features: ["Versatile for sport and casual","Natural-feel blends","Soft drape with stretch","Machine washable","Fashion-forward colours","Sustainable fibre options"],
    fabrics: [
      { name: "Cotton Flex",   comp: "95% Cotton / 5% Spandex",                     gsm: "200–250 gsm", use: "Casual, Loungewear" },
      { name: "Modal Stretch", comp: "90% Modal / 10% Spandex",                     gsm: "160–190 gsm", use: "Athleisure, Tees" },
      { name: "Bamboo Blend",  comp: "95% Bamboo Viscose / 5% Spandex",             gsm: "170–200 gsm", use: "Eco athleisure" },
      { name: "French Terry",  comp: "85% Cotton / 12% Polyester / 3% Spandex",     gsm: "280–320 gsm", use: "Hoodies, Sweatshirts" },
    ],
  },
  {
    id: "technical", name: "Technical Fabrics", sub: "Advanced Performance Textiles", accent: "#f59e0b",
    desc: "Specialist fabrics for outdoor, technical and extreme performance applications — advanced treatments for demanding use cases.",
    features: ["Water-repellent DWR finish","Wind-resistant constructions","Thermal regulation","High abrasion resistance","Reflective options","Flame retardant variants"],
    fabrics: [
      { name: "Softshell",      comp: "90% Polyester / 10% Spandex + Fleece",   gsm: "280–340 gsm", use: "Jackets, Outerwear" },
      { name: "Ripstop Nylon",  comp: "100% Nylon Ripstop",                      gsm: "50–80 gsm",   use: "Windbreakers" },
      { name: "Micro Fleece",   comp: "100% Polyester Micro Fleece",             gsm: "180–260 gsm", use: "Midlayer, Base" },
      { name: "4D Stretch",     comp: "78% Polyester / 19% Nylon / 3% Spandex", gsm: "200–240 gsm", use: "Technical trousers" },
    ],
  },
  {
    id: "fashion", name: "Fashion & Casual Fabrics", sub: "Trend-Forward Textiles", accent: "#ec4899",
    desc: "Woven and knitted fabrics for contemporary fashion — updated seasonally to reflect global trends in colour, texture and construction.",
    features: ["Trend-led seasonal colours","Woven and knitted options","Wide variety of finishes","Suitable for all garment types","Low MOQ for fashion brands","Custom dyeing available"],
    fabrics: [
      { name: "Chiffon Georgette", comp: "100% Polyester",                              gsm: "40–60 gsm",   use: "Dresses, Blouses" },
      { name: "Scuba Crepe",       comp: "95% Polyester / 5% Spandex",                 gsm: "260–300 gsm", use: "Structured garments" },
      { name: "Ponte Roma",        comp: "65% Polyester / 30% Viscose / 5% Spandex",  gsm: "220–260 gsm", use: "Trousers, Dresses" },
      { name: "Satin Weave",       comp: "100% Polyester Satin",                        gsm: "80–120 gsm",  use: "Linings, Eveningwear" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "Products", url: `${SITE.url}/products` }]} />

      {/* Hero */}
      <section className="pt-[105px] pb-16 bg-black border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Full Product Range
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Premium Fabrics for Every Application</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Sportswear, activewear, athleisure, technical, and fashion fabrics — all engineered from superior yarns and delivered to global standards.</p>
        </div>
      </section>

      {/* Sticky nav */}
      <nav className="sticky top-[105px] z-40 bg-[#0d0d0d]/95 backdrop-blur border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3">
            {cats.map(c => (
              <a key={c.id} href={`#${c.id}`}
                className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap">
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {cats.map(cat => (
          <section key={cat.id} id={cat.id} className="scroll-mt-36">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Info */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: cat.accent }}>{cat.sub}</span>
                <h2 className="text-3xl font-black text-white mb-4">{cat.name}</h2>
                <p className="text-gray-400 leading-relaxed mb-6">{cat.desc}</p>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h3>
                <ul className="space-y-2 mb-8">
                  {cat.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: cat.accent }} />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black rounded-lg"
                  style={{ background: cat.accent }}>
                  Request Samples <ArrowRight size={14} />
                </Link>
              </div>

              {/* Table */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111]">
                <div className="px-5 py-4 border-b border-white/[0.06]">
                  <h3 className="text-sm font-semibold text-gray-300">Available Fabrics</h3>
                </div>
                <div className="divide-y divide-white/[0.05]">
                  {cat.fabrics.map(f => (
                    <div key={f.name} className="px-5 py-4 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-white">{f.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{f.comp}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-gray-400 font-medium">{f.gsm}</p>
                          <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${cat.accent}18`, color: cat.accent }}>{f.use}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-[#111] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Need a Custom Fabric Solution?</h2>
          <p className="text-gray-400 mb-8">We offer custom dyeing, finishing and composition development. Tell us your requirements.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-black rounded-lg"
            style={{ background: "#22c55e" }}>
            Discuss Your Requirements <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
