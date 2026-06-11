import Link from "next/link";
import "../app/globals.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">SUNDAYS</div>
          <p className="footer-tagline">
            Chennai&apos;s premier destination for elevated culinary experiences and midnight socializing.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h5>CONNECT</h5>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
          </div>
          <div className="footer-col">
            <h5>VISIT</h5>
            <Link href="#contact">Location</Link>
            <Link href="#contact">Book a Table</Link>
          </div>
          <div className="footer-col">
            <h5>STAY UPDATED</h5>
            <Link href="#">Newsletter</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2026 SUNDAYS Restobar. All rights reserved.
      </div>
    </footer>
  );
}
