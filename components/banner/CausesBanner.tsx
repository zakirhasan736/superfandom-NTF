import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export interface ICausesBanner {
  title?: string;
  subtitle?: string;
  desc?: string;
}
const CausesBanner: React.FC<ICausesBanner> = ({ title, subtitle, desc }) => {
  const [scroll, setscroll] = useState(false);
  const scrollHandler = () => {
    if (!scroll) {
      setscroll(true);
    }
  };
  window.addEventListener('scroll', scrollHandler);

  useEffect(() => {
    // banner scroll scale bg
    const imgSclTest = gsap.utils.toArray('.main-test-modal-bg.two');
    let viewPort = gsap.matchMedia();
    viewPort.add('(min-width:992px)', () => {
      gsap.fromTo(
        imgSclTest,
        { scaleY: 1, scaleX: 1, y: 160, x: 50 },
        {
          scaleX: 25,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: '.main-visual-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );
    }),
      viewPort.add('(min-width:768px)', () => {
        gsap.fromTo(
          imgSclTest,
          { scaleY: 1, scaleX: 0.76, y: 160, x: -50 },
          {
            scaleX: 25,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              trigger: '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );

        // modal text varying
        gsap.to('.modal-img-item.one', {
          scrollTrigger: {
            trigger: '.banner-modal-img.one',
            scrub: 0.5,
            start: 'top top',
            end: 'bottom top',
          },
          y: 180,
        });

        gsap.fromTo(
          '.modal-img-item.two',
          { y: 40 },
          {
            scrollTrigger: {
              trigger: '.banner-modal-img.two',
              scrub: 0.5,
              start: 'top top',
              end: 'bottom top',
            },
            y: -380,
          }
        );

        gsap.to('.modal-img-item.three', {
          scrollTrigger: {
            trigger: '.banner-modal-img.three',
            scrub: 0.5,
            start: 'top top',
            end: 'bottom top',
          },
          y: -180,
        });
      }),
      viewPort.add('(max-width:767px)', () => {
        gsap.fromTo(
          imgSclTest,
          { scaleY: 1, scaleX: 0.92, y: 0, x: 0 },
          {
            scaleX: 2,
            scaleY: 7,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              trigger: '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );

        // modal text varying
        gsap.to('.modal-img-item.one', {
          scrollTrigger: {
            trigger: '.banner-modal-img.one',
            scrub: 0.5,
            start: 'top top',
            end: 'bottom top',
          },
          y: 80,
          ease: 'none',
          force3D: true,
        });

        gsap.fromTo(
          '.modal-img-item.two',
          { y: 80 },
          {
            scrollTrigger: {
              trigger: '.banner-modal-img.two',
              scrub: 0.5,
              start: 'top top',
              end: 'bottom top',
            },
            y: -80,
          }
        );
      });
    // scroll text
    document.body.style.overflow = 'auto';
    const causesScrolled = gsap.utils.toArray('.scrolable-text-box');
    causesScrolled.forEach((section: any, index) => {
      const w = section.querySelector('.scroll-text-item');
      const [x, xEnd] =
        index % 2
          ? ['10%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            start: 'top +=850',
            end: () => '+=' + (w.scrollWidth - section.offsetWidth),
          },
        }
      );
    });
  }, [scroll]);

  return (
    <>
      <section className="main-visual-section bg-primary pt-[209px] md:pt-[180px] relative sm:pt-[150px] overflow-hidden">
        <div className="container lg:container md:container sm:container relative lg:px-9 md:px-7 sm:px-4 pb-[171px] laptop-x:pb-14 lg:pl-0">
          <div className="main-visual-wrapper flex items-center justify-between md:block pl-[112px] laptop-x:pl-[50px] laptop-m:pl-[32px] lg:pl-[28px] sm:pl-0">
            {/* ------------------- */}
            <div className="banner-text-cont-left text_animation text-animetion w-full relative z-50">
              {/* <div className="custom-container 2xl:px-0 xl:px-0 laptop-x:px-12 md:px-5 sm:px-4"></div> */}
              <div className="heading-title-box h-full w-full block">
                <h2 className="banner_title_animation active title_animation uppercase text-secondary banner-title mb-8 absolute top-0 left-0 z-30 text-fig-3x laptop-m:text-fig-xx sm:text-[40px] sm:leading-[40px] lg:text-[55px] sm:max-w-[360px] font-normal font-primary text-left">
                  Support Pakistani <br /> Flood Victims
                </h2>
              </div>

              <div className="banner-modal-imgbox w-full z-20 relative sm:flex sm:justify-center sm:pl-3 sm:p r-3">
                <ul className="modal-img-list flex gap-7 sm:gap-4 items-center justify-start sm:justify-center sm:left-0 sm:right-0 mr-28 desktop-l:mr-16 lg:mr-12 md:flex-row-reverse md:absolute md:top-[-45px] md:mr-0 mt-[271px] laptop-x:mt-[220px] md:mt-[170px] sm:top-0 sm:mt-[40px]">
                  <li className="modal-img-item one mt-[-190px]  md:mt-0 sm:w-[147px] sm:h-[200px] sm:mt-[80px] ">
                    <Image
                      src="/images/card-img-20.png "
                      alt="superfandom banner-modal-img"
                      className="banner-modal-img one"
                      width="274px"
                      height="373px"
                    />
                  </li>
                  <li className="modal-img-item two sm:w-[147px] sm:h-[200px] sm:mt-12 sm:ml-0">
                    <Image
                      src="/images/card-img-21.png"
                      alt="superfandom banner-modal-img"
                      className="banner-modal-img  two"
                      width="274px"
                      height="373px"
                    />
                  </li>
                  <li className="modal-img-item three mt-[-100px] md:mt-0 sm:mt-0 sm:w-[147px] sm:h-[200px] sm:hidden">
                    <Image
                      src="/images/card-img-22.png"
                      alt="superfandom banner-modal-img"
                      className="banner-modal-img  three"
                      width="274px"
                      height="373px"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* --------------- */}

            {/* ------------- */}
            <div className="banner-text-cont-right right-[155px] desktop-m:right-0 lg:right-[20px] md:right-0 w-[560px] relative z-50 mt-24  laptop-x:mt-16 md:mt-32 sm:mt-0 md:pt-[301px] sm:px-2 sm:pt-[395px]  md:w-full">
              <span className="md:hidden lg:text-6xl laptop-m:text-fig-xx overly-text-top overly-text-bottom font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-90 absolute right-[-175px] desktop-m:right-[-10px] lg:right-[-23px] bottom-[345px] laptop-x:bottom-[350px]">
                SBT
              </span>
              <h3 className="subtitle font-primary font-normal text-fig-32 text-left text-secondary uppercase mb-3 lg:text-[26px] md:text-fig-24">
                Mint soulbound tokens
              </h3>
              <p className="desc font-primary font-normal text-fig-base text-left text-secondary md:text-fig-base">
                Mint soulbound tokens and support Pakistani flood victims, the
                world’s largest population of climate refugees. Proceeds go to
                accredited organizations making a sustainable difference on the
                ground.
              </p>
              <div className="banner-btn-box text-left flex mt-8 md:hidden">
                <Link href="/">
                  <a className="py-5 px-5 lg:px-3 uppercase sm:text-xs font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary mr-3 hover:bg-neon hover:border-neon transition duration-150 ease-out">
                    Explore Causes
                  </a>
                </Link>
              </div>
            </div>
            {/* ------------ */}
          </div>
        </div>

        <div className="scroll-anim-text-wrapper  w-full z-10 relative md:mt-0 sm:h-[80px]">
          <div className="section-titlebox mb-0 ">
            <div className="scrolable-text-box">
              <div className="scroll-text-item"></div>
            </div>
            <div className="scrolable-text-box">
              <div className="scroll-text-item">
                <h2 className="section-title whitespace-nowrap scrollable--title2 font-primary font-normal text-fig-5x laptop-x:text-fig-3x text-center uppercase lg:text-fig-xx sm:text-fig-40 mb-[29px]">
                  soulbound•soulbound•soulbound•soulbound•soulbound•soulbound•soulbound•soulbound•soulbound•soulbound•soulbound
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="main-test-modal-bg two absolute top-0 left-0 w-full max-w-[910px] sm:top-0  sm:h-[400px] sm:mt-[340px]">
          <div className="scrolable-bg-shape  bg-shape absolute top-0 left-0 w-full sm:top-0  sm:h-[400px]">
            <img
              src="/images/bg-banner-shape2.png"
              alt="superfandom bg-shape"
              className="bg-shape-image w-full h-full"
              width="910px"
              height="918px"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CausesBanner;
