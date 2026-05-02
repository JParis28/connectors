import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#top" className="footer__logo">
          <BrandMark size={22} />
          <span>Connectors</span>
        </a>
        <div className="footer__meta">Built in St. Petersburg, FL · © 2026 Connectors AI LLC</div>
        <div className="footer__links">
          <a href="/privacy-policy.html">Privacy</a>
          <span>·</span>
          <a href="/terms-of-use.html">Terms</a>
        </div>
      </div>
    </footer>
  );
}
