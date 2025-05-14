import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import siteLogo from '@/assets/images/navbar/site-logo.png'
import Link from 'next/link'
import { getLenisInstance } from '@/utils/lenis';

export default function SiteLogo() {
   // variables
  const THRESHOLD = 100;

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
  
    const expandStyle = expand ? "!max-w-[600px]" : "max-w-[300px]"; 

  return (
    <Link href="/" className={`w-full block duration-1000 ${expandStyle}`}>
        <Image className='inline dark:hidden w-[160px] md:w-[200px] lg:w-[220px] xl:w-[250px] 2xl:w-[282px] h-auto' src={siteLogo} width={282} height={74} alt='Site logo' />
        <h3 className='dark:block hidden acp_fs-4xl '>Accompanied</h3>
        {/* <Image src={siteLogo} width={282} height={74} alt='Site logo' /> */}
    </Link>
  )
}
