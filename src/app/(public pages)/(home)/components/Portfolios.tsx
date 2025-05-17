import LinkButton from "@/sharedComponets/ui/buttons/LinkButton";
import ParallaxImage from "@/sharedComponets/ui/parallaxImage/ParallaxImage";
import Container from "@/sharedComponets/ui/wrapper/Container";
import React from "react";

export default function Portfolios() {
  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
      <Container>
        <div className="w-full flex-col flex-wrap  md:flex-row flex gap-5 2xl:gap-10 justify-between overflow-hidden">
          <div className="flex items-center w-[47%] max-w-[800px] h-auto">
            <ParallaxImage
              containerStyle="w-full h-[413px] max-w-[600px]"
              href=""
              src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-1.jpg"
              imgStyle=""
              key="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-1.jpg"
            />
          </div>
          <div className="flex w-[47%] max-w-[750px] h-auto">
            <ParallaxImage
              containerStyle="w-full h-[764px] max-w-[600px]"
              href=""
              src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-4.jpg"
              imgStyle=""
              key="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-4.jpg"
            />
          </div>
          <div className="w-[47%] flex justify-end max-w-[700px] h-auto">
            <ParallaxImage
              containerStyle="w-full h-[589px] max-w-[447px]"
              href=""
              src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-2.jpg"
              imgStyle=""
              key="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-2.jpg"
            />
          </div>
          <div className="w-[47%] flex items-end justify-center max-w-[800px] h-auto">
            <ParallaxImage
              containerStyle="w-full h-[382px] max-w-[318px]"
              href=""
              src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-5.jpg"
              imgStyle=""
              key="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-5.jpg"
            />
          </div>

          <div className="mt-10 md:mt-20 lg:mt-[120px] 2xl:mt-[160px] w-[47%] max-w-[800px] h-auto">
            <ParallaxImage
              containerStyle="w-full h-[752px] max-w-[596px]"
              href=""
              src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-3.jpg"
              imgStyle=""
              key="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-3.jpg"
            />
          </div>
          <div className="mt-10 md:mt-20 lg:mt-[120px] 2xl:mt-[160px] flex items-center justify-end w-[47%] max-w-[800px] h-auto">
            <ParallaxImage
              containerStyle="w-full h-[549px] max-w-[700px]"
              href=""
              src="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-6.jpg"
              imgStyle=""
              key="https://liko.foxthemes.me/wp-content/uploads/2024/06/project-1-6.jpg"
            />
          </div>
          <div className="w-[47%] "></div>
          <div className="w-[47%] -mt-20">
            <LinkButton
              className="mt-5"
              label="View All Projects"
              href="/services"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
