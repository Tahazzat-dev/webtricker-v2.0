import Container from "@/sharedComponets/ui/wrapper/Container";
import React from "react";
import { WtStarIcon } from "./Icons";
import Image from "next/image";

export default function OurServices() {
  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18 mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-18">
      <Container>
        <p className="w-full flex items-center gap-2 wt_fs-md">
          <WtStarIcon />
          <span>Services</span>
        </p>
        <h4 className="heading !leading-[100%] max-w-[850px]">
          We strongly believe that only design reinforced by strategy can
          provide real results.
        </h4>
        <div className="max-w-[1200px] grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 ml-auto w-full mt-10 md:mt-12 lg:mt-14 2xl:mt-18">
          {/*  ===== service info ==== */}
          <div className="w-full">
            <div className="w-full">
              <Image
                className="w-12 md:w-14 lg:w-16 h-auto dark:hidden"
                src="/images/services/service-branding-icon.png"
                width={63}
                height={65}
                alt="Service icon"
              />
              <Image
                className="w-12 md:w-14 lg:w-16 h-auto hidden dark:block"
                src="/images/services/service-branding-icon-white.png"
                width={63}
                height={65}
                alt="Service icon"
              />
            </div>
            <h5 className="heading mb-1 mt-4">Branding</h5>
            <p>
              Branding is one of the most important ingredients for the success
              of any business.
            </p>
          </div>
          {/*  ===== service info ==== */}
          <div className="w-full">
            <div className="w-full">
              <Image
                className="w-12 md:w-14 lg:w-16 h-auto dark:hidden"
                src="/images/services/service-website-design.png"
                width={63}
                height={65}
                alt="Service icon"
              />
              <Image
                className="w-12 md:w-14 lg:w-16 h-auto hidden dark:block"
                src="/images/services/service-website-design-white.png"
                width={63}
                height={65}
                alt="Service icon"
              />
            </div>
            <h5 className="heading mb-1 mt-4">Website Design</h5>
            <p>
              The perfect cocktail should still look and taste perfect no matter
              the size of the glass you serve it in.
            </p>
          </div>
          {/*  ===== service info ==== */}
          <div className="w-full">
            <div className="w-full">
              <Image
                className="w-12 md:w-14 lg:w-16 h-auto dark:hidden"
                src="/images/services/service-marketing-icon.png"
                width={63}
                height={65}
                alt="Service icon"
              />
              <Image
                className="w-12 md:w-14 lg:w-16 h-auto hidden dark:block"
                src="/images/services/service-marketing-white-icon.png"
                width={63}
                height={65}
                alt="Service icon"
              />
            </div>
            <h5 className="heading mb-1 mt-4">Marketing</h5>
            <p>
              We take that same approach with the apps & websites we create. you
              go there because of the overall experience.
            </p>
          </div>
          {/*  ===== service info ==== */}
        </div>
      </Container>
    </section>
  );
}
