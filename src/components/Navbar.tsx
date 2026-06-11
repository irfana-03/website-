"use client";

import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "events", label: "Events" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { activeSection, setActiveSection, openReservation } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => s && observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [setActiveSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleReserve = () => {
    setMobileOpen(false);
    openReservation();
  };

  return (
    <>
      <div className="top-banner">
        LIVE MUSIC EVERY SUNDAY | 8PM ONWARDS
      </div>
      <nav className={`navbar glass-panel ${scrolled ? "navbar-scrolled" : ""} ${mobileOpen ? "navbar-open" : ""}`}>
        <div className="container navbar-inner">
          <button className="navbar-logo" onClick={() => scrollTo("home")}>
            SUNDAYS
          </button>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

          <button className="navbar-cta btn-shimmer" onClick={openReservation}>
            Book a Table
          </button>
        </div>

        {mobileOpen && (
          <button
            className="navbar-backdrop"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <div className={`navbar-links ${mobileOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              <span className="nav-link-text">{link.label}</span>
              <span className="nav-link-underline" />
            </button>
          ))}
          <button className="navbar-mobile-cta btn-shimmer" onClick={handleReserve}>
            Book a Table
          </button>
        </div>
      </nav>
    </>
  );
}
