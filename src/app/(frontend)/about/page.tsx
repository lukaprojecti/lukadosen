"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

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

/* ── Page ── */

const bodyParagraph: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 300,
  lineHeight: 1.3,
  color: "var(--foreground)",
  marginTop: 16,
};

export default function About() {
  return (
    <main>
      {/* ════════════════════════════════════════════
          SECTION 1 — Page header
         ════════════════════════════════════════════ */}
      <Reveal>
        <section style={{ paddingTop: 80, paddingBottom: 48 }}>
          <Badge>More about me</Badge>
          <h1
            style={{
              marginTop: 20,
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: 640,
            }}
          >
            I show how real projects get built.
          </h1>
        </section>
      </Reveal>

      {/* ════════════════════════════════════════════
          SECTION 2 — Portrait (1:1 square)
         ════════════════════════════════════════════ */}
      <Reveal>
        <section style={{ paddingBottom: 56 }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "var(--radius)",
              backgroundColor: "#d9d9d0",
              overflow: "hidden",
            }}
          />
        </section>
      </Reveal>

      {/* ════════════════════════════════════════════
          SECTION 3 — Bio
         ════════════════════════════════════════════ */}
      <Reveal>
        <section style={{ paddingBottom: 80, maxWidth: 680 }}>
          <p style={{ ...bodyParagraph, marginTop: 0 }}>
            Hi, I&rsquo;m Luka. Everywhere I&rsquo;ve travelled in the world, people have realized
            their ideas in different ways. Buildings show these stories.
          </p>

          <p style={bodyParagraph}>
            I&rsquo;m fascinated by how people turn plans into reality and the steps they have taken
            to do so. I take a closer look at these steps and ask myself whether it could have been
            done even better to achieve better results.
          </p>

          <p style={bodyParagraph}>
            Over the past 9 years I&rsquo;ve planned over 100 residential projects in Switzerland.
          </p>

          <p style={bodyParagraph}>
            In 2025 I quit my job to become a solopreneur. I started Projecti, an architecture and
            strategy planning agency. We offer tailored digital planning solutions to our clients so
            that buildings can be projected more efficiently and with less risk.
          </p>

          <p style={bodyParagraph}>
            Turning complexity into clarity. Turning ideas into execution. This is what I love doing.
          </p>

          <p style={bodyParagraph}>
            I&rsquo;m building toward developing my own residential real estate projects. And
            I&rsquo;m documenting everything along the way.
          </p>
        </section>
      </Reveal>

      {/* ════════════════════════════════════════════
          SECTION 4 — The Challenge
         ════════════════════════════════════════════ */}
      <Reveal>
        <section style={{ paddingBottom: 80, maxWidth: 680 }}>
          <h2 style={{ marginBottom: 8 }}>The challenge we&rsquo;re all facing.</h2>

          <p style={bodyParagraph}>
            We&rsquo;re facing a worsening housing crisis. A cost-of-living crisis. Demographic
            challenges that make it harder for people under 40 to build wealth and security.
          </p>

          <p style={bodyParagraph}>
            If you&rsquo;re thinking about real estate, about development, about building something
            of your own, you&rsquo;re probably feeling this too.
          </p>

          <p style={bodyParagraph}>
            The problem is that the real estate sector is still not transparent.
          </p>

          <p style={bodyParagraph}>
            Most people only see the finished buildings. They don&rsquo;t see the decisions that made
            them possible. The trade-offs, the sequencing, the coordination, the risk management.
            They don&rsquo;t see what actually drives success or what kills projects before they start.
          </p>

          <p style={bodyParagraph}>That&rsquo;s what I want to change.</p>

          <p style={bodyParagraph}>
            I&rsquo;m documenting the process. The decisions. The systems. The lessons. I believe
            transparency helps everyone build better.
          </p>
        </section>
      </Reveal>

      {/* ════════════════════════════════════════════
          SECTION 5 — What you'll find
         ════════════════════════════════════════════ */}
      <Reveal>
        <section style={{ paddingBottom: 80, maxWidth: 680 }}>
          <h2 style={{ marginBottom: 8 }}>Here&rsquo;s what you&rsquo;ll find.</h2>

          <p style={bodyParagraph}>
            Through my agency work, I&rsquo;m planning projects with clients who are building
            successfully right now. I document what&rsquo;s working.
          </p>

          <p style={bodyParagraph}>
            The decision frameworks. The execution systems. The coordination logic that keeps
            projects moving. The risk management that prevents costly mistakes.
          </p>

          <p style={bodyParagraph}>
            This is how real projects get built. Not theory. Not abstraction. The actual decisions
            and trade-offs from inside the work.
          </p>

          <p style={bodyParagraph}>
            If my clients can take these insights and turn complexity into functioning projects, you
            can too. That&rsquo;s what I&rsquo;m documenting for you.
          </p>

          <p style={bodyParagraph}>
            You&rsquo;ll see what makes projects succeed and what kills them before they start.
            You&rsquo;ll get the systems I use to plan efficiently and reduce risk.
          </p>

          <p style={bodyParagraph}>If you&rsquo;re ready to build, this is for you.</p>
        </section>
      </Reveal>

      {/* ════════════════════════════════════════════
          SECTION 6 — Newsletter CTA
         ════════════════════════════════════════════ */}
      <Reveal>
        <section style={{ paddingBottom: 80 }}>
          <Badge>Get inside</Badge>

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
            <h2 style={{ maxWidth: 480 }}>I share all of this in my newsletter</h2>

            <p style={{ marginTop: 12, fontSize: 18, fontWeight: 300 }}>
              <em>↓</em>
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

      {/* ════════════════════════════════════════════
          SECTION 7 — Footer
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
        <div style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src="/Luka_positiv_transparent.png"
            alt="Luka"
            width={80}
            height={32}
            style={{ objectFit: "contain" }}
          />
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
