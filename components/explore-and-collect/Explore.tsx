import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Explore: NextPage<any> = ({}) => {

  useEffect(() => {
    gsap.to('.explore-section', {
      scrollTrigger: {
        trigger: ".explore-section",
        scrub: true,
        start: "top 0px",
        end: "bottom -250px",
        toggleClass: "active",
        ease: 'none',
      }
    });
  });
  return (
    <>
      <section className="explore-section w-full bg-primary pt-[132px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-4">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-secondary laptop-x:text-6xl md:text-fig-40 uppercase">
              Explore & collect
            </h2>
          </div>
        </div>
        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:pl-12 2xl:pr-12 xl:pl-12 xl:pr-12 lg:pl-8 lg:pr-8 md:pl-5 md:pr-5 sm:pl-0 sm:pr-0">
          <div className="explore-content-wrapper pt-12 pb-[51px] sm:pb-8 px-0 bg-primary sm:bg-secondary">
            <div className="explore-slidebox mb-12">
              <ul className="slides-image-box flex no-wrap gap-5">
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-7.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-13.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-13.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-13.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-18.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-4.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-5.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
              </ul>
            </div>
            <div className="explore-btn-box text-center sm:flex sm:flex-col">
              <Link href="/">
                <a className="p-5 font-primary font-normal text-fig-15 text-primary sm:mb-5 sm:mr-0 rounded-[40px] bg-secondary border sm:hover:text-primary border-solid border-secondary mr-5 hover:bg-transparent hover:text-secondary transition duration-150 ease-out sm:bg-primary sm:hover:text-secondary sm:hover:border-primary sm:text-secondary">
                  Explore Causes
                </a>
              </Link>
              <Link href="/">
                <a className="p-5 font-primary font-normal text-fig-15 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-secondary hover:text-primary transition duration-150 ease-out sm:border-primary sm:text-primary sm:hover:bg-primary sm:hover:text-secondary">
                  Explore Causes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
