import React from 'react';
import GlassCard from '../../components/GlassCard';

export default function Contact() {
  return (
    <div className="container section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <h1 className="animate-pulse-glow" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "56px", color: "var(--primary)", textAlign: "center", marginBottom: "64px" }}>Location & Hours</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
        <div className="animate-fade-in-up stagger-1">
          <GlassCard style={{ padding: "48px", height: "100%" }}>
            <h2 style={{ fontSize: "12px", color: "var(--primary)", letterSpacing: "0.2em", fontWeight: 600, marginBottom: "24px" }}>VISIT US</h2>
            <p style={{ color: "var(--on-surface)", fontSize: "18px", lineHeight: 1.8, marginBottom: "32px" }}>
              SUNDAYS Restobar<br />
              123 Luxe Avenue, Nungambakkam<br />
              Chennai, Tamil Nadu 600034
            </p>
            
            <h2 style={{ fontSize: "12px", color: "var(--primary)", letterSpacing: "0.2em", fontWeight: 600, marginBottom: "24px" }}>HOURS</h2>
            <ul style={{ listStyle: "none", color: "var(--on-surface)", fontSize: "16px", lineHeight: 2 }}>
              <li style={{ display: "flex", justifyContent: "space-between" }}><span>Monday - Thursday</span><span>6:00 PM - 1:00 AM</span></li>
              <li style={{ display: "flex", justifyContent: "space-between" }}><span>Friday - Saturday</span><span>6:00 PM - 3:00 AM</span></li>
              <li style={{ display: "flex", justifyContent: "space-between" }}><span>Sunday</span><span>12:00 PM - 1:00 AM</span></li>
            </ul>
          </GlassCard>
        </div>
        
        <div className="animate-slide-in-right stagger-2" style={{ minHeight: "400px", borderRadius: "var(--rounded-xl)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXwJxWE9e5A13o3RJKUOkGG5ApA6qHRDfj8F0gK5sxtTyLkgN1zADYl_Jin_7qahO0cMGEzfgzYbgC1Xh_-66LVs-6ZDFJkGGZJt2FE35fYQLAKAh7qFQBj0qYvmATZ9C4wt1iFa6yf3hWvkdTwMkZNeVJHE8j1vgoHskJosvSaoUDLP-UIum-_RsZlf7vXcMsXnX-bdrqVD3jKAtVjG79zfWrgdI1wkQu2KQ0frIuS9ydGPi1Jemgu0qNPegOs16IE_w4XJxcYlE')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </div>
      </div>
    </div>
  );
}
