import React from "react";
import Navbar from "./Navbar";
import PublicNavlinks from "./PublicNavlinks";

export default function PublicNavbar() {
  return (
    <Navbar navStyle="fixed top-0 left-0 z-50 pt-5 md:pt-6 lg:pt-7 xl:pt-8 2xl:pt-[38px]">
      <PublicNavlinks />
    </Navbar>
  );
}
