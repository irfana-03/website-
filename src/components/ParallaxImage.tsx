"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}

export default function ParallaxImage({
  src,
  alt = "",
  className = "",
  style,
  speed = 0.3,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const tween = gsap.to(img, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`parallax-container image-tilt ${className}`}
      style={style}
    >
      <div
        ref={imgRef}
        className="parallax-image"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
