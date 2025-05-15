"use client";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import gsap from "gsap";
import { toggleShowFloatingDot } from "@/redux/features/dom/floatingDotSlice";

export default function CursorDot() {
  const dispatch = useDispatch();
  const { text } = useSelector((state: RootState) => state.floatingText);

  const ballRef = useRef<HTMLDivElement>(null);

  // Cursor state
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const ratio = 0.15;
  const active = useRef(false);

  const ballSize = 14;
  const ballScale = 1;
  const ballOpacity = 1;
  const ballBorderWidth = 1;

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    // Initial setup
    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      width: ballSize,
      height: ballSize,
      borderWidth: ballBorderWidth,
      opacity: ballOpacity,
    });

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Show cursor on move
      gsap.to(ball, { duration: 0.3, autoAlpha: 1 });
      dispatch(toggleShowFloatingDot(true));
    };

    const updatePosition = () => {
      if (!active.current) {
        pos.current.x += (mouse.current.x - pos.current.x) * ratio;
        pos.current.y += (mouse.current.y - pos.current.y) * ratio;

        gsap.set(ball, { x: pos.current.x, y: pos.current.y });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(ball, { duration: 0.3, autoAlpha: 1 });
      dispatch(toggleShowFloatingDot(true));
    };

    const handleMouseLeave = () => {
      gsap.to(ball, { duration: 0.3, autoAlpha: 0 });
      dispatch(toggleShowFloatingDot(false));
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ignore = target.closest(
        'a[target="_blank"], .cursor-hide, [href^="#"], [href^="mailto"], [href^="tel"], .lg-trigger, .wt_btn-disabled a'
      );

      if (!ignore) {
        gsap.to(ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
      }
    };

    const handleHoverIn = () => {
      gsap.to(ball, { duration: 0.3, scale: 0, opacity: 0 });
    };

    const handleHoverOut = () => {
      gsap.to(ball, { duration: 0.3, scale: ballScale, opacity: ballOpacity });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    document.addEventListener("click", handleClick);
    gsap.ticker.add(updatePosition);

    // Handle cursor hide on hover (similar to jQuery logic)
    const interactiveSelectors = [
      "a:not(.cursor-hide)",
      "button:not(.cursor-hide)",
      "[data-liko-hide-cursor]",
    ];
    interactiveSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("mouseenter", handleHoverIn);
        el.addEventListener("mouseleave", handleHoverOut);
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("click", handleClick);
      gsap.ticker.remove(updatePosition);
      interactiveSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          el.removeEventListener("mouseenter", handleHoverIn);
          el.removeEventListener("mouseleave", handleHoverOut);
        });
      });
    };
  }, [dispatch]);

  return (
    <div
      id="magic-cursor"
      ref={ballRef}
      className={`wt_dot_cursor fixed pointer-events-none top-0 left-0 rounded-full z-[999999] border border-white bg-transparent duration-75 ease-linear ${
        text ? "!w-[100px] !h-[100px] flex items-center justify-center p-4" : ""
      }`}
    >
      {text && (
        <div className="overflow-hidden min-w-full min-h-full flex items-center justify-center text-xs text-white whitespace-nowrap">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
