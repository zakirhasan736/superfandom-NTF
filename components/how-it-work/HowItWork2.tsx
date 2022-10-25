import Image from 'next/image';
import React from 'react';
import StepCard from '../Card/StepCards/StepCard';
const HowItWork2 = () => {
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
    }
  ];

  return (
    <>
      <section className="how-it-work-section w-full bg-primary pt-0 pb-0-0 relative z-10  overflow-hidden">
        <div className="section-title-box relative">
          <div className="how-it-work-modal-img min-w-[1920px] w-full h-[660px]">
            <img
              src="/images/HowItWork-bg-1.png"
              alt={'how-it-work-bg-modal-img'}
              className="how-it-work-bg-modal-img h-full w-full"
              width="100%"
              height="100%"
            />
          </div>
          <div className="section-titlebox lg:mb-15 sm:mb-5 absolute bottom-4">
            <div className="scrolable-text-box how-it-work-title two">
              <div className="scroll-text-item">
                <h2 className="section-title scrollable--title2 font-primary font-normal text-fig-5x text-secondary text-center uppercase md:text-fig-xx sm:text-fig-32">
                  • how it works • how it works • how it works • how it works •
                  how it works • how it works • how it works • how it works •
                  how it works • how it works
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="how-it-work-content-wrapper flex items-center gap-5 bg-primary py-[138px]">
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
