import { SITE } from "@/lib/config";

export function OrgJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/logo.svg`,
      description: SITE.description,
      address: { "@type": "PostalAddress", streetAddress: "Badli", addressLocality: "Delhi", postalCode: "110042", addressCountry: "IN" },
      contactPoint: { "@type": "ContactPoint", telephone: SITE.phoneE164, contactType: "sales", email: SITE.email, availableLanguage: ["English", "Hindi"] },
      sameAs: Object.values(SITE.social),
    }) }} />
  );
}

export function WebSiteJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      potentialAction: { "@type": "SearchAction", target: `${SITE.url}/products?q={search_term_string}`, "query-input": "required name=search_term_string" },
    }) }} />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.url })),
    }) }} />
  );
}
