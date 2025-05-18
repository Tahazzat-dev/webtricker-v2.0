"use client";
import Container from "@/sharedComponets/ui/wrapper/Container";
import Image from "next/image";
import React from "react";
import testimonialsBanner from "@/assets/images/home/testimonials-banner.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "@/data/testimonials";
import galleryModern from "@/app/fonts/gallery";

export default function Testimonials() {
  return (
    <section className="relative py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
      <div className="w-full min-h-[300px] relative z-0 ">
        <Image
          className="w-full h-[85%] object-cover absolute top-0 left-0 -z-10"
          src={testimonialsBanner}
          width={1000}
          height={400}
          alt="Testimonals Banner"
        />

        <div className="absolute rounded-[4px] md:flex items-center top-40 hidden -left-10 lg:left-20 2xl:left-40 z-0 uppercase bg-[var(--clr-bg-body-dark)] p-2 px-5 -rotate-90 ">
          <Image
            className="w-10 h-10 rotate-90"
            src="/icons/home/testimoials-clicking-hand.svg"
            width={50}
            height={50}
            alt="Hand icon"
          />{" "}
          <span className={`text-white font-semibold`}>Our Testimonials</span>
        </div>

        <Container className="relative z-10">
          <div className="w-full flex items-center justify-end ">
            <div className="testimonials-container">
              <h6>Testimonials</h6>
              <h4 className={`heading font-semibold mb-5 mt-1 ${galleryModern.className}`}>From Our Cients</h4>
              <Swiper
                spaceBetween={30}
                effect={"slide"}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <p>{item.description}</p>

                    <div className="w-full gap-5 flex items-center mt-10">
                      <Image
                        className="w-20 min-w-20 lg:min-w-[100px] border object-cover border-slate-300 dark:border-slate-700 rounded-full lg:w-[100px] h-20 lg:h-[100px]"
                        src={item.image}
                        width={100}
                        height={100}
                        alt="profile image"
                      />
                      <div className="w-full flex flex-col">
                        <h6>{item.name}</h6>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
