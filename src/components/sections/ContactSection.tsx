"use client";

import GlassCard from "../GlassCard";
import Button from "../Button";
import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";
import ParallaxImage from "../ParallaxImage";
import { useApp } from "../../context/AppContext";

const CONTACT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXwJxWE9e5A13o3RJKUOkGG5ApA6qHRDfj8F0gK5sxtTyLkgN1zADYl_Jin_7qahO0cMGEzfgzYbgC1Xh_-66LVs-6ZDFJkGGZJt2FE35fYQLAKAh7qFQBj0qYvmATZ9C4wt1iFa6yf3hWvkdTwMkZNeVJHE8j1vgoHskJosvSaoUDLP-UIum-_RsZlf7vXcMsXnX-bdrqVD3jKAtVjG79zfWrgdI1wkQu2KQ0frIuS9ydGPi1Jemgu0qNPegOs16IE_w4XJxcYlE";

export default function ContactSection() {
  const { openReservation } = useApp();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <AnimatedText
          text="Location & Hours"
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

        <div className="contact-grid">
          <RevealOnScroll direction="left">
            <GlassCard className="contact-card">
              <p className="section-eyebrow">VISIT US</p>
              <p className="contact-address">
                SUNDAYS Restobar<br />
                123 Luxe Avenue, Nungambakkam<br />
                Chennai, Tamil Nadu 600034
              </p>

              <p className="section-eyebrow" style={{ marginTop: "32px" }}>HOURS</p>
              <ul className="hours-list">
                <li><span>Monday - Thursday</span><span>6:00 PM - 1:00 AM</span></li>
                <li><span>Friday - Saturday</span><span>6:00 PM - 3:00 AM</span></li>
                <li><span>Sunday</span><span>12:00 PM - 1:00 AM</span></li>
              </ul>

              <Button variant="primary" className="btn-shimmer" onClick={openReservation} style={{ marginTop: "32px" }}>
                Book a Table
              </Button>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <ParallaxImage
              src={CONTACT_IMG}
              alt="SUNDAYS location"
              speed={0.2}
              style={{ minHeight: "420px", borderRadius: "var(--rounded-xl)" }}
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
