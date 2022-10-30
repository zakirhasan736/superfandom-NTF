import { NextPage } from 'next';
import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StepCard from '../Card/StepCards/StepCard';

gsap.registerPlugin(ScrollTrigger);


const HowItWork2: NextPage<any> = ({pageName}) => {
  let StepCadItems = [
    {
      id: 1,
      photo_name: 'number1.png',
      title: 'Mint soulbound',
      desc: 'Soulbound tokens are forever bound to your wallet',
    },
    {
      id: 2,
      photo_name: 'number2.png',
      title: 'forever bound',
      desc: 'Soulbound tokens are forever bound to your wallet',
    },
    {
      id: 3,
      photo_name: 'number3.png',
      title: 'increase reputation',
      desc: 'Soulbound tokens you own increase your reputation',
    },
  ];
useEffect(() =>{
  document.body.style.overflow = 'auto';
  const howItWorkScrolled2 = gsap.utils.toArray('.how-it-work-section-box');
  howItWorkScrolled2.forEach((section:any, index) => {
    const wi = section.querySelector('.scroll-text-item');
    const [x, xEnd] = (index % 2) ? ['10%', (wi.scrollWidth - section.offsetWidth) * -1] : [wi.scrollWidth * -1, 0];
    gsap.fromTo(wi, { x, y: 0, }, {
      x: xEnd,
      duration: 10,
      scrollTrigger: {
        trigger: section,
        scrub: 0.1,
        start: 'top top',
        end: () => "+=" + (wi.scrollWidth - section.offsetWidth),
      },
      y: 0,
    });
  });

})
  return (
    <>
      <section className="how-it-work-section relative w-full px-0 bg-primary  overflow-hidden">
          <div className="section-title-box how-it-work-section-box relative w-full">
          <div className="how-it-work-modal-img min-w-[1920px] w-full h-[660px] lg:h-[450px] md:h-[300px] object-cover">
          <img
              src={`/images/${
                (pageName === 'causes' && 'HowItWork-bg-1.png') ||
                (pageName === 'fandom' && 'how-it-work-bg-2.png')
              }`}
              alt={'how-it-work-bg-modal-img'}
              className="how-it-work-bg-modal-img h-full w-full object-cover"
              width="100%"
              height="100%"
              
            />
          </div> 
          <div className="section-titlebox lg:mb-15 sm:mb-5 absolute bottom-4">
            <div className="scrolable-text-box how-it-work-title">
              <div className="scroll-text-item">
                <h2 className="section-title scrollable--title2 font-primary font-normal text-fig-5x text-secondary text-center uppercase lg:text-fig-xx md:text-fig-40">
                  • how it works • how it works • how it works • how it works •
                  how it works • how it works • how it works • how it works •
                  how it works • how it works
                </h2>
              </div>
            </div>
          </div>
        </div>
          <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="how-it-work-content-wrapper flex items-center gap-5 bg-primary py-[138px] laptop-x:py-24 lg:py-16 md:py-8 md:block">
          {StepCadItems.map(({ id, photo_name, title,  desc }) => (
                <StepCard 
                key={id}
                id={id}
                title={title}
                desc={desc}
                photo_name={photo_name}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWork2;
