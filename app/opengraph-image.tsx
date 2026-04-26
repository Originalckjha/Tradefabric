import { ImageResponse } from "next/og";

export const alt = "TradeFabric — Premium Fabric Supplier, Badli Delhi India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          background: "#080808",
          padding: "60px 72px",
          position: "relative",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <svg width="56" height="56" viewBox="0 0 56 58">
            <polygon points="37,14 53,14 17,55 1,55" fill="#228B22" />
            <rect x="37" y="14" width="15" height="11" fill="#228B22" />
            <rect x="27" y="30" width="15" height="10" fill="#228B22" />
            <rect x="1" y="3" width="51" height="11" rx="1" fill="white" />
            <rect x="1" y="14" width="13" height="41" rx="0.5" fill="white" />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 28, color: "white", letterSpacing: 3 }}>
              TRADE
            </span>
            <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 28, color: "#228B22", letterSpacing: 3 }}>
              FABRIC
            </span>
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", marginBottom: 24 }}>
            <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 62, lineHeight: 1.05, color: "white" }}>
              Premium Quality Fabrics
            </span>
            <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 62, lineHeight: 1.05, color: "#228B22" }}>
              for Sportswear &amp;
            </span>
            <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 62, lineHeight: 1.05, color: "#2ecc71" }}>
              Activewear Industry
            </span>
          </div>
          <span style={{ fontFamily: "sans-serif", fontWeight: 400, fontSize: 22, color: "rgba(255,255,255,0.5)", marginBottom: 40 }}>
            Polyester · Nylon · Spandex Blends · 500+ Varieties · Delhi, India
          </span>

          {/* Pills row */}
          <div style={{ display: "flex", gap: 12 }}>
            {["20+ Years", "50+ Countries", "ISO Quality", "Free Samples"].map(t => (
              <div key={t} style={{
                display: "flex",
                padding: "8px 18px", borderRadius: 99,
                background: "rgba(34,139,34,0.12)",
                border: "1px solid rgba(34,139,34,0.3)",
                color: "#2ecc71", fontFamily: "sans-serif", fontWeight: 600, fontSize: 14,
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24,
        }}>
          <span style={{ fontFamily: "sans-serif", color: "rgba(255,255,255,0.3)", fontSize: 15 }}>
            Badli, Delhi 110042, India
          </span>
          <span style={{ fontFamily: "sans-serif", color: "#228B22", fontWeight: 700, fontSize: 15 }}>
            www.tradefabric.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
