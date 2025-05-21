import Container from "@/sharedComponets/ui/wrapper/Container";
import Image from "next/image";
import React from "react";

export default function WhatWeDo() {
  return (
    <section className="pt-8 md:pt-10 lg:pt-14 xl:pt-16 2xl:pt-18">
        <Container className="flex flex-col lg:hidden mb-4">
            <h5 className="heading">Something</h5>
            <p className="bold whitespace-nowrap">WHAT WE DO</p>
        </Container>
      <Container className="flex flex-col sm:flex-row lg:grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] justify-between gap-5 !max-w-[1050px] xl:gap-6 2xl:gap-10 mx-auto">
        <div className="w-full hidden lg:block">
            <h5 className="heading">Something</h5>
            <div className="w-full flex items-start mt-2">
              {" "}
              <p className="bold whitespace-nowrap">WHAT WE DO</p>
              <div className="hidden sm:block w-full mt-4">
                <Image
                  className="w-16 md:w-16 h-auto  dark:hidden"
                  src="/images/contact/contact-line-draw.png"
                  width={70}
                  height={100}
                  alt="Line svg"
                />
                <Image
                  className="w-16 md:w-16 h-auto hidden dark:inline-block"
                  src="/images/contact/contact-form-line-white.png"
                  width={70}
                  height={100}
                  alt="Line svg"
                />
              </div>
            </div>
        </div>
       <ul className="list-disc list-inside lg:list-outside flex flex-col gap-2 w-full">
            <li>Web Development</li>
            <li>Logo Design</li>
            <li>Wordpress Development</li>
            <li>Shopify Development</li>
            <li>E-commerce Store</li>
          </ul>
          <ul className="list-disc list-inside lg:list-outside flex flex-col gap-2 w-full">
            <li>Animations</li>
            <li>REST API</li>
            <li>Digital Marketing</li>
            <li>SEO Development</li>
            <li>Search Engine Optimization</li>
          </ul>
      </Container>
    </section>
  );
}
