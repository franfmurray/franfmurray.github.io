/* ==========================================================
   EDIT THIS FILE to update the site.
   ----------------------------------------------------------
   1. Put your images in  photos/monochrome/  and  photos/colour/
   2. Replace each `src` below with the path to your file,
      e.g.  src: "photos/monochrome/01.jpg"
   3. Add or remove lines to add or remove photographs.
   The placeholder images (picsum.photos) are only there so the
   layout can be previewed before your own work is added.
   ========================================================== */

const SITE = {
  name: "Francisco Murray",
  shortName: "F. Murray",
  email: "hello@yourdomain.com",              // ← your public email
  instagram: "https://instagram.com/yourhandle", // ← your Instagram
  location: "Buenos Aires — London",
  since: 2019,
};

// Placeholder helper — delete once you use your own files.
const ph = (seed, w, h, mono) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${mono ? "?grayscale" : ""}`;

/* ---------- Black & white archive ----------
   category must be one of the filters listed in MONO_CATEGORIES */
const MONO_CATEGORIES = ["Street", "Portrait", "Landscape", "Still"];

const MONOCHROME = [
  { src: ph("fm-street-1", 900, 1200, 1), w: 900, h: 1200, title: "Crossing",          place: "Buenos Aires", year: 2024, category: "Street" },
  { src: ph("fm-land-1",   1200, 800, 1), w: 1200, h: 800, title: "Low tide",          place: "Mar del Plata", year: 2023, category: "Landscape" },
  { src: ph("fm-port-1",   900, 1125, 1), w: 900, h: 1125, title: "Elena",             place: "London", year: 2025, category: "Portrait" },
  { src: ph("fm-still-1",  900, 900, 1),  w: 900, h: 900,  title: "Two cups",          place: "Studio", year: 2022, category: "Still" },
  { src: ph("fm-street-2", 1200, 800, 1), w: 1200, h: 800, title: "Waiting room",      place: "London", year: 2024, category: "Street" },
  { src: ph("fm-land-2",   900, 1200, 1), w: 900, h: 1200, title: "Fog, morning",      place: "Patagonia", year: 2021, category: "Landscape" },
  { src: ph("fm-port-2",   900, 1200, 1), w: 900, h: 1200, title: "Tomás",             place: "Buenos Aires", year: 2023, category: "Portrait" },
  { src: ph("fm-street-3", 900, 1125, 1), w: 900, h: 1125, title: "Late bus",          place: "London", year: 2025, category: "Street" },
  { src: ph("fm-still-2",  1200, 900, 1), w: 1200, h: 900, title: "Window, noon",      place: "Studio", year: 2024, category: "Still" },
  { src: ph("fm-land-3",   1200, 800, 1), w: 1200, h: 800, title: "Salt flats",        place: "Jujuy", year: 2020, category: "Landscape" },
  { src: ph("fm-street-4", 900, 1200, 1), w: 900, h: 1200, title: "Shadow line",       place: "Madrid", year: 2022, category: "Street" },
  { src: ph("fm-port-3",   900, 900, 1),  w: 900, h: 900,  title: "My father",         place: "Buenos Aires", year: 2019, category: "Portrait" },
  { src: ph("fm-still-3",  900, 1200, 1), w: 900, h: 1200, title: "Folded sheet",      place: "Studio", year: 2023, category: "Still" },
  { src: ph("fm-street-5", 1200, 800, 1), w: 1200, h: 800, title: "Market, Sunday",    place: "San Telmo", year: 2021, category: "Street" },
  { src: ph("fm-land-4",   900, 1125, 1), w: 900, h: 1125, title: "Pines",             place: "Bariloche", year: 2022, category: "Landscape" },
  { src: ph("fm-port-4",   1200, 900, 1), w: 1200, h: 900, title: "Two sisters",       place: "London", year: 2024, category: "Portrait" },
];

/* ---------- Current project (colour) ---------- */
const PROJECT = {
  title: "Ordinary Light",                       // ← working title
  status: "In progress",
  started: "Spring 2025",
  location: "London",
  format: "35mm & medium format",
  updated: "October 2026",
  statement:
    "A colour diary of the hours between things — kitchens at 7am, platforms after rain, the blue that arrives just before the streetlights. After years of working only in black and white, this is an attempt to let colour carry the weight that tone used to.",
  quote: "Colour is where the light admits it has a temperature.",
  journal: [
    { date: "Oct 2026", text: "Sequencing the first 40 frames. Dropped everything shot at midday." },
    { date: "Jun 2026", text: "Switched to Portra 400 for interiors. Started the series of windows." },
    { date: "Jan 2026", text: "First dummy book printed. Too many skies — removed half." },
    { date: "Apr 2025", text: "First roll. Project begins without a name." },
  ],
};

const COLOUR = [
  { src: ph("fm-col-1", 1800, 1000), w: 1800, h: 1000, title: "Platform 4",       place: "London", year: 2026 },
  { src: ph("fm-col-2", 900, 1150),  w: 900,  h: 1150, title: "Kitchen, 7am",     place: "London", year: 2025 },
  { src: ph("fm-col-3", 900, 1150),  w: 900,  h: 1150, title: "Blue hour",        place: "Hackney", year: 2026 },
  { src: ph("fm-col-4", 1200, 900),  w: 1200, h: 900,  title: "Laundry",          place: "London", year: 2025 },
  { src: ph("fm-col-5", 1300, 900),  w: 1300, h: 900,  title: "After rain",       place: "Peckham", year: 2026 },
  { src: ph("fm-col-6", 900, 1200),  w: 900,  h: 1200, title: "Orange curtain",   place: "London", year: 2026 },
  { src: ph("fm-col-7", 1800, 1100), w: 1800, h: 1100, title: "Car park, dusk",   place: "Croydon", year: 2026 },
  { src: ph("fm-col-8", 900, 1150),  w: 900,  h: 1150, title: "Neighbour",        place: "London", year: 2025 },
  { src: ph("fm-col-9", 900, 1150),  w: 900,  h: 1150, title: "Green wall",       place: "Deptford", year: 2026 },
];

/* Images used on the home page split hero */
const HERO = {
  mono:   { src: ph("fm-hero-mono", 1600, 2000, 1) },
  colour: { src: ph("fm-hero-colour", 1600, 2000) },
};

/* Portrait on the About page */
const PORTRAIT = { src: ph("fm-portrait", 1000, 1250, 1) };
