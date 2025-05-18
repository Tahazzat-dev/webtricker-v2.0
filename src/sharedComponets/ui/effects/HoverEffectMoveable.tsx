"use client";

import React, { useRef, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  moveAmount?: number;
  className?:string;
}

const HoverEffectMoveable: React.FC<Props> = ({
  children,
  moveAmount = 10,
  className=''
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;

      const xMove = (x / width) * (moveAmount * 2) - moveAmount;
      const yMove = (y / height) * (moveAmount * 2) - moveAmount;

      el.style.transform = `translate(${xMove}px, ${yMove}px)`;
    };

    const handleMouseLeave = () => {
      const el = wrapperRef.current;
      if (el) el.style.transform = "translate(0px, 0px)";
    };

    const el = wrapperRef.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [moveAmount]);

  return (
    <div
      ref={wrapperRef}
      className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.3,1,0.7,1)] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default HoverEffectMoveable;
