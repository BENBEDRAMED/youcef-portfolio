"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 🔥 smooth follow (spring physics)
  const smoothX = useSpring(x, { stiffness: 300, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 25 });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const hoverCheck = (e: PointerEvent) => {
      const target = e.target as HTMLElement;

      const isInteractive = target.closest(
        "a, button, input, textarea, [role='button'], .cursor-pointer, img, [data-cursor]"
      );

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", hoverCheck);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", hoverCheck);
    };
  }, [x, y]);

  return (
    <>
      {/* ✨ LIGHT FOLLOW */}
      <div
        className="fixed inset-0 pointer-events-none z-[5]"
        style={{
          background: `radial-gradient(
            600px circle at ${mouse.x}px ${mouse.y}px,
            rgba(255,255,255,0.05),
            transparent 60%
          )`,
        }}
      />

      {/* 🖱 CUSTOM CURSOR */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="fixed top-0 left-0 pointer-events-none z-[999]"
      >
        {/* 🔵 HOVER GLASS */}
        <motion.div
          animate={{
            scale: isHovering ? 1.8 : 0,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full 
                     bg-white/10 backdrop-blur-md border border-white/20"
        />

        {/* 🖱 CURSOR IMAGE */}
        <motion.img
          src="/cursor.png"
          alt="cursor"
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="relative w-8 h-8 object-contain"
        />
      </motion.div>
    </>
  );
}