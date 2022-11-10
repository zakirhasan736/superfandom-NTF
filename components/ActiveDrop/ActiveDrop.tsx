import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { Settings } from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextPage } from 'next';
import ActiveCard, { IActiveCard } from '../Card/ActiveCard/ActiveCard';

const ActiveDrop: NextPage<any> = () => {
  const [ActiveCards, setActiveCards] = useState<any>([]);

  let data = [
    {
      id: 1,
      photo_name: 'drop-card-img-1.png',
      desc: 'DWB in collaboration with Bella Hadid, all proceeds go to DWB',
      title: 'Doctors Without Borders',
      cardLogo: 'varified-logo.png',
      cardInfo: 'Live',
      cardInfoBg: 'purple',
    },
    {
      id: 2,
      photo_name: 'drop-card-img-2.png',
      desc: 'DWB in collaboration with Bella Hadid, all proceeds go to DWB',
      title: 'Doctors Without Borders',
      cardLogo: 'varified-logo.png',
      cardInfo: 'soon',
      cardInfoBg: 'neon',
    },
    {
      id: 3,
      photo_name: 'drop-card-img-3.png',
      desc: 'DWB in collaboration with Bella Hadid, all proceeds go to DWB',
      title: 'Doctors Without Borders',
      cardLogo: 'varified-logo.png',
      cardInfo: 'Live',
      cardInfoBg: 'purple',
    },
  ];

  useEffect(() => {
    const items = data;
    setActiveCards(items);
  }, []);

  const settings:Settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 5000,
        settings: 'unslick',
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          dots: false,
          variableWidth: true,
          // nav: false,
          centerMode: true,
          centerPadding: '10px',
          arrows: false,
        },
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
          centerPadding: '10px',
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="active-drop-section w-full bg-primary pt-[142px] laptop-m:pt-[65px]  md:pt-8 pb-16 md:pb-11 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-8">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-secondary laptop-x:text-6xl md:text-fig-40 uppercase">
              Active Drops
            </h2>
          </div>
        </div>

        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:px-12 laptop-x:px-0 xl:px-12  lg:px-0 0 md:px-0 sm:px-0">
          <div className="active-drop-content-wrapper px-28 py-[100px] laptop-x:py-16 desktop-l:px-12 md:px-0 md:py-0 sm:pb-0 w-full h-full bg-primary rounded-3xl overflow-hidden laptop-x:rounded-none">
            <div className="active-drop-slidebox mb-16 md:mb-0">
              <ul className="active-drop-slides-cards">
                <Slider {...settings}>
                  {ActiveCards.map(
                    ({
                      id,
                      photo_name,
                      cardInfo,
                      cardLogo,
                      cardInfoBg,
                      title,
                      desc,
                    }: IActiveCard) => (
                      <li
                        className="active-drop-cards-items w-[518px] h-[432px] md:min-w-[300px] md:w-[300px] md:h-[100%]"
                        key={id}
                      >
                        <ActiveCard
                          id={id}
                          photo_name={photo_name}
                          desc={desc}
                          title={title}
                          cardLogo={cardLogo}
                          cardInfo={cardInfo}
                          cardInfoBg={cardInfoBg}
                        />
                      </li>
                    )
                  )}
                </Slider>
              </ul>
            </div>
            <div className="active-drop-btn-box md:hidden text-center flex justify-center">
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
