import React from 'react';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/Button';
import Link from 'next/link';

export default function Events() {
  return (
    <div className="container section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <h1 className="animate-pulse-glow" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "56px", color: "var(--primary)", textAlign: "center", marginBottom: "64px" }}>Events & Celebrations</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
        <div className="animate-fade-in-up stagger-1">
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "40px", color: "var(--on-surface)", marginBottom: "24px" }}>Private Dining</h2>
          <p style={{ fontSize: "16px", color: "var(--on-surface-variant)", marginBottom: "32px", lineHeight: 1.8 }}>
            Host your intimate gatherings and milestone celebrations in our exclusive private dining area. Featuring personalized menus and dedicated service, we ensure your event is unforgettable.
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px", color: "var(--on-surface)" }}>
            <li>✓ Custom Curated Menus</li>
            <li>✓ Dedicated Mixologist</li>
            <li>✓ Capacity for up to 30 guests</li>
          </ul>
          <Link href="/contact">
            <Button variant="primary">INQUIRE NOW</Button>
          </Link>
        </div>
        
        <div className="animate-slide-in-right stagger-2">
          <GlassCard style={{ minHeight: "400px", borderRadius: "var(--rounded-xl)", overflow: "hidden", position: "relative" }}>
             <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiZSSXVBVerI19IcY4s-tnar-k8Zt6U2khK91Kw1uu5QuF0E9WIiVt09vjhayCDx25kPzYatVFivMoc-PzHpHTnuoIyiW7lBlFY7sM_O8U9q4q4TeX33RLSc58jvRgpIR9p4L_Kn_TGbhI0tC5VnD_IVB7He9gRSzo6mD2TqgXzlbmfqDmszwvS-nYNEVAg0ntNUMCIpH7bgQgK1KVWSJ5mOn3Vt6hOmubU17-6hDEoF6fuMXaWTY8ynflVHRAgBxTPiQBdrrJlcs')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.3) hue-rotate(-20deg)" }}></div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
