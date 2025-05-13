import React, { ReactNode } from "react";
import Container from "@/sharedComponets/ui/wrapper/Container";
import SiteLogo from "@/sharedComponets/ui/logos/SiteLogo";


type Props = {
    navStyle?:string,
    contentWrapperStyle?:string,
    children: ReactNode
}
export default function Navbar({ children,contentWrapperStyle='', navStyle="" }:Props) {
  return (
    <div className={`w-full h-auto ${navStyle}`}>
      <Container>
        <div className={`w-full flex items-center  ${contentWrapperStyle}`}>
          <SiteLogo />
          {children}
        </div>
      </Container>
    </div>
  );
}
