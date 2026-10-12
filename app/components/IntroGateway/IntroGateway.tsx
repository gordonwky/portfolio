"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/utils/assetPath";

type Phase = "idle" | "opening";

export default function IntroGateway() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("idle");
  const autoStartRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 20 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  useEffect(() => {
    if (!isVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    autoStartRef.current = setTimeout(() => {
      setPhase("opening");
      exitTimerRef.current = setTimeout(() => setIsVisible(false), 5200);
    }, 900);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (autoStartRef.current) clearTimeout(autoStartRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [isVisible]);

  function beginStory() {
    if (phase === "opening") return;
    if (autoStartRef.current) clearTimeout(autoStartRef.current);
    setPhase("opening");
    exitTimerRef.current = setTimeout(() => setIsVisible(false), 5200);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (phase === "opening") return;
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.section
          className={`book-gateway ${phase === "opening" ? "is-opening" : ""}`}
          aria-label="Animated introduction to Gordon Wong's portfolio"
          onPointerMove={handlePointerMove}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)", scale: 1.05, transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="book-gateway__grain" />
          <header className="book-gateway__topline">
            <span>GW<sup>®</sup></span>
            <p>A short visual story</p>
            <p>Hong Kong · Portfolio 2026</p>
          </header>

          <div className="book-gateway__heading">
            <p>Science · Software · Elsewhere</p>
            <h1>Open a page<br /><em>into my world.</em></h1>
          </div>

          <div className="story-book-position">
            <motion.div className="story-book-wrap" style={{ rotateX, rotateY }}>
              <div className="story-book">
              <div className="story-book__block" />
              <div className="story-book__spread">
                <figure className="story-book__page story-book__page--left story-book__travel" style={{ backgroundImage: `url('${assetPath("/images/travel/hong-kong-overlook.avif")}')` }}>
                  <figcaption><span>01</span><strong>Elsewhere</strong><small>Hong Kong · Blue hour</small></figcaption>
                </figure>
                <figure className="story-book__page story-book__page--right story-book__physics" style={{ backgroundImage: `url('${assetPath("/images/intro/physics-notebook.png")}')` }}>
                  <figcaption><span>03</span><strong>Question</strong><small>Find the hidden pattern</small></figcaption>
                </figure>
              </div>

              <div className="story-book__leaf story-book__leaf--development">
                <div className="story-book__leaf-front story-book__development" style={{ backgroundImage: `url('${assetPath("/images/travel/toronto-autumn.avif")}')` }}><span>02 / Toronto in autumn</span></div>
                <div className="story-book__leaf-back story-book__development" style={{ backgroundImage: `url('${assetPath("/images/travel/toronto-autumn.avif")}')` }}><span>02 / Between city and canopy</span></div>
              </div>

              <button type="button" className="story-book__cover" onClick={beginStory} aria-label="Open the book and enter the portfolio">
                <span className="story-book__cover-mark">GW</span>
                <div><small>Selected works · 2026</small><strong>Ideas<br />in motion.</strong><p>Open to begin <i>↗</i></p></div>
                <span className="story-book__formula">∫ ψ* Ĥ ψ dτ</span>
              </button>
              </div>
            </motion.div>
          </div>

          <button type="button" className="book-gateway__cta" onClick={beginStory}>
            <span>{phase === "opening" ? "Turning the pages" : "Click to open"}</span><i>{phase === "opening" ? "•••" : "↗"}</i>
          </button>
          <p className="book-gateway__chapter" aria-live="polite">{phase === "opening" ? "Travel / Development / Physics" : "Move your cursor · Open the book"}</p>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
