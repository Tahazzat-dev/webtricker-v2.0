import React from "react";
import Container from "../wrapper/Container";
import Image from "next/image";
import webtrickerDark from "@/assets/images/home/webtricker-logo.svg";
import webtrickerWhite from "@/assets/images/home/webtricker-white.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-18">
      <div className="w-full bg-slate-500 py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
        <Container className="flex gap-10 gap-y-20 md:gap-20 2xl:gap-24">
          <div className="w-full">
            <Link href="/" className={`w-full`}>
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
          </div>
        </Container>
      </div>
    </footer>
  );
}
