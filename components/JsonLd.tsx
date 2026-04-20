import { SITE } from "@/lib/config";

function LD({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrgJsonLd() {
  return <LD data={{
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    image: `${SITE.url}/og.jpg`,
    description: SITE.description,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "$$",
    currenciesAccepted: "INR, USD, EUR",
    paymentAccepted: "Bank Transfer, LC",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Badli",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "110042",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "09:00", closes: "18:00",
    }],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      contactType: "sales",
      email: SITE.email,
      areaServed: "Worldwide",
      availableLanguage: ["English","Hindi"],
    },
    sameAs: Object.values(SITE.social),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Premium Performance Fabrics",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sportswear Fabrics", description: "Polyester/Nylon Spandex knitted fabrics for sportswear" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Activewear Fabrics", description: "High-stretch Nylon Spandex fabrics for activewear and yoga" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Athleisure Fabrics", description: "Cotton, Modal and Bamboo blend fabrics for athleisure" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Technical Fabrics", description: "Softshell, DWR treated and technical performance fabrics" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fashion Fabrics", description: "Woven polyester, Scuba Crepe and Chiffon for fashion industry" } },
      ],
    },
  }} />;
}

export function WebSiteJsonLd() {
  return <LD data={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return <LD data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem", position: i + 1, name: item.name, item: item.url,
    })),
  }} />;
}

export function FAQJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return <LD data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }} />;
}

export function ProductCatalogJsonLd() {
  return <LD data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TradeFabric — Premium Performance Fabric Catalogue",
    description: "Wholesale fabric supplier offering sportswear, activewear and fashion fabrics from Badli, Delhi India",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Sportswear Fabrics — Polyester/Nylon Spandex",  url: `${SITE.url}/products#sportswear` },
      { "@type": "ListItem", position: 2, name: "Activewear Fabrics — High-Stretch Nylon Spandex", url: `${SITE.url}/products#activewear` },
      { "@type": "ListItem", position: 3, name: "Athleisure Fabrics — Cotton & Modal Blends",     url: `${SITE.url}/products#athleisure` },
      { "@type": "ListItem", position: 4, name: "Technical Fabrics — Softshell & DWR",            url: `${SITE.url}/products#technical` },
      { "@type": "ListItem", position: 5, name: "Fashion Fabrics — Woven Polyester & Scuba",      url: `${SITE.url}/products#fashion` },
    ],
  }} />;
}
