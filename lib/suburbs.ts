export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  lat: number;
  lng: number;
  intro: string;
  context: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
  reviews: { name: string; rating: number; text: string }[];
  nearby: string[];
}

export const suburbs: Suburb[] = [
  {
    slug: "endeavour-hills",
    name: "Endeavour Hills",
    postcode: "3802",
    lat: -37.9776,
    lng: 145.2536,
    intro:
      "Endeavour Hills is the home base of Vic Rainbow Painting. From compact courtyard homes around Heatherton Road to larger family properties on the elevated streets near Power Reserve, we paint right across this suburb every week.",
    context:
      "Most homes here were built between the late 1970s and 1990s with a mix of cream brick veneer, render and tile roofs. Many original surfaces are due for a refresh, and we regularly take on full exterior repaints, eaves and fascia work, and complete interior makeovers when families update their homes. Because we live and work locally, we can usually get a quote out within a couple of days.",
    highlights: [
      "Local crew based in Endeavour Hills — fast call-outs",
      "Specialist preparation for cream brick and rendered facades",
      "Free in-home colour consult with Dulux & Taubmans charts",
      "Tidy site every day — no surprises for the family at home",
    ],
    faqs: [
      {
        q: "How much does it cost to repaint a house in Endeavour Hills?",
        a: "A typical 3 to 4 bedroom Endeavour Hills home runs between $4,500 and $9,500 for a full exterior, depending on the height, condition and number of colours. We always provide a free, written quote with no surprises.",
      },
      {
        q: "Do you paint Endeavour Hills rendered homes?",
        a: "Yes — we patch hairline cracks, seal any blown render and apply a flexible exterior membrane for a finish that lasts. It's one of the most common jobs we do in this suburb.",
      },
      {
        q: "Can you start quickly in Endeavour Hills?",
        a: "Usually yes. As we're based right here, we can normally inspect within 48 hours and have a crew on site within 1–2 weeks for most jobs.",
      },
      {
        q: "Are you insured?",
        a: "Vic Rainbow Painting carries full public liability insurance. Certificates are available on request before we start.",
      },
    ],
    reviews: [
      {
        name: "Anita P.",
        rating: 5,
        text: "We had the whole interior repainted before we moved in. The team in Endeavour Hills was tidy, finished a day early and the cutting in is razor sharp.",
      },
      {
        name: "Michael & Tess",
        rating: 5,
        text: "Excellent exterior repaint on our brick veneer. Vic's crew sanded everything back, sealed the render and the colour we picked looks great in the afternoon sun.",
      },
    ],
    nearby: ["hallam", "doveton", "narre-warren", "rowville"],
  },
  {
    slug: "hallam",
    name: "Hallam",
    postcode: "3803",
    lat: -38.0156,
    lng: 145.2719,
    intro:
      "Hallam sits just south-east of Endeavour Hills along the Princes Highway, with a busy mix of residential streets and commercial pockets. We paint Hallam homes and small commercial sites week in, week out.",
    context:
      "Hallam's housing stock leans towards 1980s–2000s family homes, plus newer estate builds south of the railway line. Many owners are at the stage where the original paint has chalked or the trim needs a refresh — we offer staged interior repaints around busy households and full exterior repaints scheduled to suit Melbourne's weather windows.",
    highlights: [
      "Quick travel from our Endeavour Hills base",
      "Experienced with newer estate render finishes",
      "Workmanship guarantee on every Hallam job",
      "Premium Dulux Weathershield for exteriors",
    ],
    faqs: [
      {
        q: "Do you paint shopfronts and small offices in Hallam?",
        a: "Yes. We do after-hours and weekend commercial work along Princes Highway and the Hallam industrial pocket so your business keeps trading.",
      },
      {
        q: "How long does a Hallam interior repaint take?",
        a: "A standard 3-bedroom interior is usually 4–6 days including ceilings, walls and trim. We confirm dates in writing before starting.",
      },
      {
        q: "Can you paint while we live in the house?",
        a: "Absolutely — we work room by room, use low-VOC paints on request, and pack down each evening so your family can use the space.",
      },
    ],
    reviews: [
      {
        name: "Jordan K.",
        rating: 5,
        text: "Repainted our Hallam townhouse top to bottom in 5 days. Cleaner finish than I thought possible — recommended.",
      },
      {
        name: "Sienna R.",
        rating: 5,
        text: "Vic's team did our shop fit-out overnight so we didn't lose a trading day. Professional from quote to clean-up.",
      },
    ],
    nearby: ["endeavour-hills", "narre-warren", "doveton", "hampton-park"],
  },
  {
    slug: "narre-warren",
    name: "Narre Warren",
    postcode: "3805",
    lat: -38.0264,
    lng: 145.3025,
    intro:
      "Narre Warren is one of the City of Casey's biggest residential hubs, full of family homes from the early 1990s through to brand-new estates near Fountain Gate. Our painters cover every pocket.",
    context:
      "Older Narre Warren homes around Webb Street and Verdun Drive often need exterior prep work — chalky brick, weathered eaves and faded garage doors are common. The newer estates south of Heatherton Road call for premium acrylic systems on rendered foam panels. We bring the right product for both.",
    highlights: [
      "Specialists in render and Hebel exteriors",
      "Free colour consult with current Dulux trends",
      "Drop sheets and floor protection on every job",
      "Five-year workmanship guarantee",
    ],
    faqs: [
      {
        q: "Do you paint render and foam Hebel walls in Narre Warren?",
        a: "Yes — these surfaces need a flexible acrylic system to handle Melbourne's temperature swings. We use Dulux AcraTex or equivalent on every render job.",
      },
      {
        q: "Can you repaint a brand-new home?",
        a: "Even newly built homes benefit from a feature wall or trim refresh. We quote new builds at competitive rates and work cleanly around finished floors.",
      },
      {
        q: "Do you paint roofs in Narre Warren?",
        a: "Yes, both Colorbond and concrete tile roofs. We pressure clean, replace any broken tiles, prime and apply two coats for a 10+ year finish.",
      },
    ],
    reviews: [
      {
        name: "Daniel C.",
        rating: 5,
        text: "Painted the whole exterior of our Narre Warren home including the garage doors. Vic himself came out for the quote — straight up, fair price, perfect job.",
      },
      {
        name: "Priya S.",
        rating: 5,
        text: "Beautiful feature wall in our living room and the hallway re-done. Tidy and friendly crew.",
      },
    ],
    nearby: ["endeavour-hills", "berwick", "hallam", "hampton-park"],
  },
  {
    slug: "berwick",
    name: "Berwick",
    postcode: "3806",
    lat: -38.0314,
    lng: 145.3469,
    intro:
      "Berwick blends heritage cottages, leafy older streets and large modern family homes through Old Berwick Village and the newer estates. Vic Rainbow Painting works across all of them.",
    context:
      "Heritage High Street homes need a careful, traditional approach — gloss finishes on weatherboards, hand-cut sash windows and authentic Victorian colour palettes. The newer Berwick Springs and Berwick Waters estates call for a modern, low-sheen render system. We adjust our products and prep to suit.",
    highlights: [
      "Heritage paint experience for High Street properties",
      "Premium two-pack finishes available on doors and trims",
      "Master colour consultation included",
      "Insured, reference-checkable Berwick crew",
    ],
    faqs: [
      {
        q: "Can you paint a heritage Berwick weatherboard?",
        a: "Yes — we hand-prepare each board, replace any rotten timber, prime knots, and finish with a high-grade exterior gloss for that authentic period look.",
      },
      {
        q: "Do you do upmarket interior finishes in Berwick?",
        a: "We offer premium two-pack and Venetian-style finishes for clients who want a high-end result. Ask for examples during the quote.",
      },
      {
        q: "How far in advance should I book?",
        a: "For Berwick exteriors during the spring and autumn windows, we recommend booking 3–4 weeks ahead. Interiors are usually quicker to schedule.",
      },
    ],
    reviews: [
      {
        name: "Helen W.",
        rating: 5,
        text: "Repainted our weatherboard in Old Berwick to a heritage colour scheme. Stunning result — the timber preparation alone took two days and you can see it in the finish.",
      },
      {
        name: "Mark T.",
        rating: 5,
        text: "Full interior repaint in Berwick Springs. The team protected our floors completely and finished on time. We'd hire them again in a heartbeat.",
      },
    ],
    nearby: ["narre-warren", "endeavour-hills", "hampton-park", "rowville"],
  },
  {
    slug: "doveton",
    name: "Doveton",
    postcode: "3177",
    lat: -37.9919,
    lng: 145.2356,
    intro:
      "Doveton is a tightly knit suburb just north-west of Endeavour Hills, full of original 1950s and 60s ex-Housing Commission cottages now being lovingly updated. We've painted dozens of them.",
    context:
      "Older Doveton homes often have layered paint history — sometimes including pre-1970s lead-based coatings on weatherboard or eaves. We follow safe lead-paint procedures, sand and seal correctly, and use modern acrylic systems for a lasting finish. Many of our Doveton clients are renovating to sell or to add value, and we work to a deadline.",
    highlights: [
      "Lead-safe preparation on pre-1970s homes",
      "Pre-sale repaint packages with a fast turnaround",
      "Honest quotes — no extras after we start",
      "Clean job site at end of every day",
    ],
    faqs: [
      {
        q: "Can you handle older homes with lead paint in Doveton?",
        a: "Yes. We test, contain and remove old coatings safely under WorkSafe Victoria guidelines, then re-prime with the correct sealer before topcoats.",
      },
      {
        q: "Do you offer pre-sale painting packages in Doveton?",
        a: "We do — interior + key exterior touch-ups designed to maximise inspection appeal at a fixed price.",
      },
      {
        q: "What's the cheapest way to refresh my Doveton home?",
        a: "A clean walls + ceilings + trim combo in a fresh white usually transforms a property for the lowest cost. We can quote that as a separate package.",
      },
    ],
    reviews: [
      {
        name: "Bianca L.",
        rating: 5,
        text: "Vic painted our Doveton home before auction. Buyers commented on how fresh it looked and we sold above reserve. Worth every cent.",
      },
      {
        name: "Glen H.",
        rating: 5,
        text: "Lead paint on our 60s weatherboard had us nervous, but the team handled it properly and the new finish looks brand new.",
      },
    ],
    nearby: ["endeavour-hills", "hallam", "dandenong-north", "noble-park"],
  },
  {
    slug: "hampton-park",
    name: "Hampton Park",
    postcode: "3976",
    lat: -38.0322,
    lng: 145.2592,
    intro:
      "Hampton Park is a busy southern neighbour to Endeavour Hills with a strong mix of family homes, units and townhouses. We paint exteriors, interiors and roofs across the suburb.",
    context:
      "A lot of Hampton Park homes are in the 25–35 year age bracket — that's exactly the point where exterior paint has chalked and rooves benefit from restoration. We use Dulux Weathershield on walls and Roofmate or equivalent on tiles. For interiors, our most-requested update is fresh ceilings, walls and trim to lift a tired look.",
    highlights: [
      "Roof painting and restoration specialists",
      "Premium Dulux exterior systems",
      "All trims, eaves and fascia included in quotes",
      "Clear, line-by-line written quotes",
    ],
    faqs: [
      {
        q: "Is roof painting worthwhile in Hampton Park?",
        a: "If your tiles are porous, faded or moss-covered, yes — a full restoration adds 10+ years of life and noticeably improves kerb appeal. We'll inspect and tell you honestly if it's worth it.",
      },
      {
        q: "Do you paint townhouses and units?",
        a: "Yes. We work with body corporate managers and individual owners on shared and private painting work in Hampton Park.",
      },
      {
        q: "Do you paint window frames and garage doors?",
        a: "Both — we prep and finish timber and aluminium frames, plus tilt and panel-lift garage doors using compatible enamels.",
      },
    ],
    reviews: [
      {
        name: "Renee O.",
        rating: 5,
        text: "Roof and exterior in Hampton Park done in just over a week. Big improvement and the quote was the best of three.",
      },
      {
        name: "Sam W.",
        rating: 5,
        text: "Painted our unit and tidied up the carport. Quick, careful work — neighbours have been asking for the team's number.",
      },
    ],
    nearby: ["endeavour-hills", "narre-warren", "hallam", "berwick"],
  },
  {
    slug: "dandenong-north",
    name: "Dandenong North",
    postcode: "3175",
    lat: -37.9614,
    lng: 145.2167,
    intro:
      "Dandenong North borders Endeavour Hills to the north-west and has a wide range of housing — older fibro and weatherboard cottages, classic brick veneer, plus newer infill builds.",
    context:
      "Many original Dandenong North cottages around Stud Road benefit from full prep, sealing and a modern colour scheme to bring them up to today's standards. Our team handles lead-safe procedures where needed and offers staged repaints for landlords preparing rentals between tenancies.",
    highlights: [
      "Landlord-friendly between-tenancy repaints",
      "Lead-safe prep on older homes",
      "Quick mobilisation from Endeavour Hills",
      "Premium paint at competitive rates",
    ],
    faqs: [
      {
        q: "Do you do landlord repaints in Dandenong North?",
        a: "Yes — we offer fixed-price interior packages with photos before and after, perfect for property managers turning over a rental.",
      },
      {
        q: "Can you match an existing colour?",
        a: "We can colour-match a small chip from your wall at most major paint shops in the area. Bring a sample and we'll match it.",
      },
      {
        q: "How long is your workmanship guarantee?",
        a: "Five years on workmanship for both interior and exterior projects in Dandenong North.",
      },
    ],
    reviews: [
      {
        name: "Tony M.",
        rating: 5,
        text: "Repainted three rooms and the trim in our Dandenong North rental. Tenant moved in the next week. Painless process.",
      },
      {
        name: "Karen B.",
        rating: 5,
        text: "Vic's crew did our parents' weatherboard cottage. Beautiful job, careful around the garden, friendly the whole way.",
      },
    ],
    nearby: ["endeavour-hills", "doveton", "noble-park", "hallam"],
  },
  {
    slug: "noble-park",
    name: "Noble Park",
    postcode: "3174",
    lat: -37.9647,
    lng: 145.1822,
    intro:
      "Noble Park is a diverse, well-established suburb west of Endeavour Hills with everything from post-war cottages to modern townhouses. Our painters handle the full range.",
    context:
      "Older Noble Park homes near the railway often need substantial prep work — flaking eaves, chalky brick and faded fascia. Newer townhouses south of Princes Highway are usually a quick repaint or feature wall job. We bring the same care to both ends of the market.",
    highlights: [
      "Decades of combined experience in older homes",
      "Premium acrylics on every exterior",
      "Carefully masked windows, floors and gardens",
      "Friendly, English-speaking crew",
    ],
    faqs: [
      {
        q: "How much do you charge per room in Noble Park?",
        a: "A standard bedroom (walls + ceiling + trim) is typically $700–$950 supplied and applied, depending on prep needed and ceiling height. We can confirm at the quote.",
      },
      {
        q: "Do you paint outside in winter?",
        a: "We can — we pick weather windows carefully and only paint when the surface temperature and humidity are right. Most exterior work happens September to May.",
      },
      {
        q: "Will you move my furniture?",
        a: "We can move and re-cover small to medium pieces. For very large items we'd ask you to shift those before we start, then we handle the rest.",
      },
    ],
    reviews: [
      {
        name: "Paul N.",
        rating: 5,
        text: "Quoted, scheduled and finished our Noble Park exterior on time and on budget. Crew was easy to deal with.",
      },
      {
        name: "Lina K.",
        rating: 5,
        text: "Hallway and living room repaint done while we were at work. Came home to a beautifully finished space — couldn't be happier.",
      },
    ],
    nearby: ["dandenong-north", "doveton", "endeavour-hills", "hallam"],
  },
];

export const suburbBySlug = (slug: string) =>
  suburbs.find((s) => s.slug === slug);
