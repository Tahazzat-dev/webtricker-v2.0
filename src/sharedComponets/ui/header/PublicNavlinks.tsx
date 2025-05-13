"use client";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";

import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import Drawer from "../sidebar/Drawer";

// static data
const linksData = [
  { text: "About", href: "/about" },
  { text: "Features", href: "/features" },
  { text: "How it Works", href: "/how-it-works" },
];

// extra components
type LinkProps = {
  text: string;
  href: string;
  style?: string;
};

const Links = ({ text, href, style = "" }: LinkProps) => {
  return (
    <Link className={style} href={href}>
      {text}
    </Link>
  );
};

// root component
export default function PublicNavlinks() {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="bg-white hidden dark:bg-black grow md:flex gap-10 md:gap-6 lg:gap-8 2xl:gap-10 items-center justify-end">
        {linksData.map((link, index) => (
          <Links
            style="whitespace-nowrap"
            key={index}
            text={link.text}
            href={link.href}
          />
        ))}
        <Links
          style="btn-nav-login"
          key="login"
          text={"Login"}
          href={"/login"}
        />
      </nav>
      <button
        onClick={() => dispatch(SET_EXPAND("OPEN_MOBILE_HAMBERGER_MENU"))}
        className="md:!hidden"
      >
        Open
      </button>

      {/* mobile sidebar */}
      <Drawer activeKey="OPEN_MOBILE_HAMBERGER_MENU" key={'MOBILE_HAMBERGER_MENU'}>
        <div data-prevent-body-trigger className="w-full h-full flex flex-col">
          
       <div className="grow flex flex-col  gap-10 items-center justify-center">
       {linksData.map((link, index) => (
          <Links
            style="whitespace-nowrap"
            key={index}
            text={link.text}
            href={link.href}
          />
        ))}
        <Links
          style="btn-nav-login"
          key="login"
          text={"Login"}
          href={"/login"}
        />
       </div>
        </div>
      </Drawer>
    </>
  );
}
