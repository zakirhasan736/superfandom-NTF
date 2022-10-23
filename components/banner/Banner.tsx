import Image from 'next/image';
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import ScrollAnimText from '../scroll-anim-text/ScrollAnimText';
gsap.registerPlugin(ScrollTrigger);

export interface IBanner {
  title: string;
  subtitle: string;
  desc: string;
}

const Banner: React.FC<IBanner> = ({ title, subtitle, desc }) => {
  const [scroll, setscroll] = useState(false);
  const scrollHandler = () => {
      if (!scroll) {
          setscroll(true);
      }
  }
  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    gsap.to('.modal-img-item.two', {
      scrollTrigger: {
        trigger: '.banner-modal-img.two',
        scrub: 0.5,
        start: 'top center',
        end: 'bottom +=200'
      },
      yPercent: -20,
    });
  
    const textPrl = gsap.utils.toArray('.banner_title_animation');
    gsap.fromTo(
      textPrl,
      { y: 0 },
      {
        y: -100,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          pin: true,
          trigger:  '.main-visual-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    const slidePrl = gsap.utils.toArray('.modal-img-item');
    const imgSclTest = gsap.utils.toArray('.main-test-modal-bg');
    const textAnim = gsap.utils.toArray('.banner_title_animation > span > span');
    document.body.style.overflow = 'auto';
    // document.scrollingElement.scrollTo(0, 0);
    ScrollTrigger.matchMedia({
      "(min-width:800px)": function(){
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
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imgSclTest,
          { scaleY: .4, scaleX: 1, y:320, },
          {
            scaleX: 2.5,
            scaleY:2,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              pin: true,
              trigger: '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          textAnim,
          {
            translateY: '0%',
            opacity: 1,
          },
          {
            translateY: '200%',
            ease: 'power3',
            force3D: true,
            duration: 1,
            scrollTrigger: {
              pin: true,
              trigger: '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );

        gsap.utils.toArray('.scrolable-text-box').forEach((section:any, index) => {
          const w = section.querySelector('.scroll-text-item');
          const [x, xEnd] = (index % 2) ? ['10%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
          gsap.fromTo(w, {  x  }, {
            x: xEnd,
            scrollTrigger: { 
              trigger: section, 
              scrub: 0.5 ,
              start: 'top 300px',
              end: 'bottom top',
            },
            
          });
        });


      },
      "(max-width:799px)": function(){
        gsap.fromTo(
          slidePrl,
          { y: 200 },
          {
            y: -100,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              pin: true,
              trigger:  '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imgSclTest,
          { scaleY: 1, scaleX: 1, y:430, }, 
          {
            scaleX: 2.5,
            scaleY:3,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              pin: true,
              trigger: '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );
        
      gsap.fromTo(
        textAnim,
        {
          translateY: '-20%',
          opacity: 1,
          
        },
        {
          translateY: '200%',
          y: 60,
          ease: 'power3',
          force3D: true,
          duration: 1,
          scrollTrigger: {
            pin: true,
            trigger: '.main-visual-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );

      gsap.utils.toArray('.scrolable-text-box').forEach((section:any, index) => {
        const w = section.querySelector('.scroll-text-item');
        const [x, xEnd] = (index % 2) ? ['10%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          y: 100,
          scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 ,
            start: 'top 300px',
            end: 'bottom top',
          },
          
        });
      });
      
      },
      "(max-width:460px)": function(){

        gsap.fromTo(
          imgSclTest,
          { scaleY: 5, scaleX: 1, y:530, }, 
          {
            scaleX: 2.5,
            scaleY:25,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              pin: true,
              trigger: '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          slidePrl,
          { y: 250 },
          {
            y: 0,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              pin: true,
              trigger:  '.main-visual-section',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );

        gsap.utils.toArray('.scrolable-text-box').forEach((section:any, index) => {
          const w = section.querySelector('.scroll-text-item');
          const [x, xEnd] = (index % 2) ? ['10%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
          gsap.fromTo(w, {  x , marginTop:30, }, {
            x: xEnd,
            marginTop: 30,
            y:  0,
            scrollTrigger: { 
              trigger: section, 
              scrub: 0.5 ,
              start: 'top 300px',
              end: 'bottom top',
            },
            
          });
        });

      }

    })
  }, [scroll]);

  return (
    <>
      <section className="main-visual-section bg-primary pb-[51px] pt-[209px] relative sm:pt-[150px] overflow-hidden">
        <div className="container lg:container md:container sm:container relative lg:px-9 md:px-7 sm:px-4">
          <div className="main-visual-wrapper flex items-center justify-between md:block">
            {/* ------------------- */}
            <div className="banner-text-cont-left text_animation text-animetion w-full relative z-50">
              <div className="heading-title-box h-full w-full block">
                <h2 className="banner_title_animation active title_animation banner-title mb-[67px] absolute top-0 left-0 z-30">
                  <span className="overflow-hidden w-full h-full block leading-[132px] pb-2">
                    <span className="font-primary font-normal text-fig-5x text-left text-secondary uppercase  laptop-x:text-[130px] laptop-x:leading-[100px] lg:text-[110px] lg:leading-[80px] md:text-fig-xx sm:text-fig-40">
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
              <span className="md:hidden lg:text-6xl overly-text-bottom z-30 font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-[-90deg] absolute left-0 top-[520px]">
                Nft
              </span>
            </div>
            {/* --------------- */}

            {/* ------------- */}
            <div className="banner-text-cont-right w-[560px] relative z-50 mt-24 mr-10 md:mt-32 md:pt-[301px] sm:pt-[310px] lg:mr-0 sm:mr-[-35px] md:w-full">
              <span className="md:hidden lg:text-6xl overly-text-top overly-text-bottom font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-90 absolute right-0 bottom-[420px]">
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
                  <a className="py-5 px-5 lg:px-3 uppercase sm:text-xs font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary mr-3 hover:bg-transparent hover:text-secondary transition duration-150 ease-out">
                    Explore Causes
                  </a>
                </Link>
                <Link href="/">
                  <a className="py-5 px-5 lg:px-3 uppercase sm:text-xs font-primary font-normal text-fig-15 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-secondary hover:text-primary transition duration-150 ease-out">
                  explore fandoms
                  </a>
                </Link>
              </div>
            </div>
            {/* ------------ */}
          </div>
          {/* <div className="main-visual-modal-bg absolute bottom-[170px] left-0 w-full max-w-[1820px] right-0 ml-auto prallex3 mr-auto">
            <Image
              src="/images/banner-bg.png"
              alt="superfandom banner-bg"
              className="banner-bg "
              width="1820px"
              height="444px"
            />
          </div> */}
        </div>

        <div className="scroll-anim-text-wrapper  w-full z-10 relative mt-[-130px] md:mt-0 sm:h-[210px] h-[456px]">
          <div className="section-titlebox mb-24 md:mb-12">
            <div className="scrolable-text-box">
            <div className="scroll-text-item">
            <h2 className="section-title whitespace-nowrap scrollable--title font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx md:text-fig-40 mb-[29px]">
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
            <h2 className="section-title whitespace-nowrap scrollable--title2 font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx md:text-fig-xx sm:text-fig-32 mb-[29px] md:mb-[14px]">
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
            <h2 className="section-title whitespace-nowrap scrollable--title font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx md:text-fig-xx sm:text-fig-32 mb-0">
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

        <div className="main-test-modal-bg absolute top-0 left-0 w-full max-w-[1820px] right-0 ml-auto mr-auto">
            <Image
              src="/images/banner-bg.png"
              alt="superfandom banner-bg"
              className="banner-bg "
              width="1820px"
              height="444px"
            />
            <div className="scrolable-bg-shape bg-shape absolute top-0 left-0 w-full sm:h-full">
          <img
            src="/images/how-it-work-bg.png"
            alt="superfandom bg-shape"
            className="bg-shape-image w-full h-full"
            width="1920px"
            height="556px"
          />
          </div>
          </div>
            </section>

    </>
  );
};

export default Banner;
