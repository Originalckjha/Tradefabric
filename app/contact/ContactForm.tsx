"use client";
import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

const TYPES = ["Fabric Samples","Bulk Pricing","Custom Development","Technical Specs","Export Query","General"];
const CATS  = ["Sportswear Fabrics","Activewear Fabrics","Athleisure Fabrics","Technical Fabrics","Fashion & Casual","Other"];

const inputCls = "w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-[#1f1f1f] transition-all";
const labelCls = "block text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setDone(true);
  };

  if (done) return (
    <div className="py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 size={32} className="text-green-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
      <p className="text-gray-400 text-sm">Thank you for reaching out. We&apos;ll contact you within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={labelCls}>Full Name *</label><input type="text" required placeholder="John Smith" className={inputCls} /></div>
        <div><label className={labelCls}>Company</label><input type="text" placeholder="Your Brand / Company" className={inputCls} /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={labelCls}>Email *</label><input type="email" required placeholder="john@example.com" className={inputCls} /></div>
        <div><label className={labelCls}>Phone / WhatsApp</label><input type="tel" placeholder="+91 98765 43210" className={inputCls} /></div>
      </div>
      <div>
        <label className={labelCls}>Fabric Category</label>
        <select className={inputCls}>
          <option value="">Select a category...</option>
          {CATS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Enquiry Type</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {TYPES.map(t => (
            <label key={t} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-[#1a1a1a] text-xs text-gray-400 cursor-pointer hover:border-green-500/30 hover:text-gray-200 transition-all">
              <input type="checkbox" className="accent-green-500" /> {t}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Message *</label>
        <textarea required rows={5} placeholder="Describe your fabric requirements — composition, GSM, quantity, end use, timeline..." className={`${inputCls} resize-none`} />
      </div>
      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 text-sm font-bold text-black rounded-lg transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: "#22c55e" }}>
        {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Send Message <ArrowRight size={16} /></>}
      </button>
    </form>
  );
}
