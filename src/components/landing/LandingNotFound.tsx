import Link from "next/link";
import { landingContent as c } from "@/lib/landingContent";
import { LandingFooter } from "./LandingPage";
import { Icon } from "./icons";
import styles from "./LandingPage.module.css";

/** 404 in landing mode, built from the landing page's own layout and styles. */
export default function LandingNotFound() {
  return (
    <div className={styles.page} data-schimmer>
      <main className={styles.main}>
        <p className={styles.eyebrow}>{c.notFound.eyebrow}</p>
        <h1 className={styles.title}>
          {c.notFound.title.lead}
          <em>{c.notFound.title.accent}</em>
        </h1>
        <nav aria-label="Navigation" className={styles.buttons}>
          <Link href="/" className={`${styles.button} ${styles.primary}`}>
            <Icon name="house" />
            {c.notFound.cta}
          </Link>
        </nav>
      </main>
      <LandingFooter />
    </div>
  );
}
