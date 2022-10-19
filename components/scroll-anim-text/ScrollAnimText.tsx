import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimText: NextPage<any> = ({}) => {
  
  useEffect(() => {
    gsap.to(".t1", {
      scrollTrigger: {
        trigger: ".how-it-work-section",
        start: 'top center+=100',
        toggleActions: 'restart none none none'
      },
      y: 30,
      duration: 5
    })
    gsap.to(".section-titlebox", {
      scrollTrigger: {
        trigger: ".how-it-work-section",
        toggleActions: 'restart none none none'
      },
      x: 100,
      duration: 5
    })
  }, [])
  return (
    <>
      <section className="how-it-work-section relative w-full h-[1080px] md:h-auto px-0 bg-primary overflow-hidden md:pt-8  sm:pt-6">
        <div className="scrolable-bg-shape absolute top-0 left-0 w-full sm:h-[1080px]">
          <Image
            src="/images/scroll-text-bg.png"
            alt="superfandom bg-shape"
            className="bg-shape-image w-full h-full"
            width="1920px"
            height="1080px"
          />
        </div>
        <div className="how-it-work-wrapper pt-[138px] pb-[234px] w-full z-10 relative overflow-hidden">
          <div className="section-titlebox mb-24">
            <h2 className="section-title t1 scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-40 mb-[29px]">
            nft • fandoms • metavers • 
            </h2>
            <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-xx sm:text-fig-32 mb-[29px] md:mb-[14px]">
            soulbound • tokens • no • 
            </h2>
            <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-xx sm:text-fig-32 mb-0">
            nft • fandoms • metaverse • 
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollAnimText;
