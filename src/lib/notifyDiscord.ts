/**
 * Fire-and-forget Discord notification for a new newsletter subscriber.
 *
 * Posts to the incoming-webhook URL in DISCORD_SUBSCRIBER_WEBHOOK_URL. The
 * function never throws: a missing URL is a no-op (local dev without the
 * secret), and any network/Discord error is logged but swallowed so a failed
 * ping can never break a signup. A 4s timeout keeps the subscribe request from
 * hanging if Discord is slow.
 */
export async function notifyNewSubscriber(email: string, source?: string): Promise<void> {
  const url = process.env.DISCORD_SUBSCRIBER_WEBHOOK_URL;
  if (!url) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "New newsletter subscriber",
            description: email,
            color: 0xefff00, // brand accent
            fields: source
              ? [{ name: "Source", value: source, inline: true }]
              : undefined,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`discord notify: webhook returned ${res.status}`);
    }
  } catch (err) {
    console.error("discord notify failed:", err instanceof Error ? err.message : err);
  } finally {
    clearTimeout(timeout);
  }
}
