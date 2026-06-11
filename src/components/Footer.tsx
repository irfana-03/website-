import Link from "next/link";
import "../app/globals.css";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface-container-lowest)", padding: "var(--section-gap) 0", borderTop: "1px solid rgba(153, 144, 124, 0.2)" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "300px" }}>
          <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "40px", color: "var(--primary)", fontWeight: 600 }}>SUNDAYS</div>
          <p style={{ color: "var(--on-surface-variant)", fontSize: "14px", lineHeight: "1.5" }}>Chennai's premier destination for elevated culinary experiences and midnight socializing.</p>
        </div>
        <div style={{ display: "flex", gap: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--on-surface)", fontWeight: 600 }}>CONNECT</h5>
            <Link href="#" style={{ color: "var(--on-surface-variant)" }}>Instagram</Link>
            <Link href="#" style={{ color: "var(--on-surface-variant)" }}>Facebook</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--on-surface)", fontWeight: 600 }}>VISIT</h5>
            <Link href="#" style={{ color: "var(--on-surface-variant)" }}>Location</Link>
            <Link href="#" style={{ color: "var(--on-surface-variant)" }}>Book a Table</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h5 style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--on-surface)", fontWeight: 600 }}>STAY UPDATED</h5>
            <Link href="#" style={{ color: "var(--on-surface-variant)" }}>Newsletter</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(153, 144, 124, 0.1)", textAlign: "center", fontSize: "14px", color: "var(--on-surface-variant)" }}>
        © 2026 SUNDAYS Restobar. All rights reserved.
      </div>
    </footer>
  );
}
