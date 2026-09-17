"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const hoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // detect interactive elements
      if (target.closest("a, button, [data-cursor]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hoverCheck);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hoverCheck);
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
            rgba(255,255,255,0.06),
            transparent 60%
          )`,
        }}
      />

      {/* 🖱 CUSTOM CURSOR */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 pointer-events-none z-[999]"
      >
        {/* 🔵 HOVER COVER */}
        <div
          className={`
            absolute inset-0 rounded-full transition-all duration-300
            ${isHovering
              ? "scale-80 bg-white/10 backdrop-blur-md border border-white/20"
              : "scale-0"}
          `}
        />

        {/* 🖱 CURSOR IMAGE */}
        <img
          src="/cursor.png"
          alt="cursor"
          className={`
            relative w-8 h-8 object-contain transition duration-200
            ${isHovering ? "scale-110" : "scale-100"}
          `}
        />
      </motion.div>
    </>
  );
}