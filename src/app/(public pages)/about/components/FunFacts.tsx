import Container from "@/sharedComponets/ui/wrapper/Container";
import React from "react";

export default function FunFacts() {
  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
      <Container className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-2">
        <div className="w-full col-span-2 lg:col-span-1 text-center md:text-left mb-3 md:mb-0">
          <p className="bold">Fun Facts</p>
          <h3 className="heading md:max-w-[350px] ">Agency Snapshots</h3>
        </div>
        <div className="w-full flex flex-col gap-10 text-center md:text-left">
          <div className="w-full">
            <span className="wt_fs-7xl bold">200+</span>
            <p className="bold uppercase wt_fs-md">PROJECTS COMPLETED</p>
          </div>
          <div className="w-full">
            <span className="wt_fs-7xl bold">21%</span>
            <p className="bold uppercase wt_fs-md">Team Members</p>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="w-full flex flex-col gap-10 text-center md:text-left">
          <div className="w-full">
            <span className="wt_fs-7xl bold">17+</span>
            <p className="bold uppercase wt_fs-md">YEARS OF EXPERIENCE</p>
          </div>
          <div className="w-full">
            <span className="wt_fs-7xl bold">391%</span>
            <p className="bold uppercase wt_fs-md">GROWING AGENCY</p>
          </div>
          <div className="w-full"></div>
        </div>
      </Container>
    </section>
  );
}
