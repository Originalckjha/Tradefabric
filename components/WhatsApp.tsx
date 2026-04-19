"use client";
import { SITE } from "@/lib/config";

export default function WhatsApp() {
  return (
    <a
      href={`${SITE.social.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20fabrics.%20Please%20share%20details.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-[54px] h-[54px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
      style={{ background: "#25d366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.47 1.65 6.36L3 29l6.82-1.63A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6a10.6 10.6 0 01-5.4-1.48l-.38-.23-3.97.76.8-3.86-.25-.4A10.57 10.57 0 015.4 16C5.4 9.64 10.64 4.4 16 4.4S26.6 9.64 26.6 16 21.36 26.6 16 26.6zm5.82-7.93c-.32-.16-1.88-.93-2.17-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.56-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.46.21 2 .13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}
