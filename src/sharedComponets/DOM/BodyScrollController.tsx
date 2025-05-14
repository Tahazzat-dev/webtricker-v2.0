"use client";
import { RootState } from "@/redux/store";
import { getLenisInstance } from "@/utils/lenis";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function BodyScrollController() {
  const { preventScrolling, EXPAND } = useSelector(
    (state: RootState) => state.modyfier
  );

  useEffect(() => {
    const lenis = getLenisInstance();
    const body = document.body;

    if (!lenis) return;
    // Prevent scrolling on the body and html elements
    if (preventScrolling && EXPAND) {
      body.style.overflowY = "hidden";
      lenis.stop(); // Stop Lenis on the body
    } else {
      body.style.overflowY = "auto";
      lenis.start(); // Start Lenis again
    }

    // Clean up on unmount or when effect dependencies change
    return () => {
      body.style.overflowY = "";
      lenis.start(); // Ensure Lenis is restarted
    };
  }, [preventScrolling, EXPAND]);

  return <></>;
}
