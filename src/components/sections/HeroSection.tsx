"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import { useApp } from "../../context/AppContext";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAex3nhTJbqamTlrgmCrY13bfQqWo-2dSEjUX99n3VfuelO0z6HJo_H-g8rrb_FlYX1Jm5nJaWumehHg5D3rUcev5RChiiz8qboz-WcjOWqhQrPb4BNFmHTfxWhgk6e4kAGXuJf9atb-73bhYVx-m7au8Q3MM2CRTofUOJHVduvZZaPYOf3kgsVmz70vlP_wQuUOoo4_gd_CQRkz2eRmuHVijW8HmDRJbGITzX55Xg8vXclvvajmdIYtMDkNp4Jvhw-RxiXuqDF180";

export default function HeroSection() {
  const { openReservation } = useApp();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="home" className="hero-section">
      <div
        className="hero-bg parallax-bg"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="hero-overlay" />

      <motion.div
        className="hero-floating-orb orb-1"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-floating-orb orb-2"
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          Chennai&apos;s Premier Midnight Lounge
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.4 }}
        >
          <motion.span
            className="hero-line"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Where Great Food
          </motion.span>
          <motion.span
            className="hero-line hero-accent"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Meets Great Company
          </motion.span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.9 }}
        >
          Experience the atmospheric energy of Chennai&apos;s premier midnight lounge.
          A curation of Mangalorean heritage, global culinary techniques, and liquid craftsmanship.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.1 }}
        >
          <Button variant="primary" className="btn-shimmer" onClick={() => scrollTo("menu")}>
            Explore Menu
          </Button>
          <Button variant="secondary" className="btn-shimmer" onClick={openReservation}>
            Reserve a Table
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </header>
  );
}
