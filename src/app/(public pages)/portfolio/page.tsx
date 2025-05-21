import Container from "@/sharedComponets/ui/wrapper/Container";
import React from "react";
import PortfolioShowcase from "./components/PortfolioShowcase";

export default function PortfolioPage() {
  return (
    <main className="w-full z-0">
      <section className={`w-full min-h-screen z-0 flex relative`}>
        <Container className="flex items-center justify-center">
          <div className="w-full max-w-[1000px] text-center bg-slate-800/30 rounded-[10px]">
            <h1 className="!text-white wt_text-shadow wt_fs-7xl font-medium heading !leading-[100%]">
              Portfolio
            </h1>
            <p className="!text-white wt_text-shadow wt_fs-xl bold mt-5">
              Explore our portfolio of responsive web design & development projects.
            </p>
          </div>
        </Container>
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="/videos/portfolio/portfolio.mp4"
        >
          <source src="/videos/services/banner-intro.mp4" type="video/mp4" />
        </video>
      </section>
      <PortfolioShowcase />
       <Container className="w-full flex flex-col">
            <p className="bold text-center mb-2 lg:mb-0">DIGITAL DESIGN EXPERIENCE CREATIVE STUDIO</p>
          <h2 className="wt_fs-big text-center heading">GET IN TOUCH</h2>
        </Container>
    </main>
  );
}
