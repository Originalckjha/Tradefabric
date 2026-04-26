"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ { q: string; a: string }

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-2xl overflow-hidden transition-all"
            style={{
              background: "#111",
              border: isOpen ? "1px solid rgba(34,139,34,0.3)" : "1px solid rgba(255,255,255,0.06)",
              boxShadow: isOpen ? "0 0 0 1px rgba(34,139,34,0.08)" : "none",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
            >
              <span className="text-base font-bold text-white leading-snug">{faq.q}</span>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all"
                style={{ background: isOpen ? "#228B22" : "rgba(255,255,255,0.06)" }}
              >
                {isOpen
                  ? <Minus size={13} className="text-white" />
                  : <Plus size={13} className="text-gray-400" />
                }
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "400px" : "0px" }}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="h-px mb-4" style={{ background: "rgba(255,255,255,0.05)" }} />
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
