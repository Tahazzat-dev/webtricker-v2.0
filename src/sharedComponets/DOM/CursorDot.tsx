"use client";
import { toggleShowFloatingDot } from "@/redux/features/dom/floatingDotSlice";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CursorDot() {
  // hook
  const dispatch = useDispatch()
  const { text, showDot } = useSelector(
    (state: RootState) => state.floatingText
  );
  //   const [clientX, setClient]

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

    const handleMouseEnter = () => dispatch(toggleShowFloatingDot(true));
    const handleMouseLeave = () => dispatch(toggleShowFloatingDot(false));

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dispatch]);

  // Conditional styles
  const dotSizeClass = text
    ? "w-[100px] h-[100px] flex items-center justify-center p-4 "
    : "w-3 h-3";
  const visibilityClass = showDot
    ? "!scale-100 "
    : "!scale-0 !w-[0.01px] !h-[0.01px] !p-0";

  return (
    <div
      style={{}}
      ref={cursorRef}
      className={`
        wt_dot_cursor fixed pointer-events-none top-0 left-0 
         rounded-full z-[999999]
        duration-75 ease-linear 
      `}
      id="cursor-dot"
    >
      <div
        className={`duration-500 overflow-hidden ${dotSizeClass}  ${visibilityClass}`}
      >
        {text ? <p>{text}</p> : <></>}
      </div>
    </div>
  );
}
