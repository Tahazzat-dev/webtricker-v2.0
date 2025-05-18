"use client";
import galleryModern from "@/app/fonts/gallery";
import LinkButton from "@/sharedComponets/ui/buttons/LinkButton";
import Container from "@/sharedComponets/ui/wrapper/Container";
import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="flex items-start gap-5 md:gap-6 lg:gap-8 2xl:gap-10">
      <Image
        width={60}
        height={66}
        className="h-auto"
        alt="Service icon"
        src="https://liko.foxthemes.me/wp-content/uploads/2024/06/service-icon-1.png"
      />
      <div className="grow">
        <h6 className="heading font-semibold mb-1 uppercase">Web Development</h6>
        <p>
          Webtricker: crafting pixel-perfect websites with a symphony of ones
          and zeros, a ballet of CSS, and a tango with JavaScript.
        </p>
      </div>
    </div>
  );
};

// ====== root component ======
export default function Services() {
  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
      <Container>
        <div className="w-full flex-col md:flex-row gap-10 sm:gap-16 md:gap-10 flex justify-between">
          <div className="w-full">
            <h2 className="heading inline !leading-[100%]">Thoughtful</h2>
            <div className="w-full flex flex-wrap lg:flex-nowrap items-end gap-2">
              <h2
                className={`heading !leading-[100%] ${galleryModern.className}`}
              >
                Process
              </h2>
              <h6 className="mb-2 md:mb-4 heading">We Think a lot</h6>
            </div>
            <LinkButton
              className="mt-5"
              label="See All Services"
              href="/services"
            />
          </div>

          {/* services info */}
          <div className="w-full flex flex-col gap-8 lg:gap-10 2xl:gap-12">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
