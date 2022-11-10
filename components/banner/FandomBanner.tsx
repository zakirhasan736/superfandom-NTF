import React, { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'react-lottie';
import Animation1 from '../../public/lottie_files/Comp_1.json';
gsap.registerPlugin(ScrollTrigger);

export interface IFandomBanner {
  title?: string;
  subtitle?: string;
  desc?: string;
}

const FandomBanner: React.FC<IFandomBanner> = () => {
 
  useEffect(() => {
    
    // banner scroll scale bg
    const imgSclTest = gsap.utils.toArray('.main-test-modal-bg');
   
    let viewPort = gsap.matchMedia();
    viewPort.add("(min-width:768px)", () => {
      gsap.fromTo(
        imgSclTest,
        { scaleY: 1, scaleX: 1, y: 420 },
        {
          scaleX: 1.8,
          scaleY: 3.5,
          y:0,
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
    viewPort.add("(max-width:767px)", () => {
      gsap.fromTo(
        imgSclTest,
        { scaleY: 6, scaleX: .95, y: 300 },
        {
          scaleX: 5,
          scaleY: 15,
          y:0,
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

    // scroll text
    document.body.style.overflow = 'auto';
  const fandomScrolled =  gsap.utils.toArray('.scrolable-text-box');
  fandomScrolled.forEach((section: any, index) => {
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
            end: () => "+=" + (w.scrollWidth - section.offsetWidth),
          },
        }
      );
    });

  }, []);

  return (
    <>
      <section className="main-visual-section bg-primary pt-[274px] md:pt-56 sm:pt-40 relative overflow-hidden">
        <div className="custom-container lg:container md:container sm:container relative 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="main-visual-wrapper flex items-center justify-between md:block pb-[300px] laptop-m:pb-[200px] lg:pb-[160px] md:pb-16 relative">
            {/* ------------------- */}
            <div className="banner-text-cont-left text_animation w-full relative z-50">

               <div className="heading-title-box h-full w-full block">
                <h2 className="absolute md:relative md:text-left md:right-0 md:top-0 md:mb-0 right-[-277px] desktop-m:right-[-300px] laptop-m:right-[-350px] top-[108px] banner_title_animation uppercase text-secondary banner-title mb-8 z-30 text-fig-3x laptop-x:text-[80px] laptop-m:text-[65px] lg:text-[56px] sm:text-[40px] sm:leading-[40px] font-normal font-primary text-right">
                NFTs for Fandoms
                </h2>
              </div>

              <div className="banner-modal-imgbox lotties--anim w-full z-20 relative flex justify-start md:justify-center">
                 <div className="banner-anim-modal lottie-anim-modal md:max-w-[353px] sm:w-[253px] sm:h-[220px]">
                 <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: Animation1,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                      height={520}
                      width={505} 
                      />
                 </div>
              </div>
              
            </div>
            {/* --------------- */}

            {/* ------------- */}
            <div className="banner-text-cont-right w-[560px] lg:w-[590px] relative z-50 mt-52 md:mt-0 mr-10 desktop-m:mr-0  md:pt-0 sm:pt-[215px] lg:mr-0 sm:mr-[-35px] md:w-full">
              <span className="md:hidden lg:text-6xl overly-text-top overly-text-bottom font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-90 absolute bottom-[420px] right-[-90px] desktop-m:right-0">
              nft
              </span>
              <h3 className="subtitle font-primary font-normal text-fig-32 text-left text-secondary uppercase mb-3 md:text-fig-24">
              Mint Experience NFTs
              </h3>
              <p className="desc font-primary font-normal text-fig-base text-left text-secondary md:text-fig-base">
              Mint Experience NFTs of your favorite creators and have special experiences with them, including real-life or Metaverse meet ups, exclusive access, collabs, and much more!
              </p>
              <div className="banner-btn-box text-left flex mt-8 md:hidden">
                <Link href="/">
                  <a className="py-5 px-5 lg:px-3 uppercase sm:text-xs font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary mr-3 hover:bg-purple hover:border-purple transition duration-150 ease-out">
                  explore fandoms
                  </a>
                </Link>
                
              </div>
            </div>
            {/* ------------ */}
          </div>
          
        </div>

        <div className="scroll-anim-text-wrapper  w-full z-10 relative md:mt-0">
          <div className="section-titlebox md:mb-12">

          <div className="scrolable-text-box"> <div className="scroll-text-item"> <h2 className="section-title whitespace-nowrap scrollable--title"> </h2> </div> </div>

            <div className="scrolable-text-box">
              <div className="scroll-text-item">
                <h2 className="section-title whitespace-nowrap scrollable--title2 font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx md:text-fig-40 mb-[29px]">
                nft•fandoms•nft•fandoms•nft•fandoms•nft•fandoms•nft•fandoms•nft•fandoms•
                </h2>
              </div>
            </div>

          </div>
        </div>

        <div className="main-test-modal-bg absolute top-0 left-0 w-full max-w-[1820px] right-0 ml-auto mr-auto">
          <div className="scrolable-bg-shape bg-shape absolute top-0 left-0 w-full ">
            <img
              src="/images/banner-bg-img3.png"
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

export default FandomBanner;
