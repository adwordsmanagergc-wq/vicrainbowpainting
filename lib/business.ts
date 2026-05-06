export const business = {
  name: "Vic Rainbow Painting",
  shortName: "Vic Rainbow",
  phone: "0481 575 516",
  phoneDigits: "0481575516",
  phoneHref: "tel:0481575516",
  whatsappHref:
    "https://wa.me/61481575516?text=" +
    encodeURIComponent("Hi Vic Rainbow Painting, I'd like a free quote"),
  email: "info@vicrainbowpaiting.com",
  baseSuburb: "Endeavour Hills",
  baseState: "VIC",
  basePostcode: "3802",
  address: "Endeavour Hills, VIC 3802",
  hours: "Mon–Sat 7am–6pm",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://vicrainbowpainting.com.au",
  tagline: "Painter & Decorator Victoria",
  primaryColor: "#2563eb",
} as const;
