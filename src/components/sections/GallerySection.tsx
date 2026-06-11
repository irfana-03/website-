"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXwJxWE9e5A13o3RJKUOkGG5ApA6qHRDfj8F0gK5sxtTyLkgN1zADYl_Jin_7qahO0cMGEzfgzYbgC1Xh_-66LVs-6ZDFJkGGZJt2FE35fYQLAKAh7qFQBj0qYvmATZ9C4wt1iFa6yf3hWvkdTwMkZNeVJHE8j1vgoHskJosvSaoUDLP-UIum-_RsZlf7vXcMsXnX-bdrqVD3jKAtVjG79zfWrgdI1wkQu2KQ0frIuS9ydGPi1Jemgu0qNPegOs16IE_w4XJxcYlE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBiZSSXVBVerI19IcY4s-tnar-k8Zt6U2khK91Kw1uu5QuF0E9WIiVt09vjhayCDx25kPzYatVFivMoc-PzHpHTnuoIyiW7lBlFY7sM_O8U9q4q4TeX33RLSc58jvRgpIR9p4L_Kn_TGbhI0tC5VnD_IVB7He9gRSzo6mD2TqgXzlbmfqDmszwvS-nYNEVAg0ntNUMCIpH7bgQgK1KVWSJ5mOn3Vt6hOmubU17-6hDEoF6fuMXaWTY8ynflVHRAgBxTPiQBdrrJlcs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAex3nhTJbqamTlrgmCrY13bfQqWo-2dSEjUX99n3VfuelO0z6HJo_H-g8rrb_FlYX1Jm5nJaWumehHg5D3rUcev5RChiiz8qboz-WcjOWqhQrPb4BNFmHTfxWhgk6e4kAGXuJf9atb-73bhYVx-m7au8Q3MM2CRTofUOJHVduvZZaPYOf3kgsVmz70vlP_wQuUOoo4_gd_CQRkz2eRmuHVijW8HmDRJbGITzX55Xg8vXclvvajmdIYtMDkNp4Jvhw-RxiXuqDF180",
];

export default function GallerySection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = grid.querySelectorAll(".gallery-item");
    items.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: i * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <AnimatedText
          text="A Glimpse of SUNDAYS"
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

        <div ref={gridRef} className="gallery-grid">
          {images.map((src, i) => (
            <RevealOnScroll key={src} delay={i * 0.1}>
              <div className={`gallery-item image-tilt hover-zoom ${i === 1 ? "gallery-item-tall" : ""}`}>
                <div
                  className="gallery-image"
                  style={{ backgroundImage: `url(${src})` }}
                />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
