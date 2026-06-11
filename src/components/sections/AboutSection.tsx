"use client";

import GlassCard from "../GlassCard";
import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";
import ParallaxImage from "../ParallaxImage";

const ABOUT_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLvPyLtUhspjePdYTHopKRCFfCqPWwXXJfNLd6aqPB41i2nE_isCH1a50LseqqmkAIqMGcnf7KppwadD_YAjvpMbvjfqIkfosxQAaJJNkjX7ZZQlG138Xf25htbgd-jgRhJa_a65ZIdcRh6kwKFOVQpw-QRkag_raEMZtVQHt39LvGXwenTeFdragDYklobhT9YfFdzPrg3JC87Q9oRfBwwHu8IDWQvwboFn1O0-XEnu9OianOgM74gCcw";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedText
          text="Our Story & Philosophy"
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

        <div className="about-grid">
          <RevealOnScroll direction="left">
            <div className="about-text">
              <blockquote className="about-quote">
                &ldquo;A restobar should be more than just a place to eat and drink; it should be a cinematic experience.&rdquo;
              </blockquote>
              <p>
                SUNDAYS was born from a simple idea: to create a sanctuary where the energetic pulse of the city meets the refined elegance of a premium lounge.
              </p>
              <p>
                Our culinary philosophy is deeply rooted in Mangalorean heritage, elevated through global techniques. We source the finest local ingredients and spices, hand-pounding them to perfection.
              </p>
              <p>
                The space itself is designed to evoke the atmosphere of an exclusive midnight lounge — cinematic glassmorphism, deep shadows, and warm gold accents.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <GlassCard className="about-image-card">
              <ParallaxImage
                src={ABOUT_IMG}
                alt="SUNDAYS interior"
                speed={0.2}
                style={{ minHeight: "500px", borderRadius: "var(--rounded-xl)" }}
              />
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
