import type { LandingIcon } from "@/lib/landingContent";

// Inline icons for the landing page buttons (stroke 1.6, round caps).
const svgProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Icon({ name }: { name: LandingIcon }) {
  switch (name) {
    case "house":
      return (
        <svg {...svgProps}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9v11h14V9" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "linkedin":
      // Same glyph as the LinkedIn icon in Sidebar.tsx.
      return (
        <svg {...svgProps}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...svgProps}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      );
  }
}
