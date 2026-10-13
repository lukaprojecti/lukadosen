// All copy and links of the landing page (site mode `landing`) in one place.

export type LandingIcon = "house" | "linkedin" | "calendar";

export type LandingLink = {
  label: string;
  href: string;
  icon: LandingIcon;
  variant: "primary" | "secondary";
};

export const landingContent = {
  portrait: {
    src: "/2026-portrait-luka-mint.jpg",
    alt: "Luka Došen, Planung von Wohnbauprojekten",
  },
  eyebrow: "Hoi, Luka hier",
  title: {
    lead: "Ich plane coole Projekte mit ",
    accent: "coolen Leuten.",
  },
  intro: {
    before: "Mit ",
    link: { label: "Projecti", href: "https://projecti.ch" },
    after:
      " begleite ich Wohnbauprojekte von der ersten Parzellenidee bis zur Umsetzung, für Grundeigentümer, Entwickler und institutionelle Bauherren. Aus Landquart, für die ganze Deutschschweiz.",
  },
  links: [
    { label: "Projecti besuchen", href: "https://projecti.ch", icon: "house", variant: "secondary" },
    { label: "Vernetze dich", href: "https://www.linkedin.com/in/lukadosen", icon: "linkedin", variant: "secondary" },
    { label: "Call buchen", href: "https://cal.com/luka-dosen/projecti", icon: "calendar", variant: "primary" },
  ] satisfies LandingLink[],
  footer: {
    owner: "The Luka Dosen Labs",
    legal: { label: "Impressum & Datenschutz", href: "/legal" },
  },
};
