"use client";
import Container from "@/sharedComponets/ui/wrapper/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set perspective
    gsap.set(container.querySelectorAll(".wt_portfolio-container"), {
      perspective: 60,
    });

    // Animate each image
    const cards = container.querySelectorAll(".wt_portfolio-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          rotationX: 1.8,
          scaleX: 1,
          z: "0vh",
        },
        {
          rotationX: -0.5,
          scaleX: 1,
          z: "-2vh",
          scrollTrigger: {
            trigger: card,
            start: "top+=150px bottom",
            end: "bottom top",
            immediateRender: false,
            scrub: 0.1,
          },
        }
      );
    });

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="w-full overflow-hidden py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18 mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-18">
      <Container>
        <div
          ref={containerRef}
          className="w-full  flex flex-col"
        >
          <Link href="/" className="block w-full h-[60vh] md:h-screen wt_portfolio-container">
            <div className="w-full h-full  wt_portfolio-card relative">
              <Image
                className="w-full object-cover h-full absolute -z-10"
                src="https://liko.foxthemes.me/wp-content/uploads/2024/06/slider-1-1.jpg"
                width={1000}
                height={800}
                alt="Portfolio image"
              />

              <div className="w-full h-full z-10 flex items-center justify-center">
                <h4>some content</h4>
              </div>
            </div>
          </Link>
          <Link href="/" className="block w-full h-[60vh] md:h-screen wt_portfolio-container">
            <div className="w-full h-full  wt_portfolio-card relative">
              <Image
                className="w-full object-cover h-full absolute -z-10"
                src="https://liko.foxthemes.me/wp-content/uploads/2024/06/slider-1-1.jpg"
                width={1000}
                height={800}
                alt="Portfolio image"
              />

              <div className="w-full h-full z-10 flex items-center justify-center">
                <h4>some content</h4>
              </div>
            </div>
          </Link>
          <Link href="/" className="block w-full h-[60vh] md:h-screen wt_portfolio-container">
            <div className="w-full h-full  wt_portfolio-card relative">
              <Image
                className="w-full object-cover h-full absolute -z-10"
                src="https://liko.foxthemes.me/wp-content/uploads/2024/06/slider-1-1.jpg"
                width={1000}
                height={800}
                alt="Portfolio image"
              />

              <div className="w-full h-full z-10 flex items-center justify-center">
                <h4>some content</h4>
              </div>
            </div>
          </Link>
          <Link href="/" className="block w-full h-[60vh] md:h-screen wt_portfolio-container">
            <div className="w-full h-full  wt_portfolio-card relative">
              <Image
                className="w-full object-cover h-full absolute -z-10"
                src="https://liko.foxthemes.me/wp-content/uploads/2024/06/slider-1-1.jpg"
                width={1000}
                height={800}
                alt="Portfolio image"
              />

              <div className="w-full h-full z-10 flex items-center justify-center">
                <h4>some content</h4>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
