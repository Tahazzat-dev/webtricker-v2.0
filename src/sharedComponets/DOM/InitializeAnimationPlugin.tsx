"use client";
import { initSmoothScroll } from "@/utils/lenis";
import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InitializeAnimationPlugin() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    initSmoothScroll();
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return <></>;
}
