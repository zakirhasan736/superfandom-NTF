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
              <li className="text-img-siniped-info-list columns-2 gap-0 bg-primary">
                <div className="text-cont-box w-full py-[307px] px-[190px] bg-primary">
                  <h2 className="title  mb-6 font-primary font-normal text-fig-3x text-left text-secondary uppercase">
                    Soulbound <br /> Tokens for <br /> Causes
                  </h2>
                  <p className="desc font-primary font-normal text-fig-24 text-left text-secondary pb-6">
                    Donate to the causes you care about and collect nonfungible
                    or soulbound tokens to memorialize your support
                  </p>
                 <Link href="/">
                 <a
                    className="p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary hover:bg-transparent hover:text-secondary transition duration-150 ease-out"
                  >
                    Explore Causes
                  </a>
                 </Link>
                </div>

                <div className="text-img-siniped-anim-scroll w-full flex gap-x-12 h-[1080px] px-[50px]">

                <ul id="left-image" className="scroll-slides-card-left flex flex-col gap-y-12">
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
              </li>
              {/* ------------------------- */}

              {/* ----------------------- */}
              <li className="text-img-siniped-info-list columns-2 gap-0 bg-secondary">
                <div className="text-img-siniped-anim-scroll w-full flex gap-x-12 h-[1080px] px-[50px] bg-primary">

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
                  
                  <ul id="right-image-1" className="scroll-slides-card-right flex flex-col gap-y-12">
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

                <div className="text-cont-box w-full py-[307px] px-[190px] bg-secondary">
                  <h2 className="title  mb-6 font-primary font-normal text-fig-3x text-left text-primary uppercase">
                    Soulbound <br /> Tokens for <br /> Causes
                  </h2>
                  <p className="desc font-primary font-normal text-fig-24 text-left text-primary pb-6">
                    Donate to the causes you care about and collect nonfungible
                    or soulbound tokens to memorialize your support
                  </p>
                  <Link  href="/">
                  <a
                    className="p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-transparent border border-solid border-primary hover:bg-primary hover:text-secondary transition duration-150 ease-out"
                  >
                    Explore fandoms
                  </a>
                  </Link>
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
