import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimText: NextPage<any> = ({}) => {

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);
    
    gsap.utils.toArray('.scrolable-text-box').forEach((section, index) => {
      const w = section.querySelector('.scroll-text-item');
      const [x, xEnd] = (index % 2) ? ['200%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      gsap.fromTo(w, {  x  }, {
        x: xEnd,
        scrollTrigger: { 
          trigger: section, 
          scrub: 0.5 
        }
      });
    });
  });

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
            <div className="scrolable-text-box">
            <div className="scroll-text-item">
            <h2 className="section-title whitespace-nowrap scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-40 mb-[29px]">
            nft • fandoms • metavers • 
            nft • fandoms • metavers • 
            nft • fandoms • metavers • 
            nft • fandoms • metavers • 
            nft • fandoms • metavers • 
            </h2>
            </div>
            </div>

            <div className="scrolable-text-box">
            <div className="scroll-text-item">
            <h2 className="section-title whitespace-nowrap scrollable--title2 font-primary font-normal text-fig-5x text-center uppercase md:text-fig-xx sm:text-fig-32 mb-[29px] md:mb-[14px]">
            soulbound • tokens • no • 
            soulbound • tokens • no • 
            soulbound • tokens • no • 
            soulbound • tokens • no • 
            soulbound • tokens • no • 
            </h2>
            </div>
            </div>

            <div className="scrolable-text-box">
            <div className="scroll-text-item">
            <h2 className="section-title whitespace-nowrap scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-xx sm:text-fig-32 mb-0">
            nft • fandoms • metaverse • 
            nft • fandoms • metaverse • 
            nft • fandoms • metaverse • 
            nft • fandoms • metaverse • 
            nft • fandoms • metaverse • 
            </h2>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollAnimText;
