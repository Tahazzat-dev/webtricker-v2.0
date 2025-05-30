import React from "react";
import PrivatePageWrapper from "../../components/PrivatePageWrapper";
import HeaderMenuCustomization from "./components/HeaderMenuCustomization";
import FooterMenuCustomization from "./components/FooterMenuCustomization";
import PageTitle from "../../components/PageTitle";

export default function LogoCustomizationPage() {
  return (
    <PrivatePageWrapper>
      <div className="w-full flex flex-col gap-20">
        <PageTitle key="CUSTOMIZE_MENU" title="Customize Menu" />
        <div className="w-full">
          <h6>Header Menu</h6>
          <HeaderMenuCustomization />
        </div>
        <FooterMenuCustomization />
      </div>
    </PrivatePageWrapper>
  );
}
