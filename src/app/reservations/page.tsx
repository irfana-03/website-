import React from 'react';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/Button';

export default function Reservations() {
  return (
    <div className="section" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "120px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAex3nhTJbqamTlrgmCrY13bfQqWo-2dSEjUX99n3VfuelO0z6HJo_H-g8rrb_FlYX1Jm5nJaWumehHg5D3rUcev5RChiiz8qboz-WcjOWqhQrPb4BNFmHTfxWhgk6e4kAGXuJf9atb-73bhYVx-m7au8Q3MM2CRTofUOJHVduvZZaPYOf3kgsVmz70vlP_wQuUOoo4_gd_CQRkz2eRmuHVijW8HmDRJbGITzX55Xg8vXclvvajmdIYtMDkNp4Jvhw-RxiXuqDF180')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.3) blur(2px)" }}></div>
      <div className="container animate-fade-in-up stagger-1" style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center" }}>
        <GlassCard style={{ padding: "64px", maxWidth: "800px", width: "100%", textAlign: "center" }}>
          <h2 className="animate-pulse-glow" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "48px", color: "var(--on-surface)", marginBottom: "16px" }}>Secure Your Table</h2>
          <p style={{ fontSize: "16px", color: "var(--on-surface-variant)", marginBottom: "48px" }}>Join us for an unforgettable evening of culinary artistry and curated soundscapes.</p>
          
          <form style={{ display: "flex", flexDirection: "column", gap: "24px", textAlign: "left" }}>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "250px" }}>
                <label style={{ fontSize: "10px", color: "var(--primary)", letterSpacing: "0.2em", fontWeight: 600 }}>GUEST NAME</label>
                <input type="text" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--outline-variant)", padding: "8px 0", color: "var(--on-surface)", outline: "none" }} />
              </div>
              <div style={{ flex: 1, minWidth: "250px" }}>
                <label style={{ fontSize: "10px", color: "var(--primary)", letterSpacing: "0.2em", fontWeight: 600 }}>PHONE NUMBER</label>
                <input type="tel" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--outline-variant)", padding: "8px 0", color: "var(--on-surface)", outline: "none" }} />
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ fontSize: "10px", color: "var(--primary)", letterSpacing: "0.2em", fontWeight: 600 }}>DATE</label>
                <input type="date" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--outline-variant)", padding: "8px 0", color: "var(--on-surface)", outline: "none", colorScheme: "dark" }} />
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ fontSize: "10px", color: "var(--primary)", letterSpacing: "0.2em", fontWeight: 600 }}>TIME</label>
                <input type="time" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--outline-variant)", padding: "8px 0", color: "var(--on-surface)", outline: "none", colorScheme: "dark" }} />
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ fontSize: "10px", color: "var(--primary)", letterSpacing: "0.2em", fontWeight: 600 }}>GUESTS</label>
                <select style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--outline-variant)", padding: "8px 0", color: "var(--on-surface)", outline: "none" }}>
                  <option value="2" style={{ background: "var(--surface)" }}>2 Guests</option>
                  <option value="3" style={{ background: "var(--surface)" }}>3 Guests</option>
                  <option value="4" style={{ background: "var(--surface)" }}>4 Guests</option>
                  <option value="5+" style={{ background: "var(--surface)" }}>5+ Guests</option>
                </select>
              </div>
            </div>
            
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Button variant="primary" type="button" style={{ width: "100%", padding: "20px" }}>
                CONFIRM RESERVATION
              </Button>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
