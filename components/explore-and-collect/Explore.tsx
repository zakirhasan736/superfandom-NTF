import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import gsap from 'gsap';
import TokenCards, {ITokenCards} from '../Card/TokenCards/TokenCards';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Explore: NextPage<any> = () => {
  const [tokenItem, setTokenItem] = useState<any>([]);
  let data = [
    {
      id: 1,
      photo_name: 'card-img-1.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
    {
      id: 2,
      photo_name: 'card-img-2.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
    {
      id: 3,
      photo_name: 'card-img-3.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'BID IN 6 HRS 25 MINS 36 SECS',
      // bidNowBg: 'neon',
      
    },
    {
      id: 4,
      photo_name: 'card-img-4.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
    {
      id: 5,
      photo_name: 'card-img-5.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'BID IN 6 HRS 25 MINS 36 SECS',
      // bidNowBg: 'neon',
      
    },
    {
      id: 6,
      photo_name: 'card-img-6.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
    {
      id: 7,
      photo_name: 'card-img-7.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
    {
      id: 8,
      photo_name: 'card-img-8.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
    },
    {
      id: 9,
      photo_name: 'card-img-9.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
    {
      id: 10,
      photo_name: 'card-img-10.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
    },
    {
      id: 11,
      photo_name: 'card-img-11.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
    {
      id: 12,
      photo_name: 'card-img-12.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      // bidNow: 'Bid Now',
      // bidNowBg: 'white',
      
    },
  ];

  useEffect(() => {
    const items = data
    setTokenItem(items);
  }, []);

  useEffect(() => {

    gsap.to('.explore-section', {
      scrollTrigger: {
        trigger: ".explore-section",
        scrub: true,
        start: "top 0px",
        end: "bottom -250px",
        toggleClass: "active"
      }
  });

}, []);
  return (
    <>
      <section className="explore-section w-full bg-primary pt-[132px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-4">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-secondary laptop-x:text-6xl md:text-fig-40 uppercase">
              Explore & collect
            </h2>
          </div>
        </div>
        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:pl-12 2xl:pr-12 xl:pl-12 xl:pr-12 lg:pl-8 lg:pr-8 md:px-0 sm:px-0">
          <div className="explore-content-wrapper pt-12 pb-[51px] sm:pb-8 px-0 bg-primary md:bg-secondary sm:rounded-0">
            <div className="explore-slidebox mb-12">
              <ul className="slides-image-box flex no-wrap gap-5">
              
                {tokenItem.map(
                ({
                  id,
                  photo_name,
                  userPhoto,
                  Price,
                  desc,
                  userInfo,
                  btnName,
                }: ITokenCards) => (
                  <li className="slide-image-items w-[382px] h-[520px]">
                  <TokenCards
                    key={id}
                    id={id}
                    photo_name={photo_name}
                    Price={Price}
                    desc={desc}
                    userInfo={userInfo}
                    btnName={btnName}
                    userPhoto={userPhoto}
                  />
                  </li>
                )
              )}
              </ul>
            </div>
            <div className="explore-btn-box text-center flex justify-center sm:flex sm:flex-col sm:px-4">
              <Link href="/">
                <a className="p-5 font-primary uppercase font-normal text-fig-15 text-primary sm:mb-5 sm:mr-0 rounded-[40px] bg-secondary border md:hover:text-primary border-solid border-secondary mr-5 hover:bg-transparent hover:text-secondary transition duration-150 ease-out md:bg-primary md:hover:text-primary md:hover:border-primary md:text-secondary">
                  Explore Causes
                </a>
              </Link>
              <Link href="/">
                <a className="p-5 font-primary uppercase font-normal text-fig-15 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-secondary hover:text-primary transition duration-150 ease-out md:border-primary md:text-primary md:hover:bg-primary md:hover:text-secondary">
                Explore fandoms
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
