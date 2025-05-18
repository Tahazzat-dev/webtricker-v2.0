// import Button from "@/sharedComponets/ui/buttons/Button";
// import Heading from "./components/Heading";
// import LinkButton from "@/sharedComponets/ui/buttons/LinkButton";

import Container from "@/sharedComponets/ui/wrapper/Container";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import IntroVideo from "./components/IntroVideo";
import Services from "./components/Services";
import LargeMarquee from "./components/LargeMarquee";
import Portfolios from "./components/Portfolios";
import TeamBanner from "./components/TeamBanner";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="w-full z-0">
      {/* <Banner />
      <IntroVideo />
      <Container>
        <div className="my-8 md:my-10 w-full border-b border-slate-200 dark:border-slate-800"></div>
      </Container>
      <Clients />
      <Services />
      <LargeMarquee />
      <Portfolios />
      <TeamBanner /> */}
      <Testimonials />
      <div className="w-full h-screen bg-red-200"></div>
    </main>
  );
}
