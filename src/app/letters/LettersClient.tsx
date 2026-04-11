"use client";

import { useState } from "react";

/* ── Types ── */

export type Letter = {
  id: string;
  title: string;
  slug: string;
  category?: "development" | "architecture" | "construction" | "my-agency";
  excerpt?: string;
  publishedAt?: string;
};

/* ── Shared UI pieces ── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 13,
        fontWeight: 300,
        letterSpacing: "0.01em",
        padding: "4px 12px",
        borderRadius: "var(--radius)",
        backgroundColor: "var(--border)",
        color: "var(--foreground)",
      }}
    >
      {children}
    </span>
  );
}

function SubscribeForm() {
  return (
    <div style={{ display: "flex", gap: 0, maxWidth: 420, width: "100%" }}>
      <div style={{ position: "relative", flex: 1 }}>
        <input
          type="email"
          placeholder="Your email"
          style={{
            width: "100%",
            fontSize: 15,
            fontWeight: 300,
            padding: "12px 40px 12px 16px",
            border: "1px solid var(--border)",
            borderRight: "none",
            borderRadius: "var(--radius) 0 0 var(--radius)",
            background: "var(--surface)",
            color: "var(--foreground)",
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)" }}
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </div>
      <button
        style={{
          fontSize: 15,
          fontWeight: 300,
          padding: "12px 24px",
          border: "none",
          borderRadius: "0 var(--radius) var(--radius) 0",
          background: "var(--foreground)",
          color: "var(--accent)",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontFamily: "inherit",
        }}
      >
        Subscribe
      </button>
    </div>
  );
}

/* ── Category helpers ── */

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "development", label: "Development" },
  { value: "architecture", label: "Architecture" },
  { value: "construction", label: "Construction" },
  { value: "my-agency", label: "My Agency" },
];

const CATEGORY_LABELS: Record<string, string> = {
  development: "Development",
  architecture: "Architecture",
  construction: "Construction",
  "my-agency": "My Agency",
};

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ── Letter list item ── */

function LetterRow({ letter }: { letter: Letter }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/letters/${letter.slug}`}
      style={{
        display: "block",
        padding: "20px 24px",
        borderRadius: "var(--radius)",
        backgroundColor: hovered ? "var(--surface)" : "transparent",
        textDecoration: "none",
        transition: "background-color 0.15s",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
        <h3
          style={{
            fontSize: 17,
            fontWeight: 300,
            letterSpacing: "-0.01em",
            color: "var(--foreground)",
            flex: 1,
            minWidth: 200,
          }}
        >
          {letter.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          {letter.category && (
            <span
              style={{
                fontSize: 12,
                fontWeight: 300,
                padding: "3px 10px",
                borderRadius: "var(--radius)",
                backgroundColor: "var(--border)",
                color: "var(--foreground)",
                letterSpacing: "0.01em",
              }}
            >
              {CATEGORY_LABELS[letter.category]}
            </span>
          )}
          {letter.publishedAt && (
            <span
              style={{
                fontSize: 13,
                fontWeight: 300,
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
            >
              {formatDate(letter.publishedAt)}
            </span>
          )}
        </div>
      </div>

      {letter.excerpt && (
        <p
          style={{
            marginTop: 6,
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          {letter.excerpt}
        </p>
      )}
    </a>
  );
}

/* ── Main client component ── */

export default function LettersClient({ letters }: { letters: Letter[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? letters
      : letters.filter((l) => l.category === activeCategory);

  return (
    <main>
      {/* ════════════════════════════════════════════
          SECTION 1 — Title + category tabs
         ════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 80,
          paddingBottom: 40,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <Badge>Letters</Badge>

        <h1
          style={{
            marginTop: 20,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          All letters.
        </h1>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            marginTop: 32,
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  padding: "6px 16px",
                  border: "none",
                  borderRadius: "var(--radius)",
                  background: isActive ? "var(--foreground)" : "var(--surface)",
                  color: isActive ? "var(--background)" : "var(--muted)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.15s, color 0.15s",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — Letter list
         ════════════════════════════════════════════ */}
      <section
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 80,
        }}
      >
        {filtered.length === 0 ? (
          <p
            style={{
              padding: "40px 24px",
              fontSize: 15,
              fontWeight: 300,
              color: "var(--muted)",
            }}
          >
            No letters in this category yet.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {filtered.map((letter, i) => (
              <div key={letter.id}>
                <LetterRow letter={letter} />
                {i < filtered.length - 1 && (
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "var(--border)",
                      marginLeft: 24,
                      marginRight: 24,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — Subscribe CTA
         ════════════════════════════════════════════ */}
      <section
        style={{
          paddingLeft: 40,
          paddingRight: 40,
          paddingBottom: 80,
        }}
      >
        <Badge>Get Inside</Badge>

        <div
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: "var(--surface)",
            borderRadius: "var(--radius)",
            padding: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2 style={{ maxWidth: 480 }}>
            New letters land every week. Don&apos;t miss the next one.
          </h2>

          <p style={{ marginTop: 12, fontSize: 18, fontWeight: 300 }}>
            <span style={{ marginRight: 6 }}>&rarr;</span>
            <em>Short, honest, always practical.</em>
          </p>

          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", width: "100%" }}>
            <SubscribeForm />
          </div>

          <p
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "var(--muted)",
              letterSpacing: "0.01em",
            }}
          >
            No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — Footer
         ════════════════════════════════════════════ */}
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: 48,
          paddingBottom: 24,
        }}
      >
        <div style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--foreground)",
            }}
          >
            LUKA
          </span>
        </div>

        <nav style={{ display: "flex", gap: 24, marginTop: 20 }}>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Letters", href: "/letters" },
            { label: "Legal", href: "/legal" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p
          style={{
            marginTop: 20,
            fontSize: 13,
            color: "var(--muted)",
            letterSpacing: "0.01em",
          }}
        >
          &copy; 2026 The Luka Dosen Labs. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
