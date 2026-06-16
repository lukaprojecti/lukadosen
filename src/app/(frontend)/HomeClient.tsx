"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";
import { useSubscribe } from "@/lib/useSubscribe";
import Image from "next/image";
import { type Letter } from "./letters/LettersClient";

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

function SubscribeForm({ source }: { source: string }) {
  const [email, setEmail] = useState("");
  const { status, message, submit } = useSubscribe(source);
  const busy = status === "loading";
  const done = status === "success";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!busy && !done) submit(email);
      }}
      style={{ width: "100%", maxWidth: 420 }}
    >
      <div style={{ display: "flex", gap: 0, width: "100%" }}>
        <div style={{ position: "relative", flex: 1 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={busy || done}
            placeholder="Your email"
            aria-label="Your email"
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
          className="btn-hover"
          type="submit"
          disabled={busy || done}
          style={{
            fontSize: 15,
            fontWeight: 300,
            padding: "12px 24px",
            border: "none",
            borderRadius: "0 var(--radius) var(--radius) 0",
            background: "var(--foreground)",
            color: "var(--accent)",
            cursor: busy || done ? "default" : "pointer",
            whiteSpace: "nowrap",
            fontFamily: "inherit",
            opacity: busy || done ? 0.75 : 1,
          }}
        >
          {busy ? "…" : done ? "Joined ✓" : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          style={{
            marginTop: 10,
            fontSize: 13,
            fontWeight: 300,
            textAlign: "center",
            color: status === "error" ? "#b23b3b" : "var(--muted)",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}

function NewsletterTab({ label, active }: { label: string; active: boolean }) {
  return (
    <button
      style={{
        fontSize: 14,
        fontWeight: 300,
        padding: "6px 14px",
        border: "none",
        borderRadius: "var(--radius)",
        background: active ? "var(--surface)" : "transparent",
        color: active ? "var(--foreground)" : "var(--muted)",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = "var(--surface)";
          e.currentTarget.style.color = "var(--foreground)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--muted)";
        }
      }}
    >
      {label}
    </button>
  );
}

const CATEGORY_LABELS: Record<string, string> = {
  development: "Development",
  architecture: "Architecture",
  construction: "Construction",
  "my-agency": "My Agency",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsletterCard({
  title,
  category,
  publishedAt,
  slug,
  thumbnail,
  delay = 0,
}: {
  title: string;
  category?: Letter["category"];
  publishedAt?: string;
  slug: string;
  thumbnail?: { url: string; alt: string };
  delay?: number;
}) {
  const meta = [category ? CATEGORY_LABELS[category] : null, publishedAt ? formatDate(publishedAt) : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <motion.a
      href={`/letters/${slug}`}
      className="card-hover"
      style={{
        display: "block",
        borderRadius: "var(--radius)",
        backgroundColor: "var(--surface)",
        cursor: "pointer",
        overflow: "hidden",
        padding: 8,
        textDecoration: "none",
        color: "inherit",
      }}
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...fadeUp.transition, delay }}
    >
      {/* Image — 4:3, with zoom-on-hover via CSS */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          borderRadius: "calc(var(--radius) - 4px)",
          overflow: "hidden",
        }}
      >
        <div
          className="card-thumbnail"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundColor: "#d9d9d0",
            transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {thumbnail && (
            <Image
              src={thumbnail.url}
              alt={thumbnail.alt}
              fill
              sizes="(max-width: 700px) 50vw, 260px"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>

      {/* Copy */}
      <div style={{ padding: "14px 8px 8px 8px" }}>
        <p
          style={{
            fontSize: 16,
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 1.35,
            color: "var(--foreground)",
          }}
        >
          {title}
        </p>
        <p
          style={{
            marginTop: 8,
            fontSize: 13,
            color: "var(--muted)",
            letterSpacing: "0.01em",
          }}
        >
          {meta}
        </p>
      </div>
    </motion.a>
  );
}

/* ── Page ── */

export default function HomeClient({ letters }: { letters: Letter[] }) {
  return (
    <main>
      {/* ════════════════════════════════════════════
          SECTION 1 — Hero
         ════════════════════════════════════════════ */}
      <Reveal>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: 80,
            paddingBottom: 64,
          }}
        >
          <h1>
            First plan.
            <br />
            Then <em>build.</em>
          </h1>

          <p
            style={{
              marginTop: 24,
              maxWidth: 580,
              color: "var(--muted)",
              fontSize: 16,
              lineHeight: 1.3,
            }}
          >
            I show aspiring developers and professionals how residential projects actually get planned
            and built. Decision frameworks, execution systems, and insider lessons from someone who&rsquo;s
            been inside 100+ projects.
          </p>

          <p
            style={{
              marginTop: 20,
              fontSize: 16,
              color: "var(--muted)",
              letterSpacing: "0.01em",
            }}
          >
            Join 100+ aspiring developers and real estate professionals.
          </p>

          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", width: "100%" }}>
            <SubscribeForm source="homepage-hero" />
          </div>

          <p
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "var(--muted)",
              letterSpacing: "0.01em",
              maxWidth: 420,
            }}
          >
            Weekly insights on planning, building, and ownership.
            <br />
            No spam, unsubscribe anytime.
          </p>
        </section>
      </Reveal>

      <div style={{ height: 80 }} />

      {/* ════════════════════════════════════════════
          SECTION 2 — About
         ════════════════════════════════════════════ */}
      <Reveal>
        <section>
          {/* 1. Badge */}
          <Badge>About</Badge>

          {/* 2. Title */}
          <h2 style={{ marginTop: 20 }}>Hey, I&rsquo;m Luka.</h2>

          {/* 3. Intro text — full width under title */}
          <p
            style={{
              marginTop: 20,
              color: "var(--foreground)",
              lineHeight: 1.3,
              fontSize: 16,
              maxWidth: 600,
            }}
          >
            Over the last 9 years I&rsquo;ve planned over 100 residential projects across Switzerland.
            In 2025 I started my agency Projecti to turn complexity into clarity. And I&rsquo;m
            documenting the path from planner to developer, sharing everything I learn along the way.
          </p>

          {/* 4. Two columns on desktop (portrait left, benefits right, equal
              height); on mobile it stacks: square portrait under the text, then
              the benefits below. */}
          <div className="about-grid" style={{ marginTop: 32 }}>
            {/* Portrait — desktop: matches benefit column height; mobile: square */}
            <div className="about-portrait">
              <Image
                src="/2026-portrait-luka.jpg"
                alt="Luka Došen, real estate planner and founder of Projecti"
                fill
                /* Desktop box is narrow but tall (landscape source, cover scales
                   by height); mobile box is a full-width square. Over-state the
                   width so a high-res variant is pulled and stays sharp. */
                sizes="(max-width: 767px) 92vw, (max-width: 1024px) 60vw, 900px"
                quality={85}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Right: 3 benefits stacked vertically */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  title: "See the decision logic",
                  text: "I document how projects actually get executed. The constraints, trade-offs, and sequencing most people never see. Real decisions from inside the work.",
                },
                {
                  title: "Get systems you can use",
                  text: "Frameworks, checklists, and operating systems I'm building and testing. For development, business, or your own path. Tools that work.",
                },
                {
                  title: "See the journey from inside",
                  text: "I'm on the journey from planner to builder. You see what's working (and what isn't) in real time. Transparency over polish. Receipts over theory.",
                },
              ].map((block) => (
                <div
                  key={block.title}
                  style={{
                    backgroundColor: "var(--surface)",
                    borderRadius: "var(--radius)",
                    padding: "20px 18px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      color: "var(--foreground)",
                      marginBottom: 8,
                    }}
                  >
                    {block.title}
                  </p>
                  <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.5 }}>
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. CTA button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <a
              href="/about"
              className="btn-hover"
              style={{
                fontSize: 15,
                fontWeight: 300,
                padding: "12px 28px",
                borderRadius: "var(--radius)",
                background: "var(--foreground)",
                color: "var(--accent)",
                textDecoration: "none",
                fontFamily: "inherit",
                display: "inline-block",
              }}
            >
              More About Me
            </a>
          </div>
        </section>
      </Reveal>

      <div style={{ height: 80 }} />

      {/* ════════════════════════════════════════════
          SECTION 3 — Letters (4 latest published, from Payload)
         ════════════════════════════════════════════ */}
      <Reveal>
        <section>
          <Badge>Inside newsletter</Badge>

          {/* Filter tabs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginTop: 20,
            }}
          >
            {["All", "Development", "Architecture", "Construction", "My Agency"].map((tab, i) => (
              <NewsletterTab key={tab} label={tab} active={i === 0} />
            ))}
          </div>

          {/* 2-column card grid */}
          {letters.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
                marginTop: 24,
              }}
            >
              {letters.map((letter, i) => (
                <NewsletterCard
                  key={letter.id}
                  title={letter.title}
                  category={letter.category}
                  publishedAt={letter.publishedAt}
                  slug={letter.slug}
                  thumbnail={letter.thumbnail}
                  delay={i * 0.06}
                />
              ))}
            </div>
          ) : (
            <p
              style={{
                marginTop: 24,
                fontSize: 16,
                fontWeight: 300,
                color: "var(--muted)",
              }}
            >
              New letters are on the way.
            </p>
          )}
        </section>
      </Reveal>

      <div style={{ height: 80 }} />

      {/* ════════════════════════════════════════════
          SECTION 4 — Testimonial
         ════════════════════════════════════════════ */}
      <Reveal>
        <section>
          <Badge>Testimonial</Badge>

          <h2 style={{ marginTop: 20 }}>What clients said</h2>

          <div
            style={{
              marginTop: 28,
              width: "100%",
              backgroundColor: "var(--surface)",
              borderRadius: "var(--radius)",
              padding: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src="/testimonial-carlo-gambon.jpg"
              alt="Carlo Gambon, Private Owner"
              width={192}
              height={192}
              style={{
                borderRadius: "var(--radius)",
                objectFit: "cover",
                flexShrink: 0,
                display: "block",
              }}
            />

            <p style={{ marginTop: 16, fontSize: 16, fontWeight: 300, color: "var(--foreground)" }}>
              Carlo Gambon, Private Owner
            </p>

            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.3,
                color: "var(--foreground)",
                maxWidth: 560,
              }}
            >
              &ldquo;At the beginning of 2025, we came up with the idea of building a new house on our
              property. Our neighbors told us about Luka. Within a few days, Luka drew up a concept
              based on our wishes, which we loved right away. Changes were incorporated into the project
              promptly. We also received advice on financing and were put in touch with the right
              developer. The collaboration was and continues to be productive at all times. We look
              forward to the successful implementation of our joint plan!&rdquo;
            </p>
          </div>
        </section>
      </Reveal>

      <div style={{ height: 80 }} />

      {/* ════════════════════════════════════════════
          SECTION 5 — Subscribe CTA
         ════════════════════════════════════════════ */}
      <Reveal>
        <section>
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
            <h2 style={{ maxWidth: 500 }}>
              I regularly share actionable frameworks, practical tips and my experiences in short letters.
            </h2>

            <p style={{ marginTop: 12, fontSize: 18, fontWeight: 300 }}>
              <span style={{ marginRight: 6 }}>&rarr;</span>
              <em>Join me inside!</em>
            </p>

            <div style={{ marginTop: 28, display: "flex", justifyContent: "center", width: "100%" }}>
              <SubscribeForm source="homepage-cta" />
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
      </Reveal>

      <div style={{ height: 48 }} />

      {/* ════════════════════════════════════════════
          SECTION 6 — Footer
         ════════════════════════════════════════════ */}
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        {/* Logo image */}
        <div style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src="/Luka_positiv_transparent.png"
            alt="Luka"
            width={80}
            height={32}
            style={{ width: 80, height: "auto", objectFit: "contain" }}
          />
        </div>

        <nav
          style={{
            display: "flex",
            gap: 24,
            marginTop: 20,
          }}
        >
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Letters", href: "/letters" },
            { label: "Legal", href: "/legal" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link-hover"
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s ease-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
              }}
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
