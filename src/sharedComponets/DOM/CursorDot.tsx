"use client";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function CursorDot() {
  // hook
  const { text, showDot } = useSelector(
    (state: RootState) => state.floatingText
  );

  // ref
  const cursorRef = useRef<HTMLDivElement | null>(null);

  //   effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const halfWidth = cursorRef.current.offsetWidth / 2;
        const halfHeight = cursorRef.current.offsetHeight / 2;

        const clientX = e.clientX - halfWidth;
        const clientY = e.clientY - halfHeight;

        cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Conditional styles
  const dotSizeClass = text
    ? `${showDot ? "p-3" : ""} w-auto h-auto`
    : "w-3 h-3";
  const visibilityClass = showDot
    ? "opacity-100"
    : "opacity-0";

  return (
    <div
      ref={cursorRef}
      className={`
        fixed pointer-events-none top-0 left-0 
        bg-red-400 rounded-full z-[999999]
        duration-100 ease-linear 
        ${dotSizeClass} ${visibilityClass}
      `}
      id="cursor-dot"
    >
      {text ? <p>{text}</p> : <></>}
    </div>
  );
}
