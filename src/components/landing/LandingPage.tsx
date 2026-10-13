import Image from "next/image";
import Link from "next/link";
import { landingContent as c } from "@/lib/landingContent";
import { Icon } from "./icons";
import styles from "./LandingPage.module.css";

export function LandingFooter() {
  return (
    <footer className={styles.footer}>
      <span>
        © {new Date().getFullYear()} {c.footer.owner}
      </span>
      <Link href={c.footer.legal.href}>{c.footer.legal.label}</Link>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={c.portrait.src}
          alt={c.portrait.alt}
          width={80}
          height={80}
          sizes="80px"
          priority
          className={styles.portrait}
        />

        <p className={styles.eyebrow}>{c.eyebrow}</p>

        <h1 className={styles.title}>
          {c.title.lead}
          <em>{c.title.accent}</em>
        </h1>

        <p className={styles.intro}>
          {c.intro.before}
          <a href={c.intro.link.href} target="_blank" rel="noopener noreferrer">
            {c.intro.link.label}
          </a>
          {c.intro.after}
        </p>

        <nav aria-label="Kontakt" className={styles.buttons}>
          {c.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${link.variant === "primary" ? styles.primary : styles.secondary}`}
            >
              <Icon name={link.icon} />
              {link.label}
            </a>
          ))}
        </nav>
      </main>

      <LandingFooter />
    </div>
  );
}
