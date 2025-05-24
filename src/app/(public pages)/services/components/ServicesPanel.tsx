"use client";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { services } from "@/data/services";
import Image from "next/image";
import Container from "@/sharedComponets/ui/wrapper/Container";
import gsap from "gsap";

// import Link from "next/link";
// import { RightArrowLong } from "@/sharedComponets/ui/icons/Icons";
gsap.registerPlugin(ScrollTrigger);

export default function ServicesPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const endTrigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !endTrigger.current) return;
    
    const pinnedPanels =
      containerRef.current?.querySelectorAll(".service-panel");
    pinnedPanels?.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: endTrigger.current,
        end: "top bottom",
        pin: true,
        pinSpacing: false,
        id: `${i + 1}`,
      });

        ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });
  }, [containerRef, endTrigger]);

  return (
    <section
      className="w-full relative pt-8 md:pt-10 lg:pt-14 xl:pt-16 2xl:pt-18"
      ref={containerRef}
    >
      {services.map((item, index) => (
        <section
          key={item.id}
          style={{ zIndex: `${services.length + index}` }}
          className={`service-panel !bg-slate-50 dark:!bg-slate-950 flex flex-col sm:flex-row w-full min-h-screen`}
        >
          <div className="w-full sm:w-3/6 h-5/12 sm:h-full">
            <Image
              className="w-full h-full object-cover"
              src={item.thumnail}
              width={700}
              height={100}
              alt="Service Image"
            />
          </div>
          <div className="w-full sm:w-3/6 h-7/12 sm:h-full xl:px-10 2xl:px-20 pt-10">
            <Container className="h-full flex flex-col md:justify-center">
              <p className="w-full flex items-center gap-1 mb-2 md:mb-3">
                <span>{index + 1 > 9 ? index + 1 : `0${index + 1}`}</span>{" "}
                <span className="w-10 h-[0.1px] bg-slate-300"></span>
                <span>Creative Studio</span>
              </p>
              <h4 className="mb-2 md:mb-4 lg:mb-6">{item.title}</h4>
              <div className="w-full flex flex-col items-start xl:ml-10 2xl:ml-12">
                <p>{item.excerpt}</p>

                {item?.relatedWork?.length ? (
                  <ul className="my-2 md:my-4 lg:my-6 list-disc list-inside flex flex-col md:gap-2">
                    {item.relatedWork.map((work, i) => (
                      <li key={work + i}>{work}</li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}

                {/* <Link
                  data-wt-hide-cursor
                  href="/"
                  className="flex items-center gap-3 group flex-nowrap"
                >
                  <span className="whitespace-nowrap">See Details</span>{" "}
                  <RightArrowLong className="duration-300 group-hover:translate-x-2 scale-y-90" />
                </Link> */}
              </div>
            </Container>
          </div>
        </section>
      ))}
      <div
        ref={endTrigger}
        className="z-10 w-full pt-10 md:pt-14 lg:pt-18 xl:pt-20 2xl:pt-24"
      >
        <Container className="w-full flex flex-col">
            <p className="bold text-center mb-2 lg:mb-0">DIGITAL DESIGN EXPERIENCE CREATIVE STUDIO</p>
          <h2 className="wt_fs-big text-center heading">GET IN TOUCH</h2>
        </Container>
      </div>
    </section>
  );
}
