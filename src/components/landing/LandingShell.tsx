import Link from "next/link";
import styles from "./LandingShell.module.css";

/** Padded container with a back link for /legal in landing mode. */
export default function LandingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Link href="/" className={styles.back}>
        ← Zurück
      </Link>
      {children}
    </div>
  );
}
