import { NextPage } from 'next';
import React, { useLayoutEffect,useEffect } from 'react';
import Lottie from 'lottie-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Animation1 from '../../public/lottie_files/Comp_1.json';
import Animation2 from '../../public/lottie_files/02.json';
import Animation3 from '../../public/lottie_files/03.json';
import StepCard from '../Card/StepCards/StepCard';

gsap.registerPlugin(ScrollTrigger);

const HowItWork: NextPage<any> = ({ card1, card2, pageName }) => {
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

  useLayoutEffect(() => {
    const  howItWorkTextScroll = gsap.context(() => {
      document.body.style.overflow = 'auto';
      const howItWorkScrolled = gsap.utils.toArray(
        '.scrolable-text-box.how-it-work-title.one'
      );
      howItWorkScrolled.forEach((section: any, index) => {
        const w = section.querySelector('.scroll-text-item');
        const [x, xEnd] =
          index % 2
            ? ['10%', (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x, y: 0 },
          {
            x: xEnd,
            // duration: 10,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
              start: 'top +=1650',
              end: () => '+=' + (w.scrollWidth - section.offsetWidth),
            },
            y: 0,
          }
        );
      });
    });
    return () => {
      howItWorkTextScroll.revert();
    };
  });  
 useLayoutEffect(() => {
  const  howItWorkScroll = gsap.context(() => {
    const workInfoItems = gsap.utils.toArray('.how-it-work-info-items');
    workInfoItems.forEach((section: any) => {
      const infoLine = section.querySelector('.how-it-work-info-list');
      gsap.to(infoLine, {
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: 'top center',
          end: 'bottom bottom',
          toggleClass: 'active',
        },
        opacity: 1,
      });
    });

    let viewPort = gsap.matchMedia();
      viewPort.add('(min-width:1681px)', () => {
      ScrollTrigger.create({
        trigger: '.prallex2',
        scrub: 1.5,
        start: 'center center',
        end: '+=400',
      });
    }),
      viewPort.add('(max-width:1680px)', () => {
        ScrollTrigger.create({
          trigger: '.prallex2',
          scrub: true,
          start: 'center center',
          end: '+=400',
        });
      }),
      viewPort.add('(max-width:1280px)', () => {
        ScrollTrigger.create({
          trigger: '.prallex2',
          scrub: true,
          start: 'top top',
          end: 'top',
        });
      });
  });
  return () => {
    howItWorkScroll.revert();
  };
  }, []);

  useEffect(() => {
    const howItWorkAnim = gsap.context(() =>{
      const howItworkInfoFade = gsap.utils.toArray('.how-it-work-info-list');
      let viewPort = gsap.matchMedia();
      viewPort.add('(min-width:768px)', () => {
        howItworkInfoFade.forEach((section: any) => {
          const elems = section.querySelectorAll('.text-cont-box');
          // Set starting params for sections
          gsap.set(elems, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            overwrite: 'auto',
          });
  
          ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            end: 'bottom 30%',
            onEnter: () =>
              gsap.to(elems, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
              }),
            onLeave: () =>
              gsap.to(elems, {
                y: -50,
                opacity: 0,
                stagger: 0.2,
              }),
            onEnterBack: () =>
              gsap.to(elems, {
                y: 0,
                opacity: 1,
                stagger: -0.2,
              }),
            onLeaveBack: () =>
              gsap.to(elems, {
                y: 50,
                opacity: 0,
                stagger: -0.2,
              }),
          });
        });
      }),
        viewPort.add('(max-width:767px)', () => {
          howItworkInfoFade.forEach((section: any) => {
            const elems = section.querySelectorAll('.text-cont-box');
            // Set starting params for sections
            gsap.set(elems, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              overwrite: 'auto',
            });
  
            ScrollTrigger.create({
              trigger: section,
              start: 'top 60%',
              end: 'bottom 30%',
              onEnter: () =>
                gsap.to(elems, {
                  y: 0,
                  opacity: 1,
                  stagger: 0.2,
                }),
              onLeave: () =>
                gsap.to(elems, {
                  y: 0,
                  opacity: 1,
                  stagger: 0.2,
                }),
              onEnterBack: () =>
                gsap.to(elems, {
                  y: 0,
                  opacity: 1,
                  stagger: -0.2,
                }),
              onLeaveBack: () =>
                gsap.to(elems, {
                  y: 0,
                  opacity: 1,
                  stagger: -0.2,
                }),
            });
          });
        });
    });
    return () => {
      howItWorkAnim.revert();
    };
  }, []);
  return (
    <>
      <section className="how-it-work-section relative w-full px-0 bg-primary  overflow-hidden md:pb-[53px]">
        <div className="scrolable-bg-shape absolute top-0 left-0 w-full prallex2">
          <img
            src={`/images/${
              (pageName === 'home' && 'how-it-work-bg.png') ||
              (pageName === 'causes' && 'HowItWork-bg-1.png') ||
              (pageName === 'fandom' && 'how-it-work-bg-2.png')
            }`}
            alt={'how-it-work-bg-modal-img'}
            className="how-it-work-bg-modal-img h-full w-full"
            width="100%"
            height="100%"
          />
        </div>
        <div className="how-it-work-wrapper pt-[60px] pb-[124px] w-full z-10 relative lg:pt-[80px] lg:pb-[60px] md:pt-8 md:pb-8">
          <div className="section-titlebox mb-24 lg:mb-15 sm:mb-5">
            <div className="scrolable-text-box how-it-work-title one">
              <div  className="scroll-text-item">
                <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx sm:text-fig-40 sm:tracking-[.05em]">
                  • how it works • how it works • how it works • how it works •
                  how it works • how it works • how it works • how it works •
                  how it works • how it works
                </h2>
              </div>
            </div>
          </div>
          {card1 && (
            <div className="custom-container 2xl:px-0 xl:px-12 desktop-m:12 laptop-x:px-12 laptop-m:px-10 md:px-5 sm:px-4">
              <div className="how-it-work-cont-wrapper">
                <ul className="how-it-work-info-items">
                  <li className="how-it-work-info-list info-list1 flex items-center flex-row gap-[190px] laptop-m:gap-x-16 lg:gap-[120px] md:gap-8 md:flex-col-reverse md:mb-0">
                    <div className="how-it-work-info-cont w-full flex justify-end md:justify-start">
                      <div className="text-cont-box w-full max-w-[462px] relative">
                        <div className="info-num-icon absolute right-0 top-[-133px] laptop-m:top-[-90px] laptop-m:w-[150px] md:w-[130px] sm:w-[60px] md:top-0 md:left-0 md:right-auto">
                          <Image
                            src="/images/Subtract-num-1.png"
                            alt="superfandom info-item-num-img"
                            className="info-item-num-img "
                            width="195px"
                            height="198px"
                          />
                        </div>
                        <div className="info-text-box md:pl-36 sm:pl-20">
                          <h2 className="title font-primary font-normal text-fig-xx text-left mb-8 text-secondary uppercase md:text-fig-40 sm:text-fig-32 md:mb-4">
                            Mint <br /> soulbound
                          </h2>
                          <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0 md:text-fig-base">
                            Mint soulbound tokens of the causes you care about
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-work-anim-cont w-full max-w-[505px] min-w-[345px] md:max-w-[345px] relative sm:mb-8 md:text-right md:flex md:justify-center">
                      <Lottie animationData={Animation1} loop={true} />
                    </div>
                  </li>

                  <li className="how-it-work-info-list info-list2 flex items-center flex-row gap-[190px] laptop-m:gap-x-16 lg:gap-[120px] md:gap-8 md:flex-col-reverse md:mb-0">
                    <div className="how-it-work-info-cont w-full flex justify-end md:justify-start">
                      <div className="text-cont-box w-full max-w-[462px] relative">
                        <div className="info-num-icon absolute right-0 top-[-133px] laptop-m:top-[-90px]  laptop-m:w-[150px] md:w-[130px] sm:w-[60px] md:top-0 md:left-0 md:right-auto">
                          <Image
                            src="/images/Subtract-num-2.png"
                            alt="superfandom info-item-num-img"
                            className="info-item-num-img "
                            width="195px"
                            height="198px"
                          />
                        </div>
                        <div className="info-text-box md:pl-36 sm:pl-20">
                          <h2 className="title font-primary font-normal text-fig-xx text-left mb-8 text-secondary uppercase md:text-fig-40 sm:text-fig-32 md:mb-4">
                            forever <br /> bound
                          </h2>
                          <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0 md:text-fig-base">
                            Soulbound tokens are forever bound to your wallet
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-work-anim-cont w-full max-w-[762px] min-w-[345px] md:max-w-[345px] relative flex justify-end md:justify-center sm:mb-8">
                      <Lottie animationData={Animation2} loop={true} />
                    </div>
                  </li>

                  <li className="how-it-work-info-list info-list3 flex items-center flex-row gap-[190px] laptop-m:gap-x-16 lg:gap-[120px] md:gap-8 md:flex-col-reverse md:mb-0">
                    <div className="how-it-work-info-cont w-full flex justify-end md:justify-start">
                      <div className="text-cont-box w-full max-w-[462px] relative">
                        <div className="info-num-icon absolute right-[-30px] top-[-133px]  laptop-m:w-[150px] md:w-[130px] sm:w-[60px]  md:top-0 md:left-0 md:right-auto">
                          <Image
                            src="/images/Subtract-num-3.png"
                            alt="superfandom info-item-num-img"
                            className="info-item-num-img "
                            width="195px"
                            height="198px"
                          />
                        </div>
                        <div className="info-text-box md:pl-36 sm:pl-20">
                          <h2 className="title font-primary font-normal text-fig-xx text-left mb-8 text-secondary uppercase md:text-fig-40 sm:text-fig-32 md:mb-4">
                            increase <br /> reputation
                          </h2>
                          <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0 md:text-fig-base">
                            Soulbound tokens you own increase your reputation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="how-it-work-anim-cont w-full max-w-[722px] min-w-[345px] md:max-w-[345px] relative flex justify-center mb-8">
                      <Lottie animationData={Animation3} loop={true} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {card2 && (
            <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
              <div className="how-it-work-content-wrapper flex items-center gap-5 bg-primary py-[138px]">
                {StepCadItems.map(({ id, photo_name, title, desc }: any) => (
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
          )}
        </div>
      </section>
    </>
  );
};

export default HowItWork;
