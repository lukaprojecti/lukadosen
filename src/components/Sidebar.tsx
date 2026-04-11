"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/* ── Icon components ── */

function HomeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function AboutIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function LettersIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function SubstackIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16" />
      <path d="M4 8h16" />
      <path d="M4 12l8 6 8-6" />
    </svg>
  );
}

function EmailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2 7 12 13 22 7" />
    </svg>
  );
}

function MenuIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Navigation data ── */

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: AboutIcon },
  { href: "/letters", label: "Letters", icon: LettersIcon, countKey: "letters" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/lukadosen", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://substack.com/@lukadosen?utm_campaign=profile&utm_medium=profile-page", label: "Substack", icon: SubstackIcon },
  { href: "mailto:hello@lukadosen.ch", label: "Email", icon: EmailIcon },
];

/* ── Sidebar content (shared between desktop and mobile overlay) ── */

function SidebarContent({ onNavigate, lettersCount }: { onNavigate?: () => void; lettersCount?: number }) {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Profile — portrait left, name + tagline right */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
        <div
          style={{
            width: 48,
            height: 48,
            flexShrink: 0,
            borderRadius: "var(--radius)",
            backgroundColor: "#d5d4d0",
          }}
        />
        <div>
          <p style={{ fontSize: 15, fontWeight: 300, color: "var(--foreground)", lineHeight: 1.2 }}>
            Luka Došen
          </p>
          <p style={{ fontSize: 12, fontWeight: 300, color: "var(--muted)", lineHeight: 1.2 }}>
            Founder &amp; Creator
          </p>
        </div>
      </div>

      {/* MENU section label */}
      <p
        style={{
          fontSize: 11,
          fontWeight: 300,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--muted)",
          marginBottom: 6,
          paddingLeft: 8,
        }}
      >
        Menu
      </p>

      {/* Navigation */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const count = link.countKey === "letters" && lettersCount ? lettersCount : null;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                fontWeight: 300,
                padding: "9px 12px",
                borderRadius: "var(--radius)",
                color: isActive ? "var(--foreground)" : "var(--muted)",
                backgroundColor: isActive ? "var(--background)" : "transparent",
                textDecoration: "none",
                transition: "color 0.15s, background-color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--foreground)";
                  e.currentTarget.style.backgroundColor = "var(--background)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              <link.icon size={16} />
              <span style={{ flex: 1 }}>{link.label}</span>
              {count !== null && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    color: "var(--muted)",
                    lineHeight: 1,
                  }}
                >
                  {count}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* FIND ME section */}
      <div style={{ marginTop: 20 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 300,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--muted)",
            marginBottom: 6,
            paddingLeft: 8,
          }}
        >
          Find me
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                fontWeight: 300,
                padding: "9px 12px",
                borderRadius: "var(--radius)",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s, background-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
                e.currentTarget.style.backgroundColor = "var(--background)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* GET INSIDE CTA — below Find me */}
      <div style={{ marginTop: 20 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 300,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--muted)",
            marginBottom: 8,
            paddingLeft: 8,
          }}
        >
          Get Inside
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              width: "100%",
              fontSize: 13,
              fontWeight: 300,
              padding: "8px 10px",
              outline: "none",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "var(--radius)",
              background: "rgba(255,255,255,0.5)",
              color: "var(--foreground)",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
          <button
            style={{
              width: "100%",
              fontSize: 13,
              fontWeight: 300,
              padding: "8px 14px",
              border: "none",
              borderRadius: "var(--radius)",
              background: "var(--foreground)",
              color: "var(--accent)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Main Sidebar component ── */

export default function Sidebar({ lettersCount }: { lettersCount?: number }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop sidebar (1024px+) ── */}
      <aside className="sidebar-desktop">
        <SidebarContent lettersCount={lettersCount} />
      </aside>

      {/* ── Tablet sidebar (768px - 1023px) ── */}
      <aside className="sidebar-tablet">
        {/* Mini profile photo — square with --radius */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "var(--radius)",
            backgroundColor: "#d5d4d0",
            marginBottom: 24,
            flexShrink: 0,
          }}
        />

        {/* Icon-only nav */}
        <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                title={link.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius)",
                  color: isActive ? "var(--foreground)" : "var(--muted)",
                  backgroundColor: isActive ? "var(--background)" : "transparent",
                  textDecoration: "none",
                  transition: "color 0.15s, background-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--foreground)";
                    e.currentTarget.style.backgroundColor = "var(--background)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <link.icon size={20} />
              </Link>
            );
          })}
        </nav>

        {/* Social icons — directly below nav, not pinned to bottom */}
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              title={link.label}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "var(--radius)",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s, background-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
                e.currentTarget.style.backgroundColor = "var(--background)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </aside>

      {/* ── Mobile top bar (<768px) ── */}
      <header className="mobile-header">
        <span style={{ fontSize: 16, fontWeight: 300, color: "var(--foreground)" }}>
          Luka Došen
        </span>
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            background: "none",
            border: "none",
            color: "var(--foreground)",
            cursor: "pointer",
          }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </header>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div className="mobile-overlay">
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                background: "none",
                border: "none",
                color: "var(--foreground)",
                cursor: "pointer",
              }}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            <SidebarContent onNavigate={() => setMobileOpen(false)} lettersCount={lettersCount} />
          </div>
        </div>
      )}
    </>
  );
}
