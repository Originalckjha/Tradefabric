import type { Metadata } from "next";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name} — how we collect, use and protect your data.`,
  alternates: { canonical: `${SITE.url}/privacy-policy` },
};

export default function PrivacyPage() {
  return (
    <div className="pt-[105px] pb-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2025</p>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-400 leading-relaxed">
          <p>TradeFabric (&quot;we&quot;, &quot;us&quot;) operates {SITE.url}. This page informs you of our policies regarding collection and use of personal data.</p>
          <h2 className="text-white font-bold text-lg">Information We Collect</h2>
          <p>We collect information you provide via our contact form (name, email, phone, company) to respond to enquiries and process orders.</p>
          <h2 className="text-white font-bold text-lg">How We Use Your Information</h2>
          <p>Your information is used solely to respond to your enquiry, process orders, and send relevant fabric updates (with your consent).</p>
          <h2 className="text-white font-bold text-lg">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorised access or disclosure.</p>
          <h2 className="text-white font-bold text-lg">Contact</h2>
          <p>For privacy questions, contact us at <a href={`mailto:${SITE.email}`} className="text-green-400">{SITE.email}</a>.</p>
        </div>
      </div>
    </div>
  );
}
