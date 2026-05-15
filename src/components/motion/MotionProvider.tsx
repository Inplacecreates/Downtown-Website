import { LazyMotion, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps any subtree that uses Motion components.
 * Use `<m.div>` inside this provider (not `<motion.div>`) to keep
 * the bundle small. See motion-patterns skill, "Performance rules".
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
