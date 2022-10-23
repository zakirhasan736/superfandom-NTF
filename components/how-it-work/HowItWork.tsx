import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Animation1 from '../../public/lottie_files/01.json';
import Animation2 from '../../public/lottie_files/02.json';
import Animation3 from '../../public/lottie_files/03.json';

gsap.registerPlugin(ScrollTrigger);

const HowItWork: NextPage<any> = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    // document.scrollingElement.scrollTo(0, 0);
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

    gsap.utils.toArray('.how-it-work-info-items').forEach((section:any) => {
      const infoLine = section.querySelector('.how-it-work-info-list');
      gsap.to(infoLine, {
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'restart pause reverse pause',
          toggleClass: 'active',
          // ease: 'power2',
        },
        opacity: 1,
      });
    });
    ScrollTrigger.matchMedia({
      "(min-width:1681px)": function () {
        ScrollTrigger.create({
          trigger: ".prallex2",
          pin: true,
          scrub: true,
          start: "center center",
          end: "+=800"
        });
      },
      "(max-width:1680px)": function () {
        ScrollTrigger.create({
          trigger: ".prallex2",
          pin: true,
          scrub: true,
          start: "center center",
          end: "+=600"
        });
      },
      "(max-width:1280px)": function () {
        ScrollTrigger.create({
          trigger: ".prallex2",
          pin: true,
          scrub: true,
          start: "top top",
          end: "top"
        });
      },
      // "(max-width:1680px)": function(){},
    })

  }, []);
  useEffect(() => {
    gsap.utils.toArray('.how-it-work-info-list').forEach((section:any) => {
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
        onEnter: () => gsap.to(elems, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }),
        onLeave: () => gsap.to(elems, {
          y: -50,
          opacity: 0,
          stagger: 0.2,
        }),
        onEnterBack: () => gsap.to(elems, {
          y: 0,
          opacity: 1,
          stagger: -0.2,
        }),
        onLeaveBack: () => gsap.to(elems, {
          y: 50,
          opacity: 0,
          stagger: -0.2,
        }),
      });
    })
  }, []);
  return (
    <>
      <section className="how-it-work-section relative w-full px-0 bg-primary  overflow-hidden">
        <div className="scrolable-bg-shape absolute top-0 left-0 w-full prallex2">
          <img
            src="/images/how-it-work-bg.png"
            alt="superfandom bg-shape"
            className="bg-shape-image w-full h-full"
            width="1920px"
            height="1080px"
          />
        </div>
        <div className="how-it-work-wrapper pt-[60px] pb-[124px] w-full z-10 relative lg:pt-[80px] lg:pb-[80px] md:pt-8 md:pb-8">
          <div className="section-titlebox mb-24 lg:mb-15 sm:mb-5">
            <div className="scrolable-text-box how-it-work-title">
              <div className="scroll-text-item">
                <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-xx sm:text-fig-32">
                  • how it work • how it work
                  • how it work • how it work
                  • how it work • how it work
                  • how it work • how it work
                  • how it work • how it work
                </h2>
              </div>
            </div>
          </div>
          <div className="custom-container 2xl:px-0 xl:px-0 laptop-x:px-12 md:px-5 sm:px-4">
            <div className="how-it-work-cont-wrapper">
              <ul className="how-it-work-info-items">

                <li className="how-it-work-info-list info-list1 flex items-center flex-row gap-[190px] lg:gap-[120px] md:flex-col-reverse md:mb-8">
                  <div className="how-it-work-info-cont w-full flex justify-end md:justify-start">
                    <div className="text-cont-box w-full max-w-[462px] relative">
                      <div className="info-num-icon absolute right-0 top-[-129px] md:w-[130px] sm:w-[60px] md:top-0 md:left-0 md:right-auto">
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
                  <div className="how-it-work-anim-cont w-full relative sm:mb-8 md:text-right md:flex md:justify-center">
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: Animation1,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                      height={610}
                      width={600} />
                  </div>
                </li>

                <li className="how-it-work-info-list info-list2 flex items-center flex-row gap-[190px] lg:gap-[120px] md:flex-col-reverse md:mb-8">
                  <div className="how-it-work-info-cont w-full flex justify-end md:justify-start">
                    <div className="text-cont-box w-full max-w-[462px] relative">
                      <div className="info-num-icon absolute right-0 top-[-129px] md:w-[130px] sm:w-[60px] md:top-0 md:left-0 md:right-auto">
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
                  <div className="how-it-work-anim-cont w-full relative flex justify-end md:justify-center sm:mb-8">
                  <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: Animation2,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                      height={600}
                      width={650} />
                  </div>
                </li>

                <li className="how-it-work-info-list info-list3 flex items-center flex-row gap-[190px] lg:gap-[120px] md:flex-col-reverse md:mb-8">
                  <div className="how-it-work-info-cont w-full flex justify-end md:justify-start">
                    <div className="text-cont-box w-full max-w-[462px] relative">
                      <div className="info-num-icon absolute right-0 top-[-129px] md:w-[130px] sm:w-[60px]  md:top-0 md:left-0 md:right-auto">
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
                  <div className="how-it-work-anim-cont w-full relative flex justify-center mb-8">
                  <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: Animation3,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                      height={600}
                      width={750} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWork;
