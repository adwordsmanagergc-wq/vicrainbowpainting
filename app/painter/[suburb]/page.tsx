import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Star,
  Check,
  Shield,
  Award,
  Home,
  Building2,
  Layers,
  Sparkles,
  Hammer,
  Paintbrush,
} from "lucide-react";
import { suburbs, suburbBySlug } from "@/lib/suburbs";
import { business } from "@/lib/business";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const s = suburbBySlug(suburb);
  if (!s) return {};
  const title = `Painter ${s.name} | ${business.name}`;
  const description = `Looking for a painter in ${s.name}? ${business.name} delivers interior, exterior & roof painting across ${s.name} VIC ${s.postcode}. Free quotes — call ${business.phone}.`;
  const url = `${business.siteUrl}/painter/${s.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
    keywords: [
      `painter ${s.name}`,
      `house painter ${s.name}`,
      `painters near me ${s.name}`,
      `${s.name} painter`,
      `interior painter ${s.name}`,
      `exterior painter ${s.name}`,
      `roof painting ${s.name}`,
      `painter Endeavour Hills`,
      `painter & decorator Victoria`,
    ],
  };
}

const services = [
  { icon: Home, title: "Interior Painting" },
  { icon: Building2, title: "Exterior Painting" },
  { icon: Layers, title: "Roof Painting" },
  { icon: Sparkles, title: "Decorative Finishes" },
  { icon: Hammer, title: "New Builds" },
  { icon: Paintbrush, title: "Repaints" },
];

const fixedReasons = [
  "Premium Dulux & Taubmans paint systems",
  "Fully insured — certificates on request",
  "Five-year workmanship guarantee",
  "Tidy, on-time, friendly local crew",
];

function logoLink() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={business.name}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 text-white shadow">
        <Paintbrush className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold rainbow-text">
          {business.shortName}
        </span>
        <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
          Painting · Endeavour Hills
        </span>
      </span>
    </Link>
  );
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const s = suburbBySlug(suburb);
  if (!s) notFound();

  const nearby = s.nearby
    .map((slug) => suburbBySlug(slug))
    .filter(Boolean) as typeof suburbs;

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    telephone: `+61${business.phoneDigits.slice(1)}`,
    email: business.email,
    url: `${business.siteUrl}/painter/${s.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: s.name,
      addressRegion: business.baseState,
      postalCode: s.postcode,
      addressCountry: "AU",
    },
    areaServed: { "@type": "Place", name: `${s.name}, VIC ${s.postcode}` },
    priceRange: "$$",
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: `Painter ${s.name}`,
        item: `${business.siteUrl}/painter/${s.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {logoLink()}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/#services" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/#areas" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Areas
              </Link>
              <Link href="/#gallery" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Gallery
              </Link>
              <Link href="/#faqs" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                FAQs
              </Link>
              <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href={business.phoneHref}
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                {business.phone}
              </a>
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Painter {s.name}</span>
        </div>
      </nav>

      <main>
        <section className="relative text-white py-20 md:py-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/55" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-cyan-500 to-purple-500" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="inline-block text-xs uppercase tracking-widest font-semibold rounded-full bg-white/10 px-3 py-1 mb-5">
                Painter {s.name} · VIC {s.postcode}
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Painter in {s.name}
              </h1>
              <p className="text-xl text-blue-100 mb-4 leading-relaxed">
                Professional interior, exterior &amp; roof painting in {s.name} from{" "}
                {business.name} — your local Endeavour Hills painter &amp; decorator.
              </p>
              <p className="text-base text-gray-300 mb-8 max-w-2xl">{s.intro}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={business.phoneHref}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call {business.phone}
                </a>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link
                  href="/#contact"
                  className="border-2 border-white/40 hover:border-white/80 hover:bg-white/10 text-white px-7 py-4 rounded-lg text-lg font-semibold flex items-center justify-center"
                >
                  Free Quote
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Insured
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-pink-400" />
                  5-Year Guarantee
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  5-Star Local Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Painting Services in {s.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need from one trusted painter in {s.name}, VIC {s.postcode}.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((sv, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <sv.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {sv.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Available throughout {s.name}, VIC {s.postcode}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why {s.name} Homeowners Choose Vic Rainbow
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...s.highlights, ...fixedReasons].map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  <p className="text-gray-200 text-sm leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Painting in {s.name}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {s.context}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reviews from {s.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {s.reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star
                        key={k}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-sm text-gray-500">{s.name}, VIC</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              FAQs — Painter {s.name}
            </h2>
            <div className="space-y-4">
              {s.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-medium text-gray-900 flex justify-between items-center hover:bg-gray-100">
                    {f.q}
                    <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {nearby.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Painter Near {s.name}
              </h2>
              <p className="text-gray-600 mb-8">
                We also paint these nearby suburbs around Endeavour Hills.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/painter/${n.slug}`}
                    className="bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                  >
                    Painter {n.name}
                  </Link>
                ))}
                <Link
                  href="/#areas"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  View All Areas
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready for a Free Quote in {s.name}?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Call, WhatsApp or fill in the form and we&apos;ll get back to you the same day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3.5 rounded-lg font-semibold"
              >
                <Phone className="w-5 h-5" />
                {business.phone}
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3.5 rounded-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white/80 hover:bg-white/10 px-6 py-3.5 rounded-lg font-semibold"
              >
                Send a message
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            {logoLink()}
            <p className="text-gray-400 text-sm mt-4 max-w-sm">
              Local painter &amp; decorator based in Endeavour Hills, VIC. Servicing the south-east Melbourne suburbs with quality interior, exterior and roof painting.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{business.address}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">All Areas</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              {suburbs.map((sb) => (
                <li key={sb.slug}>
                  <Link
                    href={`/painter/${sb.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    Painter {sb.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
        <a
          href={business.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={business.phoneHref}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
