"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

const fabricCategories = [
  "Sportswear Fabrics",
  "Activewear Fabrics",
  "Athleisure Fabrics",
  "Technical Fabrics",
  "Fashion & Casual Fabrics",
  "Custom / Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "rgba(5,150,105,0.1)" }}
        >
          <CheckCircle size={32} style={{ color: "#059669" }} />
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#102a43" }}>
          Message Sent!
        </h3>
        <p className="text-gray-500 text-sm">
          Thank you for reaching out. A member of our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition"
            style={{ "--tw-ring-color": "#d4842a" } as React.CSSProperties}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your Brand / Company"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
          Fabric Category of Interest
        </label>
        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition bg-white">
          <option value="">Select a category...</option>
          {fabricCategories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
          Enquiry Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {["Samples", "Bulk Pricing", "Custom Development", "Technical Specs", "Export Query", "General"].map((t) => (
            <label
              key={t}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 cursor-pointer hover:border-amber-400 transition text-xs text-gray-600"
            >
              <input type="checkbox" className="accent-amber-600" />
              {t}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5">
          Message *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your fabric requirements — composition, weight, quantity, end use, timeline..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-lg transition-all disabled:opacity-70"
        style={{ backgroundColor: "#d4842a" }}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
