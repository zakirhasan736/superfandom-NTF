import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import  Link from 'next/link';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TextImgSiniped: NextPage<any> = ({}) => {

  useEffect(() => {
    gsap.to("#left-image", {
      scrollTrigger: {
        trigger: ".text-img-siniped-section",
        toggleActions: 'restart none none none'
      },
      y: -170,
      duration: 5
    })
    gsap.to("#right-image", {
      scrollTrigger: {
        trigger: ".text-img-siniped-section",
        toggleActions: 'restart none none none'
      },
      y: 170,
      duration: 5
    })
    gsap.to("#left-image-1", {
      scrollTrigger: {
        trigger: ".columns-2",
        toggleActions: 'restart none none none'
      },
      y: -170,
      duration: 5
    })
    gsap.to("#right-image-1", {
      scrollTrigger: {
        trigger: ".columns-2",
        toggleActions: 'restart none none none'
      },
      y: 170,
      duration: 5
    })
  }, [])
  return (
    <>
      <section className="text-img-siniped-section relative w-full px-0 bg-primary">
        <div className="text-img-siniped-wrapper w-full z-10">
          <div className="text-img-siniped-cont-wrapper">
            <ul className="text-img-siniped-info-items">
              {/* ------------------------ */}
              <li className="text-img-siniped-info-list columns-2 gap-0 bg-primary md:columns-1">
                <div className="text-cont-box w-full py-[307px] px-[190px] bg-primary  max-h-[1080px] h-full laptop-x:px-[80px] laptop-m:max-h-[800px] laptop-m:py-[210px] lg:px-[60px] md:py-8 md:px-6 sm:px-4">
                  <div className="siniped-text-box">
                  <h2 className="title  mb-6 font-primary font-normal text-fig-3x text-left text-secondary uppercase desktop-l:text-7xl desktop-m:text-6xl md:text-fig-40">
                    Soulbound <br /> Tokens for <br /> Causes
                  </h2>
                  <p className="desc font-primary font-normal text-fig-24 text-left text-secondary pb-6 desktop-m:text-xl md:text-fig-4">
                    Donate to the causes you care about and collect nonfungible
                    or soulbound tokens to memorialize your support
                  </p>
<<<<<<< HEAD
                  <a
                    href="/"
=======
                 <Link href="/">
                 <a
>>>>>>> 03cef8e2515c7111ebc956eb1c1b460c0692c5b8
                    className="p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary hover:bg-transparent hover:text-secondary transition duration-150 ease-out"
                  >
                    Explore Causes
                  </a>
<<<<<<< HEAD
=======
                 </Link>
>>>>>>> 03cef8e2515c7111ebc956eb1c1b460c0692c5b8
                </div>

                <div className="text-img-siniped-anim-scroll w-full flex gap-x-12  max-h-[1080px] h-full px-[50px] md:hidden laptop-m:max-h-[800px]">

<<<<<<< HEAD
                <ul className="scroll-slides-card-left flex flex-col gap-y-12">
=======

                <ul id="left-image" className="scroll-slides-card-left flex flex-col gap-y-12">

>>>>>>> 03cef8e2515c7111ebc956eb1c1b460c0692c5b8
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-15.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-14.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-13.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-13.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-13.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                  </ul>
                  <ul id="right-image" className="scroll-slides-card-right flex flex-col gap-y-12">
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-12.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-11.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-10.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                  </ul>

                </div>
                </div>
              </li>
              {/* ------------------------- */}

              {/* ----------------------- */}
              <li className="text-img-siniped-info-list columns-2 gap-0 bg-secondary md:columns-1">
                <div className="text-img-siniped-anim-scroll w-full flex gap-x-12 max-h-[1080px] px-[50px] bg-primary h-full md:hidden laptop-m:max-h-[800px]">

                  <ul id="left-image-1" className="scroll-slides-card-left flex flex-col gap-y-12">
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-4.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-5.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-6.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                  </ul>
                  
<<<<<<< HEAD
                  <ul className="scroll-slides-card-right flex flex-col gap-y-12">
=======

                  <ul id="right-image-1" className="scroll-slides-card-right flex flex-col gap-y-12">

>>>>>>> 03cef8e2515c7111ebc956eb1c1b460c0692c5b8
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-7.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-8.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                    <li className="slides-card-items h-[520px] w-[382px]">
                      <Image
                        src="/images/card-img-9.png"
                        alt="superfandom slides-card-img"
                        className="slides-card-img "
                        width="382px"
                        height="520px"
                        
                      />
                    </li>
                  </ul>

                </div>

                <div className="text-cont-box w-full py-[307px] px-[190px] bg-secondary max-h-[1080px] h-full laptop-x:px-[80px] laptop-m:max-h-[800px] laptop-m:py-[210px] lg:px-[60px] md:py-8 md:px-6 sm:px-4">
                <div className="siniped-text-box">
                  <h2 className="title  mb-6 font-primary font-normal text-fig-3x text-left text-primary uppercase desktop-l:text-7xl desktop-m:text-6xl md:text-fig-40">
                    Soulbound <br /> Tokens for <br /> Causes
                  </h2>
                  <p className="desc font-primary font-normal text-fig-24 text-left text-primary pb-6 desktop-m:text-xl md:text-fig-4">
                    Donate to the causes you care about and collect nonfungible
                    or soulbound tokens to memorialize your support
                  </p>
                  <Link  href="/">
                  <a
<<<<<<< HEAD
                    href="/"
                    className="p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-transparent border border-solid border-primary hover:bg-primary hover:text-secondary transition duration-150 ease-out"
=======

                    className="p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-transparent border border-solid border-primary hover:bg-primary hover:text-secondary transition duration-150 ease-out"

>>>>>>> 03cef8e2515c7111ebc956eb1c1b460c0692c5b8
                  >
                    Explore fandoms
                  </a>
                  </Link>
                </div>
                </div>
              </li>
              {/* -------------------------- */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextImgSiniped;
