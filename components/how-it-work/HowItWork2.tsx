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
  useEffect(() => {
    document.body.style.overflow = 'auto';
    gsap.utils.toArray('.scrolable-text-box.how-it-work-title').forEach((section:any, index) => {
      const w = section.querySelector('.scroll-text-item');
      const [x, xEnd] = (index % 2) ? ['10%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      gsap.fromTo(w, { x, y: 0, }, {
        x: xEnd,
        duration: 10,
        scrollTrigger: {
          trigger: section,
          markers: true,
          scrub: 0.5
        },
        y: 0,
      });
    });
  }, []);
  return (
    <>
      <section className="how-it-work-section relative w-full px-0 bg-primary  overflow-hidden">
        <div className="scrolable-bg-shape absolute top-0 left-0 w-full prallex2">
        <img
              src={`/images/${
                (pageName === 'causes' && 'HowItWork-bg-1.png') ||
                (pageName === 'fandom' && 'how-it-work-bg-2.png')
              }`}
              alt={'how-it-work-bg-modal-img'}
              className="how-it-work-bg-modal-img h-full w-full"
              width="100%"
              height="100%"
            />
        </div>
        <div className="how-it-work-wrapper pt-[60px] pb-[124px] w-full z-10 relative lg:pt-[80px] lg:pb-[80px] md:pt-8 md:pb-8">
          <div className="section-titlebox mb-24 lg:mb-15 sm:mb-5">
            <div className="scrolable-text-box how-it-work-title">
              <div className="scroll-text-item">
                <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-xx sm:text-fig-32">
                  • how it works • how it works
                  • how it works • how it works
                  • how it works • how it works
                  • how it works • how it works
                  • how it works • how it works
                </h2>
              </div>
            </div>
          </div>
           <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="how-it-work-content-wrapper flex items-center gap-5 bg-primary py-[138px]">
            {StepCadItems.map(({ id, photo_name, title, desc }:any) => (
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
        </div>
      </section>
    </>
  );
};

export default HowItWork2;
