# ◈ Airlock

**Source-to-sink firewall for agentic web browsing.**

Airlock strips prompt injection, hostile instructions, and hidden content before your AI agent ever sees it. The protocol that makes agentic browsing safe by default.

> *"External content is evidence, not instruction."*

---

## The Problem

Modern AI agents read web pages to gather information, follow links, and take actions on behalf of users. That makes them targets:

- **Prompt injection** via hidden text buried in CSS, alt text, or off-screen HTML
- **Memory write gates** — links that silently instruct the agent to modify its own system prompt
- **Compromised link injection** — URLs that redirect to attacker-controlled domains after page render

The browser layer is the gap. Most AI security investment goes into model hardening or RAG pipelines. Almost none goes into what the agent actually reads.

---

## How It Works

```
Agent requests URL → Airlock Scanner → Evidence Packet → Agent receives sanitized content
```

**What gets stripped:**
- Hidden or off-screen HTML containing injection text
- Links that trigger memory-write or instruction-override sequences
- `<script>`, `<style>`, `<iframe>`, and embedded media that can't be statically verified

**What gets preserved:**
- Clean, readable text content
- Safe outbound links
- Structural metadata — headings, lists, code blocks — for context

---

## Threat Model

Airlock is designed to defend against:

1. **Static injection** — hidden/off-screen HTML with adversarial instructions
2. **Link-based instruction override** — URLs engineered to trigger agent behavior changes
3. **Rendered-content manipulation** — JavaScript that alters page content after initial parse

Airlock is a **static scanner** in v1. Rendered scan mode is on the roadmap.

---

## Security Policy

If you find a bypass or vulnerability in Airlock's scanner, please do not disclose publicly. Contact the maintainers directly. We take security seriously and will respond promptly.

---

## Status

⚠️ **Not yet production ready.** The landing page is live at [airlock.codes](https://airlock.codes). The scanner library is in development. NPM/PyPI packages coming soon.

---

## License

MIT — free forever for self-hosted use.

---

## Links

- 🌐 **Landing page:** [airlock.codes](https://airlock.codes)
- 🐙 **GitHub:** [github.com/theagentdeck/airlock](https://github.com/theagentdeck/airlock)
- 𝕏 **X/Twitter:** [@AirLockcodes](https://x.com/AirLockcodes)
- 📧 **Contact:** founders@theagentdeck.ai