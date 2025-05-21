"use client";
import { portfolios } from "@/data/portfolio";
import { setFloatingText } from "@/redux/features/dom/floatingDotSlice";
import Container from "@/sharedComponets/ui/wrapper/Container";
import { TPortFolioSlider } from "@/types/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const Slider = ({ portfolio }: { portfolio: TPortFolioSlider }) => {
  const dispatch = useDispatch();
  const { href, img, subTitle, title } = portfolio;
  return (
    <div className="block w-full h-[60vh] md:h-screen wt_portfolio-container">
      <div className="w-full h-full  wt_portfolio-card relative">
        <Image
          className="w-full object-cover h-full absolute -z-10"
          src={img}
          width={1000}
          height={800}
          alt="Portfolio image"
        />

        <Link
          onMouseOverCapture={() => dispatch(setFloatingText("View Demo"))}
          onMouseLeave={() => dispatch(setFloatingText(null))}
          href={href}
          className=" cursor-hide w-full h-full z-10 flex flex-col items-center justify-center"
        >
          <div className="w-full overflow-hidden flex items-center justify-center">
            <h4 className="text-white slide-txt translate-y-full">{subTitle}</h4>
          </div>
          <div className="w-full overflow-hidden  flex items-center justify-center">
            <h2 className=" text-white slide-txt font-semibold wt_fs-7xl 2xl:!text-[160px] translate-y-full">
              {title}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

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

    // Animate slide texts when container hits 1/3 of viewport height
    const textElems = container.querySelectorAll(".slide-txt");
    textElems.forEach((el) => {
      gsap.fromTo(
        el,
        { y: "100%" },
        {
          y: "0%",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 66%",
          },
        }
      );
    });

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  if (!portfolios.length)
    return <p className="text-center">No portfolio available</p>;
  return (
    <section className="w-full overflow-hidden py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18 mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-18">
      <Container>
        <div ref={containerRef} className="w-full  flex flex-col">
          {portfolios.length ? (
            portfolios.map((portfolio) => (
              <Slider key={portfolio.id} portfolio={portfolio} />
            ))
          ) : (
            <></>
          )}
        </div>
      </Container>
    </section>
  );
}
