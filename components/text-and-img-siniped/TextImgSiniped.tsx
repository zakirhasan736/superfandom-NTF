import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TextImgSiniped: NextPage<any> = ({}) => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);

    gsap.utils.toArray('.scroll-image-box').forEach((section, index) => {
      const w = section.querySelector('ul.anim-card-scroll');
      const [y, yEnd] =
        index % 2
          ? ['100%', (w.scrollHeight - section.offsetHeight) * -1]
          : [w.scrollHeight * -1, 0];
      gsap.fromTo(
        w,
        { y },
        {
          y: yEnd,
          scrollTrigger: {
            trigger: section,
            toggleActions: 'restart pause reverse pause',
            scrub: 0.5,
          },
        }
      );
    });


  }, []);

  useEffect(() => {
    gsap.utils.toArray('.text-img-siniped-info-list').forEach(section => {
      const elems = section.querySelectorAll('.siniped-text-box');
      // Set starting params for sections
      ScrollTrigger.matchMedia({
        "min-width:992px": function(){
          gsap.set(elems, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        },
        "min-width:991px": function(){
          gsap.set(elems, {
            y: 90,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      });
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
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
      <section className="text-img-siniped-section relative w-full px-0 bg-primary  overflow-hidden">
        <div className="text-img-siniped-wrapper w-full z-10">
          <div className="text-img-siniped-cont-wrapper">
            <ul className="text-img-siniped-info-items">
              {/* ------------------------ */}
              <li className="text-img-siniped-info-list columns-2 gap-0 bg-primary md:columns-1 border-t border-solid border-primary">
                <div className="text-cont-box w-full py-[307px] px-[190px] bg-primary  max-h-[1080px] h-full laptop-x:px-[80px] laptop-m:max-h-[800px] laptop-m:py-[210px] lg:px-[60px] md:py-8 md:px-6 sm:px-4">
                  <div className="siniped-text-box">
                    <h2 className="title  mb-6 font-primary font-normal text-fig-3x text-left text-secondary uppercase desktop-l:text-7xl desktop-m:text-6xl md:text-fig-40">
                      Soulbound <br /> Tokens for <br /> Causes
                    </h2>
                    <p className="desc font-primary font-normal text-fig-24 text-left text-secondary pb-6 desktop-m:text-xl md:text-fig-4">
                      Donate to the causes you care about and collect
                      nonfungible or soulbound tokens to memorialize your
                      support
                    </p>
                    <Link href="/">
                      <a className="link-buttons uppercase flex flex-col max-w-[190px] text-center w-full  p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary hover:bg-transparent hover:text-secondary transition duration-150 ease-out">
                        Explore Causes
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="text-img-siniped-anim-scroll overflow-hidden  w-full flex gap-x-12  max-h-[1080px] h-full px-[50px] md:hidden laptop-m:max-h-[800px]">
                  <div className="scroll-image-box">
                    <ul  id="left-image" className="scroll-slides-card-left anim-card-scroll flex flex-col gap-y-12">
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
                  </div>

                  <div className="scroll-image-box">
                    <ul
                      id="right-image"
                      className="scroll-slides-card-right anim-card-scroll flex flex-col gap-y-12"
                    >
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
                  </div>
                </div>
              </li>
              {/* ------------------------- */}

              {/* ----------------------- */}
              <li className="text-img-siniped-info-list info-list2 columns-2 gap-0 bg-secondary md:columns-1 border-t border-b border-solid border-primary">
                <div className="text-img-siniped-anim-scroll overflow-hidden w-full flex gap-x-12 max-h-[1080px] px-[50px] bg-primary h-full md:hidden laptop-m:max-h-[800px]">
                  <div className="scroll-image-box">
                    <ul
                      id="left-image-1"
                      className="scroll-slides-card-left anim-card-scroll flex flex-col gap-y-12"
                    >
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
                  </div>

                  <div className="scroll-image-box">
                    <ul
                      id="right-image-1"
                      className="scroll-slides-card-right anim-card-scroll flex flex-col gap-y-12"
                    >
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
                </div>

                <div className="text-cont-box w-full py-[307px] px-[190px] bg-secondary max-h-[1080px] h-full laptop-x:px-[80px] laptop-m:max-h-[800px] laptop-m:py-[210px] lg:px-[60px] md:py-8 md:px-6 sm:px-4">
                  <div className="siniped-text-box">
                    <h2 className="title  mb-6 font-primary font-normal text-fig-3x text-left text-primary uppercase desktop-l:text-7xl desktop-m:text-6xl md:text-fig-40">
                    Experience <br /> NFTs for <br /> Fandoms
                    </h2>
                    <p className="desc font-primary font-normal text-fig-24 text-left text-primary pb-6 desktop-m:text-xl md:text-fig-4">
                    Support your favorite creators and interact with them both in the real world or in the Metaverse
                    </p>
                    <Link href="/">
                      <a className=" uppercase flex flex-col max-w-[190px] text-center w-full p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-transparent border border-solid border-primary hover:bg-primary hover:text-secondary transition duration-150 ease-out">
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
