"use client";

import { useState } from "react";

export type SubscribeStatus = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Shared newsletter-subscribe logic for every email form on the site
 * (homepage hero, homepage CTA, sidebar "Get Inside"). Posts to the
 * same-origin /api/subscribe route, which stores the address in the Payload
 * "subscribers" collection (our own Postgres).
 */
export function useSubscribe(source?: string) {
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [message, setMessage] = useState("");

  async function submit(rawEmail: string) {
    const email = rawEmail.trim();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("success");
        setMessage("You're on the list. Talk soon.");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return { status, message, submit };
}
