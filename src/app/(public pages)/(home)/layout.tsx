import Navbar from "@/sharedComponets/ui/header/Navbar";
import React, { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
