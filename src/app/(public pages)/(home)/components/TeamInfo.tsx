"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { teamData } from "@/data/team";
import Image from "next/image";
import HoverEffectMoveable from "@/sharedComponets/ui/effects/HoverEffectMoveable";
import galleryModern from "@/app/fonts/gallery";

export default function TeamInfo() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current, {
      x: "-100%",
      duration: 1.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        // markers:true,
      },
    });
  }, [containerRef]);

  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18 mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-18 relative">
      <div ref={containerRef} className="w-full cursor-hide">
        <Swiper
        //  dir="ltr"
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={16}
          navigation={false}
          centeredSlides={true}
          loop={true}
        //   autoplay={{
        //     delay: 5000,
        //     disableOnInteraction: false,
        //   }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
            1280: {
              slidesPerView: 5.5,
            },
          }}
          className="w-full"
        >
          {teamData.map((item, index) => (
            <SwiperSlide
              className="cursor-hide overflow-hidden rounded-[8px]"
              key={index}
            >
              <div className="group overflow-hidden rounded-[8px] shadow-md">
                <HoverEffectMoveable
                  moveAmount={20}
                  className="w-full h-full min-h-full !p-0"
                >
                  <Image
                    className="w-full h-[350px] 2xl:h-[400px] scale-110 group-hover:scale-125 duration-1000"
                    src={item.profile}
                    width={200}
                    height={400}
                    alt="Team Profile"
                  />
                </HoverEffectMoveable>
                <div className="w-full duration-500 opacity-0 group-hover:opacity-100 h-full absolute left-0 pb-10 bottom-0 bg-gradient-to-t text-white from-black to-transparent pointer-events-none flex flex-col justify-end items-center">
                  <p className="uppercase">{item.role}</p>
                  <h4 className={`uppercase ${galleryModern.className}`}>
                    {item.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
