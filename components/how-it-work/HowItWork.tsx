import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImStarFull } from 'react-icons/im';
import  gsap  from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWork: NextPage<any> = ({}) => {

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

    gsap.utils.toArray('.how-it-work-info-items').forEach((section) => {
      const infoLine = section.querySelector('.how-it-work-info-list');
      gsap.to(infoLine, {
        scrollTrigger: { 
          trigger: section, 
          scrub: true,
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'restart pause reverse pause',
          toggleClass: 'active',
          ease: 'power2',
        },
        opacity: 1,
      });
  });

  ScrollTrigger.create({
    trigger: ".prallex2",
    pin: true,
    scrub: true,
    start: "center center",
    end: "+=800"
  });

});
useEffect(() => {
  gsap.utils.toArray('.how-it-work-info-list').forEach(section => {
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
});
  return (
    <>
      <section className="how-it-work-section relative w-full px-0 bg-primary  overflow-hidden">
        <div className="scrolable-bg-shape absolute top-0 left-0 w-full w-[100%] prallex2">
          <Image
            src="/images/how-it-work-bg.png"
            alt="superfandom bg-shape"
            className="bg-shape-image w-full h-full"
            width="1920px"
            height="1080px"
          />
        </div>
        <div className="how-it-work-wrapper pt-[60px] pb-[124px] w-full z-10 relative lg:pt-[80px] lg:pb-[80px] md:pt-8 md:pb-8">
          <div className="section-titlebox mb-24 lg:mb-15 sm:mb-5">
            <div className="scrolable-text-box">
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
                  <div className="text-count-item-box w-full relative md:flex md:justify-end md:max-w-[270px] md:w-full">
                    <div className="how-it-work-anim-img">
                      <Image
                        src="/images/card-img-6.png"
                        alt="superfandom anim-modal-img"
                        className="anim-modal-img"
                        width="382px"
                        height="520px"
                      />
                    </div>
                    <div className="how-it-work-anim-btn-box absolute bottom-0 left-0">
                    <Link href="/">
                    <a
                        className="anim-item-btn font-primary relative bottom-[161px] font-normal text-fig-15 text-center text-primary border border-solid border-primary bg-neon hover:bg-secondary uppercase p-5 w-[245px] block rounded-[40px] z-50"
                      >
                        mint now
                      </a>
                    </Link>
                      <div className="anim-hand-icon relative bottom-[161px]">
                        <Image
                          src="/images/icon/cursor-hand-svgrepo-com 2.png"
                          alt="superfandom anim-hand-icon"
                          className="anim-hand-icon"
                          width="36px"
                          height="36px"
                        />
                      </div>
                    </div>
                    </div>
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
                        Mint <br /> soulbound
                      </h2>
                      <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0 md:text-fig-base">
                        Mint soulbound tokens of the causes you care about
                      </p>
                      </div>
                    </div>
                  </div>

                  <div className="how-it-work-anim-cont w-full relative flex justify-end md:justify-center sm:mb-8">
                       <div className="text-count-items-box md:max-w-[320px] md:w-full relative">
                       <div className="how-it-work-anim-img relative md:max-w-[320px] md:w-full ">
                     <div className="how-it-work-mobo md:max-w-[320px] md:w-full relative z-50">
                     <Image
                        src="/images/card-mobo.png"
                        alt="superfandom anim-modal-img"
                        className="anim-modal-img"
                        width="389px"
                        height="601px"
                      />
                     </div>
                       <ul className="shadow-image-box absolute left-[-60px] top-0 w-full h-full">
                        <li className="shadow-image-item absolute left-[-105px] top-[-23px] w-full z-[-9 md:max-w-[270px] md:w-full">
                          <Image
                            src="/images/card-img-16.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                        <li className="shadow-image-item absolute w-full z-[-12] left-[-164px] top-[-64px] md:max-w-[270px] md:w-full">
                          <Image
                            src="/images/card-img-17.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                        <li className="shadow-image-item absolute w-full z-[-17] left-[-216px] top-[-107px] md:max-w-[270px] md:w-full">
                          <Image
                            src="/images/card-img-15.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="how-it-work-anim-btn-box absolute bottom-0 right-0">
                      <Link href="/">
                      <a
                        
                        className="anim-item-btn font-primary relative bottom-[131px] font-normal text-fig-15 text-center text-primary border border-solid border-primary bg-secondary hover:bg-neon uppercase p-5 w-[245px] block z-50 rounded-[40px]"
                      >
                        your collection
                      </a>
                      </Link>
                      <div className="anim-hand-icon relative bottom-[131px]">
                        <Image
                          src="/images/icon/cursor-hand-svgrepo-com 2.png"
                          alt="superfandom anim-hand-icon"
                          className="anim-hand-icon"
                          width="36px"
                          height="36px"
                        />
                      </div>
                    </div>
                       </div>
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
                        Mint <br /> soulbound
                      </h2>
                      <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0 md:text-fig-base">
                        Mint soulbound tokens of the causes you care about
                      </p>
                      </div>
                    </div>
                  </div>

                  <div className="how-it-work-anim-cont w-full relative flex justify-center mb-8">
                    <div className="text-cont-item-box md:max-w-[270px] md:w-full relative">
                    <div className="how-it-work-anim-img relative">
                      <div className="anim-items-img md:max-w-[270px] md:w-full">
                      <Image
                        src="/images/card-img-1.png"
                        alt="superfandom anim-modal-img"
                        className="anim-modal-img"
                        width="382px"
                        height="502px"
                      />
                      </div>
              
                      <ul className="shadow-image-box absolute left-0 top-0 w-full h-full">
                        <li className="shadow-image-item absolute left-[109px] top-[-37px] w-full z-[-9] md:max-w-[270px] md:w-full">
                          <Image
                            src="/images/card-img-11.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                        <li className="shadow-image-item absolute w-full z-[-12] left-[251px] top-[-76px] md:max-w-[270px] md:w-full">
                          <Image
                            src="/images/card-img-18.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="how-it-work-anim-btn-box absolute bottom-0 left-0">

                     <Link href="/">
                     <a
                        className="anim-item-btn font-primary relative bottom-[161px] font-normal flex items-center justify-between text-fig-24 text-center text-primary border border-solid border-primary bg-secondary uppercase py-5 px-[45px] w-[245px]  rounded-[40px]"
                      >
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                      </a>
                     </Link>
                    </div>
                    </div>
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
