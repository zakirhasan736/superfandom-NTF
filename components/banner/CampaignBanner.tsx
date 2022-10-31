import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export interface ICampaignBanner {
  title: string;
  image: string;
  description: string;
}

const CampaignBanner: React.FC<ICampaignBanner> = ({
  title,
  description,
  image = '/images/banner-logo.png',
}) => {
  return (
    <>
      <section className="main-visual-section bg-secondary pt-44 relative overflow-hidden">
        <div className="container lg:container md:container sm:container relative lg:px-9 md:px-7 sm:px-4">
          <div className="banner-top-box h-[260px] relative">
            <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4 relative">
              <div className="banner-brand-logo w-[218px] h-[218px] absolute top-[140px]">
                <Image
                  src={image}
                  alt="superfandom banner-logo-image"
                  className="slide-image h-full w-full"
                  width="218px"
                  height="218px"
                />
              </div>
            </div>
          </div>
          <div className="banner-wrapper-box">
            <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4 relative">
              <div className="banner-content-text-box mt-32">
                <h2 className="title-box mb-8 relative font-primary font-normal text-fig-32 text-left text-primary uppercase max-w-[495px] w-full">
                  {title}
                  <span className="mark-icon absolute right-0 top-[-20px]">
                    <img
                      src="/images/icon/icon-mark.png"
                      width="28px"
                      height="28px"
                      alt=""
                    />
                  </span>
                </h2>
                <p className="banner-desc mb-8 max-w-[825px] w-full font-primary font-normal text-fig-base text-left text-primary">
                  {description}
                </p>
                <ul className="banner-socials-box flex items-center">
                  <li className="socials-items w-[32px] h-[32px] mr-8">
                    <Link href="/">
                      <Image
                        src="/images/icon/instagram-fill.png"
                        alt="superfandom socials-icon-image"
                        className="socials-icon-image h-full w-full"
                        width="32px"
                        height="32px"
                      />
                    </Link>
                  </li>
                  <li className="socials-items w-[32px] h-[32px] mr-0">
                    <Link href="/">
                      <Image
                        src="/images/icon/twitter-fill.png"
                        alt="superfandom socials-icon-image"
                        className="socials-icon-image h-full w-full"
                        width="32px"
                        height="32px"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignBanner;
