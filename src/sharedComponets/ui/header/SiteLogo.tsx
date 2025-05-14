"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import webtrickerDark from "@/assets/images/home/webtricker-logo.svg";
import webtrickerWhite from "@/assets/images/home/webtricker-white.svg";
import { getLenisInstance } from "@/utils/lenis";

export default function SiteLogo() {
  // variables
   const THRESHOLD = 270;
 
   // hooks
   const [expand, setExpand] = useState(false);
 
   useEffect(() => {
       const lenis = getLenisInstance();
       if (!lenis) return;
   
       const handleScroll = () => {
         const scrollY = lenis.scroll;
         if (scrollY > THRESHOLD && !expand) {
           setExpand(true);
         }
   
         if (scrollY < THRESHOLD && expand) {
           setExpand(false);
         }
       };
   
       // Lenis uses a custom RAF loop, so hook into its scroll event
       lenis.on("scroll", handleScroll);
   
       return () => {
         lenis.off("scroll", handleScroll);
       };
     }, [expand]);
   
     const expandStyle = expand ? "!max-w-[400px] lg:!max-w-[550px]" : "max-w-[300px]"; 
 

  return (
    <Link href="/" className={`duration-1000 w-full ${expandStyle}`}>
      <Image
        className="inline dark:hidden w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto"
        src={webtrickerDark}
        width={282}
        height={74}
        alt="Site logo"
      />
      <Image
        className="hidden dark:inline w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto"
        src={webtrickerWhite}
        width={282}
        height={74}
        alt="Site logo"
      />
    </Link>
  );
}
