import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export interface IBanner {
  title: string;
  subtitle: string;
  desc: string;
}

const Banner: React.FC<IBanner> = ({ title, subtitle, desc }) => {
  useEffect(() => {

    gsap.to('.main-visual-section', {
      scrollTrigger: {
        trigger: '.main-visual-section',
        scrub: true,
        start: 'top center',
        end: 'bottom 10px',
        toggleActions: 'restart pause reverse pause',
        toggleClass: 'active',
        ease: 'none',
      },
    });

    gsap.to('.modal-img-item', {
      scrollTrigger: {
        trigger: '.banner-modal-img',
        scrub: 0.5,
        start: 'top center',
        end: 'bottom +=200',
        ease: 'power2',
      },
      yPercent: -20,
    });

    const textPrl = gsap.utils.toArray('.banner_title_animation');
    gsap.fromTo(
      textPrl,
      { y: 0 },
      {
        y: -400,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          pin: true,
          trigger:  '.main-visual-section',
          start: 'top top',
          end: 'bottom top',
          //pinType: isTouch ? "fixed" : "transform",
          scrub: true,
        },
      }
    );

    const slidePrl = gsap.utils.toArray('.modal-img-item');
    gsap.fromTo(
      slidePrl,
      { y: 0 },
      {
        y: -300,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          pin: true,
          trigger:  '.main-visual-section',
          start: 'top top',
          end: 'bottom top',
          //pinType: isTouch ? "fixed" : "transform",
          scrub: true,
        },
      }
    );

    const images = gsap.utils.toArray('.main-visual-modal-bg');
    gsap.fromTo(
      images,
      { scale: 1 },
      {
        scale: 2,
        scaleY:4,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          pin: true,
          trigger: '.main-visual-section',
          start: 'top top',
          end: 'bottom top',
          //pinType: isTouch ? "fixed" : "transform",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="main-visual-section bg-primary pb-[51px] pt-[209px] relative sm:pt-[150px] overflow-hidden">
        <div className="container lg:container md:container sm:container relative lg:px-9 md:px-7 sm:px-4">
          <div className="main-visual-wrapper flex items-center justify-between md:block">
            {/* ------------------- */}
            <div className="banner-text-cont-left text_animation text-animetion w-full relative z-50">
              <div className="heading-title-box h-full w-full block">
                <h2 className="banner_title_animation active title_animation banner-title mb-[67px] absolute top-0 left-0 z-30">
                  <span className="overflow-hidden w-full h-full block leading-[132px] pb-2">
                    <span className="font-primary font-normal text-fig-5x text-left text-secondary uppercase  md:text-fig-xx sm:text-fig-40">
                      Collect
                    </span>{' '}
                  </span>
                  <br />
                  <span className="overflow-hidden w-full h-full block leading-[132px] pb-2">
                    <span className="font-primary md:block font-normal text-fig-5x text-left text-secondary uppercase laptop-x:text-[130px] laptop-x:leading-[100px] lg:text-[110px] lg:leading-[80px] md:text-fig-xx sm:text-fig-40">
                      life-changing
                    </span>{' '}
                  </span>
                  <br />
                  <span className="overflow-hidden w-full h-full block leading-[132px] pb-2">
                    <span className="font-primary md:block font-normal text-fig-5x text-left text-secondary uppercase laptop-x:text-[130px] laptop-m:leading-[100px] lg:text-[110px] lg:leading-[80px] md:text-fig-xx sm:text-fig-40">
                      NFTs
                    </span>
                  </span>
                </h2>
              </div>

              <div className="banner-modal-imgbox w-full z-20 relative">
                <ul className="modal-img-list flex gap-7 items-center justify-end mr-28 desktop-l:mr-16 lg:mr-12 md:flex-row-reverse md:absolute md:top-[-45px] md:mr-0">
                  <li className="modal-img-item mt-[320px] md:mt-0 md:w-[180px] sm:w-[146px] md:relative md:top-[-17px]">
                    <Image
                      src="/images/card-img-1.png"
                      alt="superfandom banner-modal-img"
                      className="banner-modal-img"
                      width="382px"
                      height="520px"
                    />
                  </li>
                  <li className="modal-img-item two md:w-[180px] sm:w-[146px] md:relative md:bottom-[-45px]">
                    <Image
                      src="/images/card-img-2.png"
                      alt="superfandom banner-modal-img"
                      className="banner-modal-img  two"
                      width="382px"
                      height="520px"
                    />
                  </li>
                </ul>
              </div>
              <span className="md:hidden overly-text-bottom z-30 font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-[-90deg] absolute left-0 top-[520px]">
                Nft
              </span>
            </div>
            {/* --------------- */}

            {/* ------------- */}
            <div className="banner-text-cont-right w-[560px] relative z-50 mt-24 mr-10 md:mt-32 md:pt-[206px] sm:pt-[166px] md:w-full">
              <span className="md:hidden overly-text-top overly-text-bottom font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-90 absolute right-0 bottom-[420px]">
                SBT
              </span>
              <h3 className="subtitle font-primary font-normal text-fig-32 text-left text-secondary uppercase mb-3 md:text-fig-24">
                Soulbound tokens and NFTs that make a difference
              </h3>
              <p className="desc font-primary font-normal text-fig-base text-left text-secondary md:text-fig-base">
                Participate in your cherished causes, or experience your
                favorite fandoms
              </p>
              <div className="banner-btn-box text-left flex mt-8">
                <Link href="/">
                  <a className="p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary mr-5 hover:bg-transparent hover:text-secondary transition duration-150 ease-out">
                    Explore Causes
                  </a>
                </Link>
                <Link href="/">
                  <a className="p-5 font-primary font-normal text-fig-15 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-secondary hover:text-primary transition duration-150 ease-out">
                    Explore Causes
                  </a>
                </Link>
              </div>
            </div>
            {/* ------------ */}
          </div>
          <div className="main-visual-modal-bg absolute bottom-[170px] left-0 w-full max-w-[1820px] right-0 ml-auto prallex3 mr-auto">
            <Image
              src="/images/banner-bg.png"
              alt="superfandom banner-bg"
              className="banner-bg "
              width="1820px"
              height="444px"
            />
          </div>
        </div>
            </div>

    </>
  );
};

export default Banner;
