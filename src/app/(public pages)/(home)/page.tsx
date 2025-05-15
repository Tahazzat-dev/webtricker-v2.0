// import Button from "@/sharedComponets/ui/buttons/Button";
// import Heading from "./components/Heading";
// import LinkButton from "@/sharedComponets/ui/buttons/LinkButton";

import Banner from "./components/Banner";
import IntroVideo from "./components/IntroVideo";

export default function Home() {
  return (
    <main className="w-full z-0">
      <Banner />
      <IntroVideo />
      <div className="w-full h-screen border border-red-400"></div>
    </main>
  );
}
