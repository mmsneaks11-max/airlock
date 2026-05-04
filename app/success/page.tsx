import styles from "../page.module.css";

export default function Success() {
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
            <a href="/#how-it-works">How it works</a>
            <a href="/#threats">Threats</a>
            <a href="/#open-source">Open Source</a>
            <a href="/#pricing">Pricing</a>
            <a href="https://github.com/theagentdeck/airlock" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      <main className={styles.successMain}>
        <div className={styles.successCard}>
          <span className={styles.successIcon}>◈</span>
          <h1 className={styles.successHeadline}>You&apos;re in.</h1>
          <p className={styles.successBody}>
            Your AirLock subscription is confirmed. Check your inbox for receipt and setup details.
          </p>
          <a href="/" className={styles.successCta}>
            Back to AirLock
          </a>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBottom}>
            <div>© 2026 — MIT License</div>
            <div>airlock.codes</div>
          </div>
        </div>
      </footer>
    </div>
  );
}