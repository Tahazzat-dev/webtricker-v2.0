"use client";
import React, { ReactNode } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type Props = {
  activeKey: string;
  style?: string;
  children: ReactNode;
};
export default function Drawer({ children, activeKey, style = "" }: Props) {
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  return (
    <aside
      className={`bg-white duration-300 md:!hidden dark:bg-black h-screen w-screen fixed top-0 right-0 ${
        EXPAND == activeKey ? "translate-x-0" : "translate-x-full"
      } ${style}`}
    >
      {children}
    </aside>
  );
}
