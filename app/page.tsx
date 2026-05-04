import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>◈</span>
            <span className={styles.logoText}>Airlock</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#how-it-works">How it works</a>
            <a href="#threats">Threats</a>
            <a href="#open-source">Open Source</a>
            <a href="#pricing">Pricing</a>
            <a href="https://github.com/theagentdeck/airlock" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img src="/airlockhero.png" alt="Airlock — External content is evidence, not instruction." />
          </div>
        </section>

        {/* The Problem */}
        <section className={styles.problem} id="threats">
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>The Problem</div>
            <h2 className={styles.sectionHeadline}>The web is hostile to agents.</h2>
            <p className={styles.sectionBody}>
              Modern AI agents read web pages to gather information, follow links, and take actions on behalf of users. That makes them targets.
            </p>
            <div className={styles.threatGrid}>
              <div className={styles.threatCard}>
                <div className={styles.threatLabel}>Prompt injection via hidden text</div>
                <p>Adversarial content buried in CSS, alt text, or off-screen HTML that overrides agent instructions when parsed.</p>
              </div>
              <div className={styles.threatCard}>
                <div className={styles.threatLabel}>Memory write gates</div>
                <p>Links that, when followed, silently instruct the agent to modify its own system prompt or memory store.</p>
              </div>
              <div className={styles.threatCard}>
                <div className={styles.threatLabel}>Compromised link injection</div>
                <p>Embedded URLs that redirect to attacker-controlled domains after the page renders.</p>
              </div>
            </div>
            <div className={styles.realExample}>
              <div className={styles.realExampleLabel}>Example attack pattern</div>
              <p>A prompt injection attempt might look like an off-screen <code>&lt;div&gt;</code> seeded with hidden instruction text, designed to override agent behavior when parsed. Airlock&apos;s scanner catches and strips it before the agent ever processes the content.</p>
            </div>
            <p className={styles.gapNote}>The browser layer is the gap. Most AI security investment goes into model hardening or RAG pipelines. Almost none goes into what the agent actually reads.</p>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.how} id="how-it-works">
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>How it works</div>
            <h2 className={styles.sectionHeadline}>Simple. Consistent. Invisible to the agent.</h2>
            <div className={styles.flowDiagram}>
              <div className={styles.flowStep}>
                <div className={styles.flowDot}>1</div>
                <div className={styles.flowContent}>
                  <div className={styles.flowTitle}>Agent requests URL</div>
                </div>
              </div>
              <div className={styles.flowArrow}>→</div>
              <div className={styles.flowStep}>
                <div className={styles.flowDot}>2</div>
                <div className={styles.flowContent}>
                  <div className={styles.flowTitle}>Airlock Scanner</div>
                  <div className={styles.flowSub}>Fetches, parses, sanitizes</div>
                </div>
              </div>
              <div className={styles.flowArrow}>→</div>
              <div className={styles.flowStep}>
                <div className={styles.flowDot}>3</div>
                <div className={styles.flowContent}>
                  <div className={styles.flowTitle}>Evidence Packet</div>
                  <div className={styles.flowSub}>Clean text, safe URLs, stripped content</div>
                </div>
              </div>
              <div className={styles.flowArrow}>→</div>
              <div className={styles.flowStep}>
                <div className={styles.flowDot}>4</div>
                <div className={styles.flowContent}>
                  <div className={styles.flowTitle}>Agent receives sanitized content only</div>
                </div>
              </div>
            </div>
            <div className={styles.stripPreserve}>
              <div className={styles.stripPreserveCol}>
                <div className={styles.spHeader}>What gets stripped</div>
                <ul>
                  <li>Hidden or off-screen HTML containing injection text</li>
                  <li>JavaScript-rendered content that could alter agent behavior</li>
                  <li>Links that trigger memory-write or instruction-override sequences</li>
                  <li>Any <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code>, <code>&lt;iframe&gt;</code>, and embedded media that can&apos;t be statically verified</li>
                </ul>
              </div>
              <div className={styles.stripPreserveCol}>
                <div className={styles.spHeader}>What gets preserved</div>
                <ul>
                  <li>Clean, readable text content</li>
                  <li>Safe outbound links</li>
                  <li>Structural metadata — headings, lists, code blocks — for context</li>
                </ul>
              </div>
            </div>
            <div className={styles.noMiddleware}>
              Static scan mode first. Rendered scan mode coming later.
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className={styles.opensource} id="open-source">
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Open Source</div>
            <h2 className={styles.sectionHeadline}>MIT licensed. Free forever for self-hosted.</h2>
            <p className={styles.sectionBody}>
              The Airlock scanner library is open source under the MIT license. Self-host it, run it locally, fork it, extend it — no strings.
            </p>
            <div className={styles.installGrid}>
              <div className={styles.installCard}>
                <div className={styles.installLabel}>GitHub</div>
                <code>github.com/theagentdeck/airlock</code>
              </div>
              <div className={styles.installCard}>
                <div className={styles.installLabel}>NPM</div>
                <code>npm install airlock-codes</code>
              </div>
              <div className={styles.installCard}>
                <div className={styles.installLabel}>PyPI</div>
                <code>pip install airlock-codes</code>
              </div>
              <div className={styles.installCard}>
                <div className={styles.installLabel}>Docker</div>
                <code>hub.docker.com/r/theagentdeck/airlock-scanner</code>
              </div>
            </div>
            <blockquote className={styles.moatQuote}>
              &ldquo;The protocol is the moat; the scanner is the wedge. We open-sourced the wedge because a moat that only benefits the wealthy isn&apos;t a moat.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Pricing */}
        <section className={styles.pricing} id="pricing">
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>Pricing</div>
            <h2 className={styles.sectionHeadline}>Start free. Scale when you&apos;re ready.</h2>
            <div className={styles.pricingGrid}>
              <div className={styles.priceCard}>
                <div className={styles.priceTier}>Starter</div>
                <div className={styles.priceAmount}>$29<span>/mo</span></div>
                <div className={styles.priceDesc}>Solo developers, first agent ops</div>
                <ul className={styles.priceFeatures}>
                  <li>5,000 scans/month</li>
                  <li>Self-hosted scanner</li>
                  <li>Community support</li>
                </ul>
              </div>
              <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
                <div className={styles.priceTier}>Pro</div>
                <div className={styles.priceAmount}>$99<span>/mo</span></div>
                <div className={styles.priceDesc}>Growing teams, production agents</div>
                <ul className={styles.priceFeatures}>
                  <li>50,000 scans/month</li>
                  <li>Audit log (30 day retention)</li>
                  <li>Priority email support</li>
                  <li>Private packets, no watermark</li>
                </ul>
              </div>
              <div className={styles.priceCard}>
                <div className={styles.priceTier}>Scale</div>
                <div className={styles.priceAmount}>$299<span>/mo</span></div>
                <div className={styles.priceDesc}>Multi-agent ops, serious throughput</div>
                <ul className={styles.priceFeatures}>
                  <li>1,000,000 scans/month</li>
                  <li>Audit log (1 year retention)</li>
                  <li>Slack support</li>
                  <li>5 seats included</li>
                </ul>
              </div>
              <div className={styles.priceCard}>
                <div className={styles.priceTier}>Enterprise</div>
                <div className={styles.priceAmount}>$1,500<span>+/mo</span></div>
                <div className={styles.priceDesc}>Large orgs, custom contracts</div>
                <ul className={styles.priceFeatures}>
                  <li>Unlimited scans</li>
                  <li>Dedicated infrastructure</li>
                  <li>SLA + dedicated CSM</li>
                  <li>Custom integrations</li>
                </ul>
              </div>
            </div>
            <p className={styles.enterpriseNote}>Enterprise? <a href="mailto:founders@theagentdeck.ai">Talk to us.</a></p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span className={styles.logoMark}>◈</span>
                <span>Airlock</span>
              </div>
              <p>Source-to-sink security for agentic browsing</p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerCol}>
                <div className={styles.footerColLabel}>Product</div>
                <a href="#how-it-works">How it works</a>
                <a href="#threats">Threats</a>
                <a href="#open-source">Open Source</a>
                <a href="#pricing">Pricing</a>
              </div>
              <div className={styles.footerCol}>
                <div className={styles.footerColLabel}>Connect</div>
                <a href="https://github.com/theagentdeck/airlock" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://x.com/AirLockcodes" target="_blank" rel="noopener noreferrer">@AirLockcodes</a>
                <a href="mailto:founders@theagentdeck.ai">Contact</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div>Built by Kreez / The Lounge</div>
            <div>Powered by TheAgentDeck.ai</div>
            <div>© 2026 — MIT License</div>
          </div>
        </div>
      </footer>
    </div>
  );
}