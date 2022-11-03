import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TokenCards, {ITokenCards} from '../Card/TokenCards/TokenCards';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export interface IBanner {
  title?: string;
  subtitle?: string;
  desc?: string;
}

const Banner: React.FC<IBanner> = ({ title, subtitle, desc }) => {
  const [tokenItem, setTokenItem] = useState<any>([]);
  const [scroll, setscroll] = useState(false);

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
      
    }
  ];

  useEffect(() => {
    const items = data
    setTokenItem(items);
  }, []);


  const scrollHandler = () => {
    if (!scroll) {
      setscroll(true);
    }
  };
  window.addEventListener('scroll', scrollHandler);

  useEffect(() => {
    
    // modal text varying 
    gsap.to('.modal-img-item', {
      scrollTrigger: {
        trigger: '.banner-modal-img.two',
        scrub: 0.5,
        start: 'top center',
        end: 'bottom +=200'
      },
      yPercent: -20,
    });
    
    // banner scroll scale bg
    const imgSclTest = gsap.utils.toArray('.main-test-modal-bg');
    let viewPort = gsap.matchMedia();
    viewPort.add("(min-width:768px)", () => {
      gsap.fromTo(
        imgSclTest,
        { scaleY: 0.4, scaleX: 1, y: 320 },
        {
          scaleX: 2.5,
          scaleY: 5,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: '.main-visual-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );
    }),
    viewPort.add("(max-width:767px)", () => {
      gsap.fromTo(
        imgSclTest,
        { scaleY: 5, scaleX: 1, y: 510 },
        {
          scaleX: 2.5,
          scaleY: 50,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: '.main-visual-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );
    })
    // banner modal images
    const slidePrl = gsap.utils.toArray('.modal-img-item');
    gsap.fromTo(
      slidePrl,
      { y: 0 },
      {
        y: -400,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: '.main-visual-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // animated title
    const textAnim = gsap.utils.toArray(
      '.banner_title_animation > span > span'
    );
    gsap.fromTo(
      textAnim,
      {
        translateY: '0%',
        opacity: 1,
      },
      {
        translateY: '200%',
        ease: 'power3',
        force3D: true,
        duration: 1,
        scrollTrigger: {
          trigger: '.main-visual-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );

    // scroll text
    document.body.style.overflow = 'auto';
   const bannerScrolled = gsap.utils.toArray('.scrolable-text-box');
   bannerScrolled.forEach((section: any, index) => {
      const w = section.querySelector('.scroll-text-item');
      const [x, xEnd] =
        index % 2
          ? ['10%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            start: 'top +=850',
            end: () => "+=" + (w.scrollWidth - section.offsetWidth),
          },
        }
      );
    });

  }, [scroll]);

  return (
    <>
      <section className="main-visual-section main-banner--one bg-primary pb-[51px] pt-[209px] relative sm:pt-[150px] overflow-hidden">
        <div className="container lg:container md:container sm:container relative lg:px-9 md:px-7 sm:px-4">
          <div className="main-visual-wrapper flex items-center justify-between md:block">
            {/* ------------------- */}
            <div className="banner-text-cont-left text_animation text-animetion w-full relative z-50">
              <div className="heading-title-box h-full w-full block">
                <h2 className="banner_title_animation active title_animation banner-title mb-[67px] absolute top-0 left-0 z-30">
                  <span className="overflow-hidden w-full h-full block">
                    <span className="leading-[155px] font-primary font-normal text-fig-5x text-left text-secondary uppercase  laptop-x:text-[130px] laptop-x:leading-[130px] lg:text-[110px] lg:leading-[100px] md:text-fig-xx sm:text-fig-40">
                      Collect
                    </span>{' '}
                  </span>
                  <span className="overflow-hidden w-full h-full block">
                    <span className="leading-[155px] font-primary md:block font-normal text-fig-5x text-left text-secondary uppercase laptop-x:text-[130px] laptop-x:leading-[130px] lg:text-[110px] lg:leading-[100px] md:text-fig-xx sm:text-fig-40">
                      life-changing
                    </span>{' '}
                  </span>
                  <span className="overflow-hidden w-full h-full block">
                    <span className="leading-[155px] font-primary md:block font-normal text-fig-5x text-left text-secondary uppercase laptop-x:text-[130px] laptop-x:leading-[130px] lg:text-[110px] lg:leading-[100px] md:text-fig-xx sm:text-fig-40">
                      NFTs
                    </span>
                  </span>
                </h2>
              </div>

              <div className="banner-modal-imgbox main-banner-modal-img w-full z-20 relative">
                <ul className="modal-img-list flex gap-7 items-center justify-end mr-28 desktop-l:mr-16 lg:mr-12 md:flex-row-reverse md:absolute md:top-[110px] sm:top-[204px] md:mr-0">
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
                  <li className="modal-img-item md:w-[180px] sm:w-[146px]  md:relative w-[382px] sm:min-w-[147px] sm:h-[200px] md:min-w-[216px] lg:w-[290px] laptop-x:w-[300px] laptop-m:w-[300px] desktop-m:w-[350px] rounded-3xl overflow-hidden bg-primary md:rounded-2xl sm:rounded-lg">
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
              <span className="md:hidden lg:text-6xl overly-text-bottom z-30 font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-[-90deg] absolute left-0 top-[520px]">
                Nft
              </span>
            </div>
            {/* --------------- */}

            {/* ------------- */}
            <div className="banner-text-cont-right w-[560px] relative z-50 mt-24 mr-10 md:mt-40 md:pt-[301px] sm:pt-[290px] lg:mr-0 sm:mr-[-35px] md:w-full">
              <span className="md:hidden lg:text-6xl overly-text-top overly-text-bottom font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-90 absolute right-0 bottom-[420px]">
                SBT
              </span>
              <h3 className="subtitle font-primary font-normal text-fig-32 md:max-w-[375px] text-left text-secondary uppercase mb-3 laptop-m:text-[26px] md:text-fig-24">
                Soulbound tokens and NFTs that make a difference
              </h3>
              <p className="desc font-primary font-normal text-fig-base text-left text-secondary md:text-fig-base">
                Participate in your cherished causes, or experience your
                favorite fandoms
              </p>
              <div className="banner-btn-box text-left flex mt-8">
                <Link href="/">
                  <a className="py-5 px-5 lg:px-3 uppercase laptop-m:whitespace-nowrap sm:text-xs font-primary font-normal text-fig-15 lg:text-fig-12 text-primary rounded-[40px] bg-secondary border border-solid border-secondary mr-3 hover:bg-neon hover:border-neon transition duration-150 ease-out">
                    Explore Causes
                  </a>
                </Link>
                <Link href="/">
                  <a className="py-5 px-5 lg:px-3 uppercase laptop-m:whitespace-nowrap sm:text-xs font-primary font-normal text-fig-15 lg:text-fig-12 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-purple hover:border-purple transition duration-150 ease-out">
                    explore fandoms
                  </a>
                </Link>
              </div>
            </div>
            {/* ------------ */}
          </div>
         {/* ================ */}
      
        </div>

        <div className="scroll-anim-text-wrapper  w-full z-10 relative mt-[-130px] lg:h-[274px] md:mt-0 sm:h-[142px]  md:mt-8 h-[456px]">
          <div className="section-titlebox mb-24 md:mb-0">

          <div className="scrolable-text-box">
              <div className="scroll-text-item">
                <h2 className="section-title whitespace-nowrap scrollable--title">
                 
                </h2>
              </div>
            </div>

            <div className="scrolable-text-box">
              <div className="scroll-text-item">
                <h2 className="section-title whitespace-nowrap scrollable--title font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx md:text-fig-xx sm:text-fig-40 mb-[29px]">
                  nft • fandoms • Metaverse • nft • fandoms • Metaverse • nft •
                  fandoms • Metaverse • nft • fandoms • Metaverse • nft • fandoms
                  • Metaverse •
                </h2>
              </div>
            </div>

            <div className="scrolable-text-box">
              <div className="scroll-text-item">
                <h2 className="section-title whitespace-nowrap font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx md:text-fig-xx sm:text-fig-40 mb-[29px] md:mb-[14px]">
                  soulbound • tokens • Nonfungible • soulbound • tokens • Nonfungible • soulbound
                  • tokens • Nonfungible • soulbound • tokens • Nonfungible • soulbound • tokens •
                  Nonfungible •
                </h2>
              </div>
            </div>

            <div className="scrolable-text-box">
              <div className="scroll-text-item">
                <h2 className="section-title whitespace-nowrap scrollable--title font-primary font-normal text-fig-5x text-center uppercase lg:text-fig-xx md:text-fig-xx sm:text-fig-40 mb-0">
                  nft • fandoms • metaverse • nft • fandoms • metaverse • nft •
                  fandoms • metaverse • nft • fandoms • metaverse • nft •
                  fandoms • metaverse •
                </h2>
              </div>
            </div>

            <div className="scrolable-text-box">
              <div className="scroll-text-item">
                <h2 className="section-title whitespace-nowrap scrollable--title">
                 
                </h2>
              </div>
            </div>

          </div>
        </div>

        <div className="main-test-modal-bg absolute top-0 left-0 w-full max-w-[1820px] right-0 ml-auto mr-auto">
          <Image
            src="/images/banner-bg.png"
            alt="superfandom banner-bg"
            className="banner-bg "
            width="1820px"
            height="444px"
          />
          <div className="scrolable-bg-shape bg-shape absolute top-0 left-0 w-full sm:h-full">
            <img
              src="/images/how-it-work-bg.png"
              alt="superfandom bg-shape"
              className="bg-shape-image w-full h-full"
              width="1920px"
              height="556px"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
