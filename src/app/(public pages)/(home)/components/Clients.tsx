"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Container from "@/sharedComponets/ui/wrapper/Container";

const items = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 6",
  "Client 7",
  "Client 8",
  "Client 9",
  "Client 10",
];

export default function Clients() {
  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
      <Container>
        <div className="w-full flex-col  md:flex-row flex md:items-center gap-5 lg:gap-10 overflow-hidden">
          <p className="uppercase whitespace-nowrap shrink-0">
            clients we&apos;ve worked with
          </p>
          <Marquee
            speed={80}          
            gradient={false}    
            pauseOnHover={false}
            className="flex items-center"
          >
            {items.map((item, idx) => (
              <span
                key={idx}
                className="text-xl font-medium text-gray-800 px-12 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
