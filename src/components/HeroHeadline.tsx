import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

/*
 * Hero headline with Motion-driven word-split reveal (Pattern 4 from
 * motion-patterns/SKILL.md). Each word rises from below a clipped
 * mask with staggered timing on an expo-out curve.
 *
 * Trade-off acknowledged: this ships ~30KB of Motion JS to every
 * homepage visitor. Reserved for the single most important moment
 * on the page (the hero h1) and not used elsewhere. CSS-only reveals
 * handle the rest of the page (.reveal in global.css).
 *
 * SSR caveat: motion's `initial` state translates the words below
 * the mask. Pre-hydration users see a brief empty headline. The flash
 * is typically <100ms on modern connections. Reduced-motion users get
 * a static, fully visible headline immediately (no rise).
 */

interface WordProps {
  word: string;
  delay: number;
  className?: string;
}

function Word({ word, delay, className }: WordProps) {
  const reduced = useReducedMotion();
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden align-baseline">
      <m.span
        initial={{ y: reduced ? "0%" : "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: reduced ? 0 : 0.7,
          delay: reduced ? 0 : delay / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`inline-block ${className ?? ""}`}
      >
        {word}
      </m.span>
    </span>
  );
}

export default function HeroHeadline() {
  // Timing: 50ms stagger between words, 100ms gap between lines.
  // Total reveal completes in roughly 1 second.
  const line1 = ["This", "Saturday."];
  const line2Tail = ["from", "nine."];
  const stagger = 50;
  const lineGap = 100;

  return (
    <LazyMotion features={domAnimation}>
      <h1 className="font-display text-[clamp(48px,9vw,128px)] font-black uppercase leading-[0.95] tracking-tight">
        {line1.map((word, i) => (
          <Word key={`l1-${i}`} word={word} delay={i * stagger} />
        ))}

        <br />

        <Word
          word="Bonfire"
          delay={line1.length * stagger + lineGap}
          className="bg-bonfire px-3 text-ink"
        />

        {line2Tail.map((word, i) => (
          <Word
            key={`l2-${i}`}
            word={word}
            delay={line1.length * stagger + lineGap + stagger + i * stagger}
          />
        ))}
      </h1>
    </LazyMotion>
  );
}
