"use client";

import React, { useRef, useEffect, ReactNode } from "react";

interface MagneticHoverEffectProps {
  children: ReactNode;
  moveAmount?: number;       // max translation
  triggerDistance?: number;  // proximity in px around the element to activate
}

const MagneticHoverEffect: React.FC<MagneticHoverEffectProps> = ({
  children,
  moveAmount = 30,
  triggerDistance = 140,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - elCenterX;
      const deltaY = e.clientY - elCenterY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < triggerDistance) {
        // Normalize based on distance
        const force = 1 - distance / triggerDistance;
        const xMove = (deltaX / triggerDistance) * moveAmount * force;
        const yMove = (deltaY / triggerDistance) * moveAmount * force;
        el.style.transform = `translate(${xMove}px, ${yMove}px)`;
      } else {
        el.style.transform = "translate(0px, 0px)";
      }
    };

    const handleMouseLeave = () => {
      const el = wrapperRef.current;
      if (el) el.style.transform = "translate(0px, 0px)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [moveAmount, triggerDistance]);

  return (
    <div
      ref={wrapperRef}
      className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.3,1,0.7,1)] will-change-transform"
    >
      {children}
    </div>
  );
};

export default MagneticHoverEffect;
