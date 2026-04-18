import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Premium Sportswear & Activewear Fabrics",
  description:
    "Browse TradeFabric's full range of premium knitted and woven fabrics — sportswear, activewear, athleisure, technical, and fashion fabrics. Polyester, nylon, spandex blends. Wholesale from New Delhi, India.",
  keywords: [
    "sportswear fabric wholesale",
    "activewear fabric supplier",
    "polyester spandex fabric",
    "nylon spandex fabric",
    "knitted fabric manufacturer India",
    "performance fabric supplier",
    "athleisure fabric",
    "technical fabric",
  ],
  alternates: { canonical: `${siteConfig.url}/products` },
};

const categories = [
  {
    id: "sportswear",
    name: "Sportswear Fabrics",
    tagline: "Engineered for Athletic Performance",
    description:
      "Our sportswear fabrics are precision-engineered to meet the rigorous demands of professional and recreational athletes. Featuring advanced moisture-wicking technology, four-way stretch, and exceptional durability.",
    features: [
      "Moisture-wicking & quick-dry finish",
      "Four-way stretch with excellent recovery",
      "UV protection options available",
      "Anti-odour treatment",
      "Lightweight yet durable construction",
      "Available in 100+ colours",
    ],
    products: [
      { name: "Performance Knit", composition: "88% Polyester / 12% Spandex", weight: "180–220 gsm", use: "Running, Training" },
      { name: "Compression Knit", composition: "80% Nylon / 20% Spandex", weight: "200–250 gsm", use: "Compression wear" },
      { name: "Eco Sport", composition: "90% Recycled Polyester / 10% Spandex", weight: "160–180 gsm", use: "Sustainable sportswear" },
      { name: "Airmesh", composition: "100% Polyester Mesh", weight: "100–130 gsm", use: "Jersey, inserts" },
    ],
    accent: "#2563eb",
    bg: "bg-blue-50",
  },
  {
    id: "activewear",
    name: "Activewear Fabrics",
    tagline: "Stretch, Support & Style",
    description:
      "Designed for yoga, pilates, gym, and everyday active living. Our activewear fabrics offer premium stretch, buttery-smooth hand feel, and exceptional shape retention wash after wash.",
    features: [
      "Ultra-soft, buttery hand feel",
      "High stretch: up to 80% four-way",
      "Excellent shape retention after washing",
      "Squat-proof opacity",
      "Sweat-wicking & breathable",
      "Chlorine-resistant options",
    ],
    products: [
      { name: "Butter Soft", composition: "72% Nylon / 28% Spandex", weight: "180–200 gsm", use: "Yoga, Leggings" },
      { name: "Supplex Classic", composition: "85% Supplex Nylon / 15% Spandex", weight: "190–210 gsm", use: "Gym, Active" },
      { name: "PowerFlex", composition: "75% Polyester / 25% Spandex", weight: "220–260 gsm", use: "Tights, Shorts" },
      { name: "Swim Active", composition: "80% Nylon / 20% Spandex (chlorine-resistant)", weight: "170–190 gsm", use: "Swimwear" },
    ],
    accent: "#059669",
    bg: "bg-emerald-50",
  },
  {
    id: "athleisure",
    name: "Athleisure Fabrics",
    tagline: "From Studio to Street",
    description:
      "Bridging performance and everyday fashion. Our athleisure fabrics are crafted for versatility — comfortable enough for workouts, stylish enough for daily wear.",
    features: [
      "Versatile for sport and casual use",
      "Natural-feel blends (cotton, modal, bamboo)",
      "Soft drape with body-hugging stretch",
      "Easy-care, machine washable",
      "Available in fashion-forward colours",
      "Sustainable fibre options",
    ],
    products: [
      { name: "Cotton Flex", composition: "95% Cotton / 5% Spandex", weight: "200–250 gsm", use: "Casual, Loungewear" },
      { name: "Modal Stretch", composition: "90% Modal / 10% Spandex", weight: "160–190 gsm", use: "Athleisure, Tees" },
      { name: "Bamboo Blend", composition: "95% Bamboo Viscose / 5% Spandex", weight: "170–200 gsm", use: "Eco athleisure" },
      { name: "French Terry", composition: "85% Cotton / 12% Polyester / 3% Spandex", weight: "280–320 gsm", use: "Sweatshirts, Hoodies" },
    ],
    accent: "#7c3aed",
    bg: "bg-purple-50",
  },
  {
    id: "technical",
    name: "Technical Fabrics",
    tagline: "Advanced Performance Textiles",
    description:
      "Specialist fabrics engineered for outdoor, technical, and extreme performance applications. Featuring advanced treatments and constructions for demanding use cases.",
    features: [
      "Water-repellent DWR finish",
      "Wind-resistant constructions",
      "Thermal regulation technology",
      "High abrasion resistance",
      "Reflective options available",
      "Flame retardant variants",
    ],
    products: [
      { name: "Softshell", composition: "90% Polyester / 10% Spandex + Fleece backing", weight: "280–340 gsm", use: "Outerwear, Jackets" },
      { name: "Ripstop Nylon", composition: "100% Nylon Ripstop", weight: "50–80 gsm", use: "Windbreakers, Packables" },
      { name: "Thermal Fleece", composition: "100% Polyester Micro Fleece", weight: "180–260 gsm", use: "Midlayer, Base layer" },
      { name: "4D Stretch Woven", composition: "78% Polyester / 19% Nylon / 3% Spandex", weight: "200–240 gsm", use: "Technical trousers" },
    ],
    accent: "#d97706",
    bg: "bg-amber-50",
  },
  {
    id: "fashion",
    name: "Fashion & Casual Fabrics",
    tagline: "Trend-Forward Textiles",
    description:
      "A curated selection of woven and knitted fabrics for contemporary fashion. Updated seasonally to reflect global trends in colour, texture, and construction.",
    features: [
      "Trend-led colour palette updated seasonally",
      "Woven and knitted constructions",
      "Wide variety of finishes and textures",
      "Suitable for dresses, tops, trousers",
      "Low MOQ for fashion brands",
      "Custom dyeing available",
    ],
    products: [
      { name: "Chiffon Georgette", composition: "100% Polyester", weight: "40–60 gsm", use: "Dresses, Blouses" },
      { name: "Scuba Crepe", composition: "95% Polyester / 5% Spandex", weight: "260–300 gsm", use: "Structured garments" },
      { name: "Ponte Roma", composition: "65% Polyester / 30% Viscose / 5% Spandex", weight: "220–260 gsm", use: "Trousers, Dresses" },
      { name: "Satin Weave", composition: "100% Polyester Satin", weight: "80–120 gsm", use: "Linings, Eveningwear" },
    ],
    accent: "#e11d48",
    bg: "bg-rose-50",
  },
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Products", url: `${siteConfig.url}/products` },
        ]}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(212,132,42,0.15)", color: "#e29f4d" }}
          >
            Full Product Range
          </span>
          <h1
            className="text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Premium Fabrics for Every Application
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Browse our comprehensive range of sportswear, activewear, athleisure, technical, and fashion fabrics — all engineered from superior yarns.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-amber-600 transition-all"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {categories.map((cat, i) => (
          <section key={cat.id} id={cat.id}>
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Info */}
              <div>
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: cat.accent }}
                >
                  {cat.tagline}
                </span>
                <h2
                  className="text-3xl font-bold mt-2 mb-4"
                  style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {cat.name}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{cat.description}</p>

                <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
                <ul className="space-y-2 mb-8">
                  {cat.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: cat.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-md"
                  style={{ backgroundColor: cat.accent }}
                >
                  Request Samples
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Products Table */}
              <div className={`rounded-2xl overflow-hidden border border-gray-200 ${cat.bg}`}>
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Available Fabrics</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {cat.products.map((p) => (
                    <div key={p.name} className="px-6 py-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{p.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{p.composition}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-xs font-medium text-gray-600">{p.weight}</div>
                          <div
                            className="text-xs mt-0.5 px-2 py-0.5 rounded-full font-medium"
                            style={{ backgroundColor: `${cat.accent}20`, color: cat.accent }}
                          >
                            {p.use}
                          </div>
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
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Need a Custom Fabric Solution?
          </h2>
          <p className="text-gray-300 mb-8">
            We offer custom dyeing, finishing, and composition development. Tell us your requirements and we&apos;ll engineer the perfect fabric for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-md"
            style={{ backgroundColor: "#d4842a" }}
          >
            Discuss Your Requirements
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
