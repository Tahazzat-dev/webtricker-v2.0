import Container from "@/sharedComponets/ui/wrapper/Container";
import React from "react";

export default function ServicesBanner() {
  return (
    <section className={`w-full min-h-screen z-0 flex relative`}>
      <Container className="flex items-center justify-center">
        <div className="w-full max-w-[1000px] text-center">
          <h1 className="wt_fs-7xl font-medium heading !leading-[100%]">
            A full-service digital innovation partner
          </h1>
          <p className="wt_fs-xl bold mt-5">
            Our rich design and technology expertise delivers top brands and
            digital experiences Services list
          </p>
        </div>
      </Container>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/videos/services/banner-intro.mp4"
      >
        <source src="/videos/services/banner-intro.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
