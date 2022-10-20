import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explore: NextPage<any> = ({}) => {

  useEffect(() => {
    gsap.fromTo(".slides-image-box", 
      {
      duration: 4, 
      x: 50, 
      ease: "none", 
    },{
      duration: 4, 
      x: -50, 
      ease: "none", 
    }
  );
// gsap.to(".slides-image-box",{
//   keyframes:[
//     {x:0},
//     {x:0}
//   ],
//   repeat: -1,
//   duration:10
// })
  },[]);
  return (
    <>
      <section className="explore-section w-full bg-secondary pt-[132px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-4">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-primary laptop-x:text-6xl md:text-fig-40 uppercase">
              Explore & collect
      </h2>
         
          </div>
        </div>
        <div className="container 2xl:container xl:container lg:container md:container sm:container">
          <div className="explore-content-wrapper pt-12 pb-[51px] px-0 bg-primary">
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
            <div className="explore-btn-box text-center">
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
        </div>
      </section>
    </>
  );
};

export default Explore;
