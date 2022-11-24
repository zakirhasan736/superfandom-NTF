import React, { useEffect, useState , useLayoutEffect} from 'react';
import Slider from 'react-slick';
import { Settings } from "react-slick";
import Link from 'next/link';
import { NextPage } from 'next';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
      
    },
    {
      id: 2,
      photo_name: 'card-img-2.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 3,
      photo_name: 'card-img-3.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 4,
      photo_name: 'card-img-4.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 5,
      photo_name: 'card-img-5.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 6,
      photo_name: 'card-img-6.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 7,
      photo_name: 'card-img-7.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 8,
      photo_name: 'card-img-8.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
    },
    {
      id: 9,
      photo_name: 'card-img-9.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 10,
      photo_name: 'card-img-10.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
    },
    {
      id: 11,
      photo_name: 'card-img-11.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
    {
      id: 12,
      photo_name: 'card-img-12.png',
      Price: '320STX',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      userInfo: '@voice over',
      btnName: 'Buy Now',
      userPhoto: 'user-img.png',
      
    },
  ];

  useEffect(() => {
    const items = data
    setTokenItem(items);
  }, []);



useLayoutEffect(() => {
  const exploreAnim = gsap.context(() => {
  // Set starting params for sections
  let viewPort = gsap.matchMedia();
  viewPort.add("(min-width:768px)", () => {
    gsap.to('.explore-section', {
      scrollTrigger: {
        trigger: ".explore-section",
        scrub: true,
        start: "top top",
        end: "bottom -550px",
        markers: false,
        toggleClass: "active"
      }
  });

const animTextExplor = gsap.utils.toArray('.explore--title-box');
    gsap.set(animTextExplor, {
      y: 50,
      opacity: 0,
      duration: 25,
      ease: 'power3.out',
      overwrite: 'auto',

    });

    ScrollTrigger.create({
      trigger: '.explore-section',
      start: 'top 60%',
      end: 'bottom top',
      onEnter: () => gsap.to(animTextExplor, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }),
      onLeave: () => gsap.to(animTextExplor, {
        y: -50,
        opacity: 0,
        stagger: 0.2,
      }),
      onEnterBack: () => gsap.to(animTextExplor, {
        y: 0,
        opacity: 1,
        stagger: -0.2,
      }),
      onLeaveBack: () => gsap.to(animTextExplor, {
        y: 50,
        opacity: 0,
        stagger: -0.2,
      }),
    });
  })

  viewPort.add("(max-width:767px)", () => {
    const animTextExplor = gsap.utils.toArray('.explore--title-box');
    gsap.set(animTextExplor, {
      y: 0,
      opacity: 1,
      duration: 25,
      ease: 'power3.out',
      overwrite: 'auto',

    });

    ScrollTrigger.create({
      trigger: '.explore-section',
      start: 'top 60%',
      end: 'bottom top',
      onEnter: () => gsap.to(animTextExplor, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }),
      onLeave: () => gsap.to(animTextExplor, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }),
      onEnterBack: () => gsap.to(animTextExplor, {
        y: 0,
        opacity: 1,
        stagger: -0.2,
      }),
      onLeaveBack: () => gsap.to(animTextExplor, {
        y: 0,
        opacity: 1,
        stagger: -0.2,
      }),
    });
  })
  return () => {
    exploreAnim.revert();
  };
  });
  
  
}, []);


const slickSettings:Settings = {
  dots: false,
  infinite: false,
  slidesToShow: 12,
  slidesToScroll: 0,
  responsive: [
    {
      breakpoint: 5000,
      settings: 'unslick',
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        dots: false,
        variableWidth: true,
        // nav: false,
        centerMode: true,
        centerPadding: "10px",
      }
    }
  ]
};

  return (
    <>
      <section className="explore-section w-full bg-primary pt-[132px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10 sm:bg-secondary overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox explore--title-box text-animetion mb-16 md:mb-4">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-secondary laptop-x:text-6xl md:text-fig-40 uppercase sm:text-primary">
              Explore & collect
            </h2>
          </div>
        </div>

        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:pl-12 2xl:pr-12 xl:pl-12 xl:pr-12 lg:pl-8 lg:pr-8 md:px-0 sm:px-0">
          <div className="explore-content-wrapper pt-12 pb-[51px] md:pb-0 px-0 bg-primary md:bg-secondary sm:rounded-0 sm:pt-0">
            <div className="explore-slidebox mb-12 sm:mb-8 desktop-m:h-[505px] laptop-x:h-[461px] laptop-m:h-[510px] lg:h-[450px] md:h-[340px]">
              <ul className="slides-image-box">
              <Slider {...slickSettings}>
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
                  <li className="slide-image-items" key={id}>
                  <TokenCards
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
            </Slider>
              </ul>
            </div>
            <div className="explore-btn-box text-center flex justify-center sm:flex sm:flex-col sm:px-4">
              <Link href="/">
                <a className="p-5 font-primary uppercase font-normal text-fig-15 text-primary sm:mb-5 sm:mr-0 rounded-[40px] bg-secondary border border-solid border-secondary mr-5 hover:bg-neon hover:border-neon transition duration-150 ease-out md:bg-primary  md:text-secondary">
                  Explore Causes
                </a>
              </Link>
              <Link href="/">
                <a className="p-5 font-primary uppercase font-normal text-fig-15 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-purple hover:border-purple transition duration-150 ease-out md:border-primary md:text-primary ">
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
