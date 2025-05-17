"use client";
import galleryModern from "@/app/fonts/gallery";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function LargeMarquee() {
  const marQueeContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!marQueeContainer?.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marQueeContainer.current, {
        x: "-50%",
        scrollTrigger: {
          trigger: marQueeContainer.current,
          start: "top bottom",
          end: "+=100% top",
          scrub: true,
        },
      });
    }, marQueeContainer);

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
        <div className="w-full overflow-hidden">
          <div ref={marQueeContainer} className="w-full flex flex-nowrap">
            <h2 className={`heading wt_fs-giant flex flex-nowrap whitespace-nowrap items-center gap-5`}>
              <span className={galleryModern.className}>CO</span>
              <Image
                className="wt_infinit_spin 2xl:w-[137px] xl:w-[110px] lg:w-[100px] md:w-[90px] sm:w-[72px] w-16"
                src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-shape-1-1.png"
                width={137}
                height={137}
                alt="Brand image"
              />
              <span className={galleryModern.className}>LEST</span>{" "}
              <span className="ml-1 md:ml-5 lg:ml-10 inline-block"></span>
              <span className="-mt-3">PROJECT</span><span className="ml-1 md:ml-5 lg:ml-10 inline-block"></span> 
              <span className={galleryModern.className}>CO</span>
              <Image
                className="wt_infinit_spin 2xl:w-[137px] xl:w-[110px] lg:w-[100px] md:w-[90px] sm:w-[72px] w-16"
                src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-shape-1-1.png"
                width={137}
                height={137}
                alt="Brand image"
              />
              <span className={galleryModern.className}>LEST</span>
              <span className="ml-1 md:ml-5 lg:ml-10 inline-block"></span> <span className="-mt-3">PROJECT</span>
            </h2>
          </div>
        </div>
    </section>
  );
}
