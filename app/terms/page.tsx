import type { Metadata } from "next";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${SITE.name} services and website.`,
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <div className="pt-[105px] pb-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-black text-white mb-3">Terms &amp; Conditions</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2025</p>
        <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
          <p>By accessing {SITE.url} you agree to be bound by these terms and conditions.</p>
          <h2 className="text-white font-bold text-lg">Orders</h2>
          <p>All orders are subject to availability and confirmation. Prices are subject to change without notice. A purchase order is binding upon written confirmation from TradeFabric.</p>
          <h2 className="text-white font-bold text-lg">Samples</h2>
          <p>Sample charges apply and are credited against bulk orders. Samples are provided for evaluation purposes only.</p>
          <h2 className="text-white font-bold text-lg">Quality</h2>
          <p>All fabrics are subject to our standard QA process. Claims for defects must be raised within 7 days of receipt.</p>
          <h2 className="text-white font-bold text-lg">Contact</h2>
          <p>For questions, contact us at <a href={`mailto:${SITE.email}`} className="text-green-400">{SITE.email}</a>.</p>
        </div>
      </div>
    </div>
  );
}
