"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  style,
  direction = "up",
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = { opacity: 0, duration: 1.2, delay, ease: "power3.out" };
    if (direction === "up") from.y = 60;
    if (direction === "left") from.x = -60;
    if (direction === "right") from.x = 60;

    const tween = gsap.from(el, {
      ...from,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
