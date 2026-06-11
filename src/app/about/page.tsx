import React from 'react';
import GlassCard from '../../components/GlassCard';

export default function About() {
  return (
    <div className="container section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <h1 className="animate-pulse-glow" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "56px", color: "var(--primary)", textAlign: "center", marginBottom: "64px" }}>Our Story & Philosophy</h1>
      
      <div className="animate-fade-in-up stagger-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
        <div style={{ color: "var(--on-surface-variant)", fontSize: "18px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "32px" }}>
          <p>
            SUNDAYS was born from a simple idea: to create a sanctuary where the energetic pulse of the city meets the refined elegance of a premium lounge. We believe that a restobar should be more than just a place to eat and drink; it should be a cinematic experience.
          </p>
          <p>
            Our culinary philosophy is deeply rooted in Mangalorean heritage, elevated through global techniques. We source the finest local ingredients and spices, hand-pounding them to perfection to bring you dishes that are both authentic and innovative.
          </p>
          <p>
            The space itself is designed to evoke the atmosphere of an exclusive midnight lounge. Through the use of cinematic glassmorphism, deep shadows, and warm gold accents, we've created an environment that feels both expansive and intimate. It's a place for curated discovery.
          </p>
        </div>
        
        <GlassCard className="animate-slide-in-right stagger-2" style={{ minHeight: "500px", borderRadius: "var(--rounded-xl)", overflow: "hidden", position: "relative" }}>
           <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLvPyLtUhspjePdYTHopKRCFfCqPWwXXJfNLd6aqPB41i2nE_isCH1a50LseqqmkAIqMGcnf7KppwadD_YAjvpMbvjfqIkfosxQAaJJNkjX7ZZQlG138Xf25htbgd-jgRhJa_a65ZIdcRh6kwKFOVQpw-QRkag_raEMZtVQHt39LvGXwenTeFdragDYklobhT9YfFdzPrg3JC87Q9oRfBwwHu8IDWQvwboFn1O0-XEnu9OianOgM74gCcw')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.8)" }}></div>
        </GlassCard>
      </div>
    </div>
  );
}
