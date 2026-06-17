"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Eased "glide" scrolling for the public site. The app doesn't scroll the
 * window (html/body are overflow:hidden) — the scroll container is
 * `.content-panel` with `.content-inner` as its content — so Lenis is wired to
 * that custom wrapper/content pair instead of the default window.
 *
 * Mobile keeps native touch scrolling (smoothTouch off) since inertia feels
 * better there, and users who prefer reduced motion get plain scrolling.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const wrapper = document.querySelector<HTMLElement>(".content-panel");
    const content = wrapper?.querySelector<HTMLElement>(".content-inner");
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.1,
      // easeOutExpo — fast start, soft settle
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
