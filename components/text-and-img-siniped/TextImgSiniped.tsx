import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import TokenCards ,{ITokenCards} from '../Card/TokenCards/TokenCards';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TextImgSiniped: NextPage<any> = () => {
  const [tokenItem, setTokenItem] = useState<any>([]);
  const [tokenItem2, setTokenItem2] = useState<any>([]);
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

  let data2 = [
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

  useEffect(() => {
    const items = data2
    setTokenItem2(items);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    gsap.utils.toArray('.scroll-image-box').forEach((section:any, index) => {
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
    gsap.utils.toArray('.text-img-siniped-info-list').forEach((section:any) => {
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
                    <Link href="/CausesPage">
                      <a className="link-buttons uppercase flex flex-col max-w-[190px] text-center w-full  p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary hover:bg-transparent hover:text-secondary transition duration-150 ease-out">
                        Explore Causes
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="text-img-siniped-anim-scroll overflow-hidden  w-full flex gap-x-12  max-h-[1080px] h-full px-[50px] md:hidden laptop-m:max-h-[800px]">
                  <div className="scroll-image-box">
                    <ul  id="left-image" className="scroll-slides-card-left anim-card-scroll flex flex-col gap-y-12">
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

                  <div className="scroll-image-box">
                    <ul
                      id="right-image"
                      className="scroll-slides-card-right anim-card-scroll flex flex-col gap-y-12"
                    >
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
                        {tokenItem2.map(
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

                  <div className="scroll-image-box">
                    <ul
                      id="right-image-1"
                      className="scroll-slides-card-right anim-card-scroll flex flex-col gap-y-12"
                    >
                       {tokenItem2.map(
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
