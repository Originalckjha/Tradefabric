import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe,
  Layers,
  ShieldCheck,
  Truck,
  Zap,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Premium Fabric Supplier for Sportswear & Activewear`,
  description:
    "TradeFabric supplies premium polyester, nylon, and spandex blended fabrics for sportswear, activewear, athleisure, and fashion industries. Engineered for performance. Based in New Delhi, India.",
  alternates: { canonical: siteConfig.url },
};

const features = [
  {
    icon: Award,
    title: "Premium Quality Yarns",
    desc: "Superior fabric starts with superior yarns. We source the finest raw materials for every production run.",
  },
  {
    icon: Layers,
    title: "Extensive Fabric Range",
    desc: "From high-stretch spandex blends to technical performance textiles — we cover every apparel need.",
  },
  {
    icon: Zap,
    title: "Performance Engineered",
    desc: "Our fabrics deliver unmatched comfort, stretch recovery, moisture management, and durability.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Tested to meet international quality benchmarks and compliant with global fashion industry requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    desc: "Consistent, on-time delivery with flexible MOQs to serve both large manufacturers and boutique brands.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Every fabric batch undergoes rigorous QA testing for colour fastness, tensile strength, and shrinkage.",
  },
];

const categories = [
  {
    id: "sportswear",
    name: "Sportswear Fabrics",
    desc: "High-performance knitted fabrics engineered for athletic use — breathable, quick-dry, and durable.",
    compositions: ["Polyester / Spandex", "Nylon / Spandex", "Recycled Polyester"],
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "activewear",
    name: "Activewear Fabrics",
    desc: "Stretch-rich fabrics with excellent recovery for yoga, gym, and daily active lifestyle apparel.",
    compositions: ["80% Nylon / 20% Spandex", "75% Poly / 25% Spandex", "Supplex Nylon"],
    color: "from-emerald-600 to-emerald-800",
  },
  {
    id: "athleisure",
    name: "Athleisure Fabrics",
    desc: "Versatile fabrics balancing style and comfort — perfect for the crossover between sport and casual.",
    compositions: ["Cotton / Spandex Blends", "Modal / Spandex", "Bamboo Blends"],
    color: "from-purple-600 to-purple-800",
  },
  {
    id: "fashion",
    name: "Fashion & Casual Fabrics",
    desc: "Trend-forward woven and knitted fabrics for contemporary fashion labels and garment manufacturers.",
    compositions: ["Woven Polyester", "Chiffon", "Crepe", "Scuba"],
    color: "from-rose-600 to-rose-800",
  },
];

const stats = [
  { value: "500+", label: "Fabric Varieties" },
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "99%", label: "On-time Delivery" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        style={{
          background:
            "linear-gradient(135deg, #0a1929 0%, #102a43 50%, #1a3a5c 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #d4842a 0, #d4842a 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ backgroundColor: "rgba(212,132,42,0.15)", color: "#e29f4d" }}
            >
              Premium Fabric Supplier · New Delhi, India
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Fabrics Built for{" "}
              <span style={{ color: "#d4842a" }}>Performance</span>{" "}
              &amp; Style
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              TradeFabric supplies premium polyester, nylon, and spandex blended
              fabrics for sportswear, activewear, athleisure, and fashion
              industries worldwide. Engineered from superior yarns. Delivered to
              global standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-md transition-all duration-200"
                style={{ backgroundColor: "#d4842a" }}
              >
                Explore Fabrics
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-md border transition-all duration-200"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                Request a Sample
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        />
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold mb-1" style={{ color: "#d4842a" }}>
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Categories */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#d4842a" }}>
              Our Range
            </span>
            <h2
              className="text-4xl font-bold mt-2 mb-4"
              style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Fabric Categories
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From technical sportswear to trend-forward fashion — we have the right fabric for every application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products#${cat.id}`}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90`} />
                <div className="relative p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.compositions.map((c) => (
                      <span key={c} className="px-3 py-1 rounded-full text-xs font-medium bg-white/20">
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                    View fabrics <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-md transition-all"
              style={{ backgroundColor: "#102a43" }}
            >
              View All Fabrics
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#d4842a" }}>
              Why TradeFabric
            </span>
            <h2
              className="text-4xl font-bold mt-2 mb-4"
              style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Quality Starts at the First Thread
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We combine experience, scale, and technology to deliver fabrics that meet the demands of modern apparel manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(212,132,42,0.1)" }}
                >
                  <f.icon size={22} style={{ color: "#d4842a" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#102a43" }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#e29f4d" }}>
                About TradeFabric
              </span>
              <h2
                className="text-4xl font-bold text-white mt-2 mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Decades of Fabric Expertise, Delivered Globally
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TradeFabric, a division of Anil International, has been a trusted fabric supplier for over two decades. Based in New Delhi, India, we specialise in high-quality knitted and woven fabrics — primarily polyester, nylon, and spandex blends — for the global apparel industry.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our philosophy is simple: superior yarns make superior fabrics. Every roll we produce begins with carefully selected raw materials and ends with rigorous quality checks before it reaches our customers.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border transition-all"
                style={{ borderColor: "#d4842a", color: "#e29f4d" }}
              >
                Our Story
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2000+", sub: "Years of legacy" },
                { label: "Products", value: "500+", sub: "Fabric varieties" },
                { label: "Markets", value: "50+", sub: "Countries served" },
                { label: "Satisfaction", value: "99%", sub: "Client retention" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-6 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: "#d4842a" }}>
                    {s.value}
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{s.label}</div>
                  <div className="text-gray-400 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#102a43", fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Ready to Source Premium Fabrics?
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Contact our team for samples, pricing, and bulk order inquiries. We work with brands of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold text-white rounded-md"
              style={{ backgroundColor: "#d4842a" }}
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold rounded-md border-2"
              style={{ borderColor: "#102a43", color: "#102a43" }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
