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
    alt: "Luka Došen, Projektentwicklung und Planung",
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
      " begleite ich Immobilienentwickler, Investoren und private Bauherren vom ersten Entwicklungskonzept eines Grundstücks bis zur baureifen Planung. Dadurch erreichen sie eine höhere Performance in ihren Bauprojekten.",
  },
  links: [
    { label: "Projecti besuchen", href: "https://projecti.ch", icon: "house", variant: "secondary" },
    { label: "Vernetze dich", href: "https://www.linkedin.com/in/lukadosen", icon: "linkedin", variant: "secondary" },
    { label: "Call buchen", href: "https://cal.com/luka-dosen/projecti", icon: "calendar", variant: "primary" },
  ] satisfies LandingLink[],
  notFound: {
    eyebrow: "Seite nicht gefunden",
    title: { lead: "Nicht jedes Projekt läuft ", accent: "nach Plan." },
    cta: "Zur Startseite",
  },
  footer: {
    owner: "The Luka Dosen Labs",
    legal: { label: "Impressum & Datenschutz", href: "/legal" },
  },
};
