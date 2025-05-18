'use client'
import React from "react";
import Container from "../wrapper/Container";
import Image from "next/image";
import webtrickerW from "@/assets/images/home/webtricker-w.png";
import Link from "next/link";
// import galleryModern from "@/app/fonts/gallery";

export default function Footer() {
  return (
    <footer className="mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-18">
      <div className="w-full bg-slate-200 py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
        <Container className="flex gap-10 gap-y-20 md:gap-20 2xl:gap-24">
          <div className="w-full">
            <Link className="flex items-center gap-1 bold" href="/">
              <Image
                className="inline w-14"
                src={webtrickerW}
                width={50}
                height={50}
                alt="Site logo"
              />
              <h5>Webtricker</h5>
            </Link>
            <p>Looking for a reliable digital partner? We provide end-to-end solutions—design, development, marketing, SEO, and more. Let&apos;s collaborate for lasting success.</p>
          </div>
            
        </Container>
      </div>
    </footer>
  );
}
