"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { fadeUp, stagger } from "@/lib/motion";
import Image from "next/image";

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
        className="btn-hover"
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

function NewsletterCard({
  title,
  category,
  time,
  slug,
  delay = 0,
}: {
  title: string;
  category: string;
  time: string;
  slug: string;
  delay?: number;
}) {
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
            width: "100%",
            height: "100%",
            backgroundColor: "#d9d9d0",
            transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
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
          {category} &middot; {time}
        </p>
      </div>
    </motion.a>
  );
}

/* ── Page ── */

export default function Home() {
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
            <SubscribeForm />
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

          {/* 4. Two columns: portrait left (9:16 vertical), benefits right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 32,
              alignItems: "start",
            }}
          >
            {/* Left: 9:16 portrait placeholder */}
            <div
              style={{
                backgroundColor: "#d9d9d0",
                borderRadius: "var(--radius)",
                aspectRatio: "9 / 16",
                width: "100%",
              }}
            />

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
                      fontWeight: 300,
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
          SECTION 3 — Letters
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
              marginTop: 24,
            }}
          >
            {[
              {
                title: "What oil shocks do to real estate",
                category: "Development",
                time: "4 min",
                slug: "what-oil-shocks-do-to-real-estate",
              },
              {
                title: "While all eyes are on AI, construction is being overlooked.",
                category: "Construction",
                time: "4 min",
                slug: "while-all-eyes-are-on-ai-construction-is-being-overlooked",
              },
              {
                title: "When does buying a home stop being an investment?",
                category: "My Agency",
                time: "5 min",
                slug: "when-does-buying-a-home-stop-being-an-investment",
              },
              {
                title: "How to turn half-empty homes into housing opportunities",
                category: "Development",
                time: "4 min",
                slug: "how-to-turn-half-empty-homes-into-housing-opportunities",
              },
            ].map((card, i) => (
              <NewsletterCard key={card.slug} {...card} delay={i * 0.06} />
            ))}
          </div>
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
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "var(--radius)",
                backgroundColor: "#d9d9d0",
                flexShrink: 0,
              }}
            />

            <p style={{ marginTop: 16, fontSize: 16, fontWeight: 300, color: "var(--foreground)" }}>
              Carlo Gambon
              <span style={{ color: "var(--muted)", fontSize: 13, marginLeft: 8 }}>Private Owner</span>
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
            style={{ objectFit: "contain" }}
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
