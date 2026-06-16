import Link from "next/link";

/** Shared 404 UI used by both the in-app and the global (root) not-found pages. */
export default function NotFoundContent() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <span
        style={{
          fontSize: "clamp(64px, 12vw, 120px)",
          fontWeight: 300,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: "var(--foreground)",
        }}
      >
        404
      </span>

      <h1
        style={{
          marginTop: 16,
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
        }}
      >
        Page not found
      </h1>

      <p
        style={{
          marginTop: 12,
          fontSize: 16,
          fontWeight: 300,
          lineHeight: 1.5,
          color: "var(--muted)",
          maxWidth: 460,
        }}
      >
        Not all journeys go as planned. This page could not be found.
      </p>

      <Link
        href="/"
        style={{
          marginTop: 28,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 14,
          fontWeight: 300,
          color: "var(--foreground)",
          textDecoration: "none",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Back home
      </Link>
    </main>
  );
}
