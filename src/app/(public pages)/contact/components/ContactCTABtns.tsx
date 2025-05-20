import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";

export default function ContactCTABtns() {
  return (
    <div className="hidden lg:flex absolute top-[50%] rotate-90 left-0 translate-x-[-45%] xl:translate-x-[-30%] items-center gap-5">
      <div className="flex gap-5">
        <Link href="/" target="_blank">
          <LinkedInIcon className="w-4 h-4 -rotate-90" />
        </Link>
        <Link href="/" target="_blank">
          <TwitterIcon className="w-4 h-4 -rotate-90" />
        </Link>
        <Link href="/" target="_blank">
          <InstagramIcon className="w-4 h-4 -rotate-90" />
        </Link>
        <Link href="/" target="_blank">
          <FacebookIcon className="w-4 h-4 -rotate-90" />
        </Link>
      </div>
      <span className="w-20 h-[1px] bg-black dark:bg-white"></span>
      <p className="wt_fs-sm whitespace-nowrap">Follow us</p>
    </div>
  );
}
