"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Check,
  ChevronDown,
  Shield,
  Paintbrush,
  Home,
  Building2,
  Layers,
  Sparkles,
  Hammer,
  Menu,
  X,
  MessageCircle,
  Loader2,
  Clock,
  Award,
} from "lucide-react";
import { business } from "@/lib/business";
import { suburbs } from "@/lib/suburbs";

const Map = dynamic(() => import("@/components/SuburbMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-2xl bg-gray-100 animate-pulse"
      style={{ height: "520px" }}
    />
  ),
});

const heroImage =
  "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80";

const carouselImages = [
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.15-(1).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.15-(2).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14-(2).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14-(3).jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.15.jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14.jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.10.jpeg",
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.14-(1).jpeg",
];

const services = [
  {
    icon: Home,
    title: "Interior Painting",
    desc: "Walls, ceilings, doors and trims finished to a flawless standard for every Victoria home.",
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    desc: "Weatherproof exterior systems for brick, render, weatherboard and Hebel — built to last Melbourne weather.",
  },
  {
    icon: Layers,
    title: "Roof Painting",
    desc: "Pressure-clean, prime and recoat tile or Colorbond roofs to add 10+ years of life.",
  },
  {
    icon: Sparkles,
    title: "Decorative Finishes",
    desc: "Feature walls, two-pack cabinetry, Venetian and texture finishes for a designer look.",
  },
  {
    icon: Building2,
    title: "Commercial",
    desc: "Shopfronts, offices, body corporate and strata work — completed after-hours where needed.",
  },
  {
    icon: Hammer,
    title: "New Builds & Repaints",
    desc: "Full painting for builders and homeowners on new homes and complete repaints across Endeavour Hills.",
  },
];

const benefits = [
  { title: "Free On-Site Quotes", desc: "We come to you across south-east Melbourne — no obligation." },
  { title: "Fully Insured", desc: "Full public liability cover on every Vic Rainbow Painting job." },
  { title: "Premium Paint", desc: "Dulux, Taubmans and Haymes — Australia's top brands only." },
  { title: "Tidy & Respectful", desc: "Drop sheets, masking and a swept site at the end of each day." },
  { title: "On-Time Delivery", desc: "Honest schedules and we stick to them." },
  { title: "Local Painter", desc: "Based right here in Endeavour Hills, VIC." },
];

const homeFaqs = [
  {
    q: "How much does a painter in Endeavour Hills cost?",
    a: "Costs vary with home size, condition and finish, but a typical 3-bedroom interior in Endeavour Hills sits around $4,000–$7,000 and an exterior $5,000–$10,000. We provide a free, written quote with line-by-line pricing.",
  },
  {
    q: "Do you cover Hallam, Narre Warren and Berwick?",
    a: "Yes — Vic Rainbow Painting services Endeavour Hills and the suburbs around it including Hallam, Narre Warren, Berwick, Doveton, Hampton Park, Dandenong North, Noble Park and Rowville.",
  },
  {
    q: "What paint brands do you use?",
    a: "We work with Dulux, Taubmans and Haymes for both interior and exterior systems. We choose the right product for the surface and your budget.",
  },
  {
    q: "Are you insured?",
    a: "Yes, we carry full public liability insurance. Certificates of currency are available on request.",
  },
  {
    q: "How long does a repaint take?",
    a: "A typical 3-bedroom interior takes 4–6 days. A full exterior usually takes 4–7 days depending on prep and weather. We'll give you a clear timeline before we start.",
  },
  {
    q: "Do you do roofs?",
    a: "Yes — concrete tile and Colorbond roofs. We pressure clean, repair, prime and apply two coats of roofing membrane.",
  },
  {
    q: "Can I get a quote on WhatsApp?",
    a: `Yes — message us on WhatsApp at ${business.phone} with photos and we'll get back to you the same day.`,
  },
];

const navItems = [
  { label: "Services", id: "services" },
  { label: "Areas", id: "areas" },
  { label: "Gallery", id: "gallery" },
  { label: "FAQs", id: "faqs" },
  { label: "Contact", id: "contact" },
];

