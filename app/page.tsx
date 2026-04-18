import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Globe,
  Layers,
  ShieldCheck,
  Truck,
  Zap,
  ChevronRight,
  Star,
  CheckCircle,
  Phone,
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
    desc: "From high-stretch spandex blends to technical performance textiles — 500+ varieties in stock.",
  },
  {
    icon: Zap,
    title: "Performance Engineered",
    desc: "Our fabrics deliver unmatched comfort, stretch recovery, moisture management, and durability.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Tested to meet international quality benchmarks. Compliant with global fashion industry requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    desc: "Consistent on-time delivery with flexible MOQs to serve large manufacturers and boutique brands alike.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous QA Testing",
    desc: "Every batch tested for colour fastness, tensile strength, shrinkage, and dimensional stability.",
  },
];

const categories = [
  {
    id: "sportswear",
    name: "Sportswear Fabrics",
    desc: "High-performance knitted fabrics for athletic use — breathable, quick-dry, and durable.",
    compositions: ["Polyester / Spandex", "Nylon / Spandex", "Recycled Polyester"],
    gradient: "from-blue-700 to-blue-900",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    id: "activewear",
    name: "Activewear Fabrics",
    desc: "Stretch-rich fabrics with excellent recovery for yoga, gym, and everyday active wear.",
    compositions: ["80% Nylon / 20% Spandex", "Supplex Nylon", "PowerFlex"],
    gradient: "from-emerald-700 to-emerald-900",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  },
  {
    id: "athleisure",
    name: "Athleisure Fabrics",
    desc: "Versatile fabrics bridging sport and casual — cotton, modal, and bamboo blends.",
    compositions: ["Cotton / Spandex", "Modal / Spandex", "Bamboo Blends"],
    gradient: "from-violet-700 to-violet-900",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  },
  {
    id: "fashion",
    name: "Fashion & Casual Fabrics",
    desc: "Trend-forward woven and knitted fabrics for contemporary fashion labels.",
    compositions: ["Woven Polyester", "Chiffon", "Scuba Crepe"],
    gradient: "from-rose-700 to-rose-900",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

const stats = [
  { value: "500+", label: "Fabric Varieties" },
  { value: "20+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "99%", label: "On-time Delivery" },
];

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Head of Sourcing, ActiveEdge Apparel",
    country: "🇮🇳 India",
    quote:
      "TradeFabric has been our go-to fabric supplier for 6 years. The consistency of quality across every order is exceptional — we never have to worry about batch variation.",
    rating: 5,
  },
  {
    name: "Marco Bianchi",
    role: "Production Director, SportLux Milano",
    country: "🇮🇹 Italy",
    quote:
      "We source our performance nylon-spandex exclusively from TradeFabric. The hand feel and recovery are unmatched at this price point. Highly recommend for premium activewear.",
    rating: 5,
  },
  {
    name: "Sarah Collins",
    role: "Founder, Moxie Activewear",
    country: "🇬🇧 UK",
    quote:
      "As a small brand, I needed a supplier who would work with our lower MOQs. TradeFabric was flexible, fast to respond, and the sample turnaround was excellent.",
    rating: 5,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Enquiry & Requirements",
    desc: "Share your fabric specification — composition, weight, end use, quantity, and timeline.",
  },
  {
    step: "02",
    title: "Sample Development",
    desc: "We dispatch physical swatches or develop a custom sample to match your exact requirements.",
  },
  {
    step: "03",
    title: "Order Confirmation",
    desc: "Approve the sample, confirm your order, and we begin production with full QA oversight.",
  },
  {
    step: "04",
    title: "Quality Check & Dispatch",
    desc: "Every roll is tested, measured, and packed before dispatch. Real-time tracking provided.",
  },
];

const clients = [
  "Sportswear Brands", "Activewear Labels", "Fashion Houses",
  "Garment Exporters", "OEM Manufacturers", "Retail Chains",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-[70px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
            alt="Premium performance fabric texture"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(10,25,41,0.96) 0%, rgba(16,42,67,0.88) 55%, rgba(10,25,41,0.65) 100%)",
            }}
          />
          {/* Woven grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 40px)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border"
              style={{
                backgroundColor: "rgba(212,132,42,0.12)",
                color: "#e29f4d",
                borderColor: "rgba(212,132,42,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Premium Fabric Supplier · New Delhi, India
            </span>

            <h1
              className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-white leading-[1.08] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Fabrics Built for{" "}
              <span
                className="relative"
                style={{ color: "#d4842a" }}
              >
                Performance
              </span>
              {" "}&amp; Style
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              Premium polyester, nylon, and spandex blended fabrics for
              sportswear, activewear, athleisure, and fashion — engineered
              from superior yarns, delivered to global standards.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 text-sm text-gray-400">
              {["Sportswear", "Activewear", "Athleisure", "Technical", "Fashion"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border text-xs"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "#9fb3c8" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-amber-900/30 hover:-translate-y-0.5"
                style={{ backgroundColor: "#d4842a" }}
              >
                Explore Fabrics
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(255,255,255,0.25)",
                  color: "#fff",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              >
                Request a Sample
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex -space-x-2">
                {["bg-blue-500","bg-emerald-500","bg-violet-500","bg-amber-500"].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 flex items-center justify-center text-white text-xs font-bold`}
                    style={{ borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    {["P","M","S","R"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                Trusted by <span className="text-white font-semibold">500+ brands</span> across 50 countries
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-8 py-4">
                <div className="text-4xl font-bold mb-1" style={{ color: "#d4842a" }}>
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients served ── */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-gray-400 uppercase tracking-widest mr-2">
              Supplying to
            </span>
            {clients.map((c) => (
              <span
                key={c}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fabric Categories ── */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#d4842a" }}
            >
              Our Range
            </span>
            <h2
              className="text-4xl font-bold mt-2 mb-4"
              style={{
                color: "#102a43",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Fabric Categories
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From technical sportswear to trend-forward fashion — we have the
              right fabric for every application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products#${cat.id}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 min-h-[280px] flex"
              >
                {/* Background image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                />
                <div className="relative p-8 flex flex-col justify-end text-white w-full">
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.compositions.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all">
                    View fabrics <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-lg transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#102a43" }}
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#d4842a" }}
              >
                Why TradeFabric
              </span>
              <h2
                className="text-4xl font-bold mt-2 mb-6"
                style={{
                  color: "#102a43",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Quality Starts at the First Thread
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We combine 20+ years of experience, advanced manufacturing
                capabilities, and an unwavering commitment to quality. Every
                fabric begins with rigorously selected yarns and ends with a
                comprehensive QA process.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "ISO-compliant quality standards",
                  "Flexible MOQs for all business sizes",
                  "Custom dyeing and finishing available",
                  "Samples dispatched within 5–7 working days",
                  "Dedicated account manager for each client",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} style={{ color: "#d4842a" }} className="shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-lg"
                style={{ backgroundColor: "#d4842a" }}
              >
                Talk to Our Team
                <Phone size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(212,132,42,0.1)" }}
                  >
                    <f.icon size={20} style={{ color: "#d4842a" }} />
                  </div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: "#102a43" }}>
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #0a1929 0%, #102a43 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#e29f4d" }}
            >
              Our Process
            </span>
            <h2
              className="text-4xl font-bold text-white mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              From Enquiry to Delivery
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A simple, transparent process designed to get the right fabric to
              you as quickly and reliably as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-px -translate-x-6"
                    style={{ background: "linear-gradient(to right, rgba(212,132,42,0.5), transparent)" }}
                  />
                )}
                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: "rgba(212,132,42,0.35)" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-lg border transition-all hover:-translate-y-0.5"
              style={{ borderColor: "#d4842a", color: "#e29f4d" }}
            >
              Start Your Enquiry
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#d4842a" }}
            >
              Client Stories
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{
                color: "#102a43",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Trusted by Brands Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#d4842a"
                      style={{ color: "#d4842a" }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: "#102a43" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#102a43" }}>
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {t.role} · {t.country}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=900&q=85"
                alt="TradeFabric fabric manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-5 backdrop-blur-md"
                style={{ backgroundColor: "rgba(10,25,41,0.85)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#d4842a" }}
                  >
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      20+ Years of Excellence
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">
                      Anil International · New Delhi, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#d4842a" }}
              >
                About TradeFabric
              </span>
              <h2
                className="text-4xl font-bold mt-2 mb-6"
                style={{
                  color: "#102a43",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Decades of Fabric Expertise, Delivered Globally
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                TradeFabric, a division of Anil International, has been a
                trusted fabric supplier for over two decades. Based in New
                Delhi, India, we specialise in high-quality knitted and woven
                fabrics — primarily polyester, nylon, and spandex blends — for
                the global apparel industry.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our philosophy is simple: superior yarns make superior fabrics.
                Every roll begins with carefully selected raw materials and ends
                with rigorous quality checks before reaching our customers.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { v: "500+", l: "Fabric Varieties" },
                  { v: "50+", l: "Export Markets" },
                  { v: "20+", l: "Years Experience" },
                  { v: "99%", l: "Client Retention" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl p-4 bg-white border border-gray-100 text-center"
                  >
                    <div className="text-2xl font-bold mb-0.5" style={{ color: "#d4842a" }}>
                      {s.v}
                    </div>
                    <div className="text-xs text-gray-500">{s.l}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "#d4842a" }}
              >
                Read Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#d4842a" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Ready to Source Premium Fabrics?
          </h2>
          <p className="text-amber-100 mb-10 text-lg max-w-xl mx-auto">
            Contact our team for samples, bulk pricing, and custom fabric
            development. We work with brands of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold bg-white rounded-lg hover:-translate-y-0.5 transition-all"
              style={{ color: "#d4842a" }}
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold text-white rounded-lg border-2 border-white/50 hover:border-white hover:-translate-y-0.5 transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
