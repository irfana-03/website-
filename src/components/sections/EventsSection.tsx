"use client";

import GlassCard from "../GlassCard";
import Button from "../Button";
import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";
import ParallaxImage from "../ParallaxImage";
import { useApp } from "../../context/AppContext";

const EVENT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBiZSSXVBVerI19IcY4s-tnar-k8Zt6U2khK91Kw1uu5QuF0E9WIiVt09vjhayCDx25kPzYatVFivMoc-PzHpHTnuoIyiW7lBlFY7sM_O8U9q4q4TeX33RLSc58jvRgpIR9p4L_Kn_TGbhI0tC5VnD_IVB7He9gRSzo6mD2TqgXzlbmfqDmszwvS-nYNEVAg0ntNUMCIpH7bgQgK1KVWSJ5mOn3Vt6hOmubU17-6hDEoF6fuMXaWTY8ynflVHRAgBxTPiQBdrrJlcs";

export default function EventsSection() {
  const { openReservation } = useApp();

  return (
    <section id="events" className="section events-section">
      <div className="section-mask-top" />
      <div className="container">
        <AnimatedText
          text="Events & Celebrations"
          as="h2"
          className="section-title mask-reveal"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "var(--primary)",
            textAlign: "center",
            marginBottom: "64px",
          }}
        />

        <div className="events-grid">
          <RevealOnScroll direction="left">
            <div>
              <h3 className="section-heading">Private Dining</h3>
              <p className="body-text" style={{ marginBottom: "32px" }}>
                Host your intimate gatherings and milestone celebrations in our exclusive private dining area. Featuring personalized menus and dedicated service.
              </p>
              <ul className="events-list">
                <li>Custom Curated Menus</li>
                <li>Dedicated Mixologist</li>
                <li>Capacity for up to 30 guests</li>
                <li>Live Music Every Sunday</li>
              </ul>
              <Button variant="primary" className="btn-shimmer" onClick={openReservation}>
                Inquire Now
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <GlassCard className="events-image-card">
              <ParallaxImage
                src={EVENT_IMG}
                alt="Private dining"
                speed={0.2}
                style={{ minHeight: "420px", borderRadius: "var(--rounded-xl)" }}
              />
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
