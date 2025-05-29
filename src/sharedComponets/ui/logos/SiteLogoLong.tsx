import Image from "next/image";
import webtrickerDark from "@/assets/images/home/webtricker-logo.svg";
import webtrickerWhite from "@/assets/images/home/webtricker-white.svg";
export default function SiteLogoLong() {
  return (
    <>
      <Image
        className="inline dark:hidden w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto"
        src={webtrickerDark}
        width={282}
        height={74}
        alt="Site logo"
      />
      <Image
        className="hidden dark:inline w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto"
        src={webtrickerWhite}
        width={282}
        height={74}
        alt="Site logo"
      />
    </>
  );
}
