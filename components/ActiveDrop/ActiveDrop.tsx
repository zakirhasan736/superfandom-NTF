import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';


const ActiveDrop: NextPage<any> = () => {
  return (
    <>
      <section className="active-drop-section w-full bg-primary pt-[142px] laptop-m:pt-[65px]  md:pt-8 pb-16 px-0 relative z-10  overflow-hidden">

        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-4">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-secondary laptop-x:text-6xl md:text-fig-40 uppercase">
              Active Drops
            </h2>
          </div>
        </div>

        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:pl-12 2xl:pr-12 xl:pl-12 xl:pr-12 lg:pl-8 lg:pr-8 md:px-0 sm:px-0">
          <div className="active-drop-content-wrapper px-28 py-[100px] sm:pb-8 w-full h-full bg-primary md:bg-secondary sm:rounded-0">
            <div className="active-drop-slidebox mb-16">
              <ul className="active-drop-slides-image flex no-wrap gap-5">
                <li className="active-drop-image-items w-[516px] h-[432px]">
                  <Image
                    src="/images/card-img-23.png"
                    alt="superfandom active-drop-image"
                    className="active-drop-image h-full w-full"
                    width="516px"
                    height="432px"
                  />
                </li>
                <li className="active-drop-image-items w-[516px] h-[432px]">
                  <Image
                    src="/images/card-img-24.png"
                    alt="superfandom active-drop-image"
                    className="active-drop-image h-full w-full"
                    width="516px"
                    height="432px"
                  />
                </li>
                <li className="active-drop-image-items w-[516px] h-[432px]">
                  <Image
                    src="/images/card-img-25.png"
                    alt="superfandom active-drop-image"
                    className="active-drop-image h-full w-full"
                    width="516px"
                    height="432px"
                  />
                </li>
              </ul>
            </div>
            <div className="active-drop-btn-box text-center flex justify-center sm:flex sm:flex-col sm:px-4">
              <Link href="/">
                <a className="p-5 max-w-[180px] w-full font-primary uppercase font-normal text-fig-15 text-primary rounded-[40px] bg-transparent border border-solid border-primary hover:bg-primary hover:text-secondary transition duration-150 ease-out md:border-primary md:text-primary md:hover:bg-primary md:hover:text-secondary">
                view all
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActiveDrop;
