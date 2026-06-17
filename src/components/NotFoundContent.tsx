import Link from "next/link";

/** Shared 404 UI used by both the in-app and the global (root) not-found pages. */
export default function NotFoundContent() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      {/* "Page not found" pill — matches the category pill styling used elsewhere */}
      <span
        style={{
          fontSize: 13,
          fontWeight: 300,
          padding: "4px 12px",
          borderRadius: "var(--radius)",
          backgroundColor: "var(--border)",
          color: "var(--foreground)",
        }}
      >
        Page not found
      </span>

      <h1
        style={{
          marginTop: 24,
          fontSize: "clamp(40px, 8vw, 76px)",
          fontWeight: 300,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          maxWidth: 760,
        }}
      >
        Not all journeys
        <br />
        go as planned.
      </h1>

      <Link
        href="/"
        style={{
          marginTop: 32,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 15,
          fontWeight: 300,
          padding: "12px 24px",
          borderRadius: "var(--radius)",
          background: "var(--foreground)",
          color: "var(--accent)",
          textDecoration: "none",
        }}
      >
        Go home
      </Link>
    </main>
  );
}
