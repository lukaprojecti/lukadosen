import Link from "next/link";
import styles from "./LandingShell.module.css";

/** Padded container for secondary pages (/legal, 404) in landing mode. */
export default function LandingShell({
  children,
  backLink = true,
}: {
  children: React.ReactNode;
  backLink?: boolean;
}) {
  return (
    <div className={styles.shell}>
      {backLink && (
        <Link href="/" className={styles.back}>
          ← Zurück
        </Link>
      )}
      {children}
    </div>
  );
}