function RainbowLogo() {
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

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const json = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": business.siteUrl,
      name: business.name,
      telephone: `+61${business.phoneDigits.slice(1)}`,
      email: business.email,
      url: business.siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: business.baseSuburb,
        addressRegion: business.baseState,
        postalCode: business.basePostcode,
        addressCountry: "AU",
      },
      areaServed: suburbs.map((s) => ({
        "@type": "Place",
        name: `${s.name}, VIC`,
      })),
      priceRange: "$$",
      openingHours: "Mo-Sa 07:00-18:00",
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.text = JSON.stringify(json);
    document.head.appendChild(tag);
    return () => {
      document.head.removeChild(tag);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", suburb: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <RainbowLogo />

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={business.phoneHref}
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                {business.phone}
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Free Quote
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  {business.phone}
                </a>
                <button
                  onClick={() => scrollTo("contact")}
                  className="mx-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-base font-semibold"
                >
                  Free Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative text-white py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/55" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-cyan-500 to-purple-500" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="inline-block text-xs uppercase tracking-widest font-semibold rounded-full bg-white/10 px-3 py-1 mb-5">
                Painter Endeavour Hills · Free Quotes
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Painter &amp; Decorator Victoria
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                {business.name} brings colour to homes and businesses across Endeavour Hills, Hallam, Narre Warren, Berwick and the south-east.
              </p>
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
                Interior, exterior and roof painting from a local team you can trust. Premium Dulux finishes, tidy work, on time — every time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={() => scrollTo("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all"
                >
                  Get a Free Quote
                </button>
                <a
                  href={business.phoneHref}
                  className="border-2 border-white/40 hover:border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {business.phone}
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Endeavour Hills, VIC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-pink-400" />
                  <span>5-Year Workmanship Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white py-12 overflow-hidden">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Recent Work
          </h2>
          <div className="carousel-track flex">
            {[...carouselImages, ...carouselImages, ...carouselImages].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 md:w-96 h-56 md:h-72 mx-2"
              >
                <img
                  src={src}
                  alt={`Vic Rainbow Painting work ${(i % carouselImages.length) + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-${carouselImages.length} * (24rem + 1rem))); }
            }
            .carousel-track {
              animation: scroll 30s linear infinite;
            }
            .carousel-track:hover { animation-play-state: paused; }
            @media (max-width: 768px) {
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-${carouselImages.length} * (20rem + 1rem))); }
              }
            }
          `}</style>
        </section>

        <section id="services" className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-widest font-semibold text-blue-600 mb-2">
                Our Services
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Painting Services Across South-East Melbourne
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From a single feature wall to a complete repaint, our Endeavour Hills crew has it covered.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Choose {business.name}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A local Endeavour Hills painter that takes pride in every finish.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{b.title}</h3>
                    <p className="text-gray-400 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest font-semibold text-blue-600 mb-2">
                Service Areas
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Suburbs We Paint Around Endeavour Hills
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Click any pin on the map to see our dedicated painting page for that suburb.
              </p>
            </div>

            <Map />

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/painter/${s.slug}`}
                  className="bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  Painter {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Our Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suburbs.slice(0, 4).flatMap((s) =>
                s.reviews.slice(0, 1).map((r, i) => (
                  <div
                    key={`${s.slug}-${i}`}
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
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">{r.name}</p>
                      <p className="text-sm text-gray-500">{s.name}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section id="faqs" className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {homeFaqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-300 mb-5">
                Call, WhatsApp or send the form — we&apos;ll respond the same day.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-base">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-semibold"
                >
                  <Phone className="w-5 h-5" /> {business.phone}
                </a>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </div>

            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thanks — we&apos;ve got it</h3>
                <p className="text-gray-300 mb-6">
                  We&apos;ll be in touch within 1 business day. For anything urgent, call us on{" "}
                  {business.phone}.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-white rounded-2xl p-6 md:p-8 text-gray-900"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="Your Name"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Jane Smith"
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder={business.phone}
                  />
                  <Input
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="jane@example.com"
                  />
                  <Input
                    label="Suburb"
                    value={form.suburb}
                    onChange={(v) => setForm({ ...form, suburb: v })}
                    placeholder="Endeavour Hills"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select a service…</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="roof">Roof Painting</option>
                    <option value="decorative">Decorative Finishes</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Tell us about your project…"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm mb-4">
                    Something went wrong. Please call us on{" "}
                    <a href={business.phoneHref} className="underline">
                      {business.phone}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending…
                    </>
                  ) : (
                    "Request Free Quote"
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <RainbowLogo />
              <p className="text-gray-400 text-sm mt-4 max-w-md">
                Professional painting and decorating across Endeavour Hills, the City of Casey and Greater Dandenong. Quality finishes, premium paint, friendly service.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {suburbs.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/painter/${s.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      Painter {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a
                    href={business.phoneHref}
                    className="hover:text-white transition-colors"
                  >
                    {business.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  <a
                    href={business.whatsappHref}
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp {business.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href={`mailto:${business.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {business.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{business.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
          </div>
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

function Input({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
