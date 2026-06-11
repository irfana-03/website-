"use client";

import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";

const reviews = [
  {
    quote: "An absolutely transcendent dining experience. The ghee roast alone is worth the visit.",
    author: "Priya M.",
    role: "Food Critic",
  },
  {
    quote: "The midnight ambiance is unmatched in Chennai. Every cocktail tells a story.",
    author: "Arjun K.",
    role: "Regular Guest",
  },
  {
    quote: "SUNDAYS redefined what a restobar can be. Cinematic, luxurious, unforgettable.",
    author: "Meera S.",
    role: "Event Host",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <AnimatedText
          text="What Our Guests Say"
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

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <RevealOnScroll key={review.author} delay={i * 0.15}>
              <motion.div
                className="review-card glass-card hover-lift"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="review-stars">★★★★★</div>
                <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
                <div className="review-author">
                  <strong>{review.author}</strong>
                  <span>{review.role}</span>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
