import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export interface ICampaignBanner {
  title?: string;
  subtitle?: string;
  desc?: string;
}

const CampaignBanner: React.FC<ICampaignBanner> = () => {
  return (
    <>
      <section className="main-visual-section bg-secondary pt-44 md:pt-36 sm:pt-32 relative overflow-hidden">
        <div className="container lg:container md:container sm:container relative lg:px-9 md:px-7 sm:px-4">
          <div className="banner-top-box h-[260px] relative rounded-3xl md:h-[100px]">
            <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4 relative">
              <div className="brand-logo-wrap relative md:w-24 md:h-24 md:mr-auto md:ml-auto">
                <div className="banner-brand-logo w-[218px] h-[218px] md:w-24 md:h-24 overflow-hidden rounded-[100%] border-[10px] md:border-[5px] sm:border-[2px] border-solid border-secondary absolute top-[140px] md:top-[52px] md:left-0 md:right-0 md:mr-auto md:ml-auto">
                  <Image
                    src="/images/exclusive-img-1.png"
                    alt="superfandom banner-logo-image"
                    className="slide-image h-full w-full"
                    width="218px"
                    height="218px"
                    objectFit="cover"
                  />
                </div>
                <span className="mark-icon absolute right-0 top-14 hidden md:block">
                  <img
                    src="/images/icon-mark.png"
                    width="28px"
                    height="28px"
                    alt="mark-icon"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="banner-wrapper-box">
            <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4 relative">
              <div className="banner-content-text-box mt-32 md:mt-16">
                <h2 className="title-box mb-8 relative font-primary font-normal text-fig-32 text-left text-primary uppercase max-w-[495px] w-full md:mb-2 md:text-fig-15 md:text-center md:max-w-full">
                  Doctors Without Borders{' '}
                  <span className="mark-icon absolute right-0 top-[-20px] md:hidden">
                    <img
                      src="/images/icon-mark.png"
                      width="28px"
                      height="28px"
                      alt="mark-icon"
                    />
                  </span>
                </h2>
                <p className="banner-desc mb-8 max-w-[825px] w-full font-primary font-normal text-fig-base text-left text-primary md:mb-2 md:text-fig-xs">
                  Médecins Sans Frontières, or Doctors Without Borders in
                  English, is an international humanitarian medical
                  non-governmental organisation of French origin best known for
                  its projects in conflict zones and in countries affected by
                  endemic diseases.
                </p>
                <ul className="banner-socials-box flex items-center md:justify-center">
                  <li className="socials-items w-[32px] h-[32px] mr-8">
                    <Link href="/">
                      <Image
                        src="/images/instagram-fill.png"
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
                        src="/images/twitter-fill.png"
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
