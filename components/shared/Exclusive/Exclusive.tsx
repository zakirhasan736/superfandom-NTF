import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Slider from 'react-slick';
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IExclusiveCard } from '../../../typings/types';
import ExclusiveCard from '../ExclusiveCard/ExclusiveCard';


const Exclusive: NextPage<any> = ({ pageName }) => {
  const [ExclusiveCards, setExclusiveCards] = useState<any>([]);

  let data = [
    {
      id: 1,
      photo_name: 'exclusive-img-1.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'Live',
      cardInfoBg: 'purple',
    },
    {
      id: 2,
      photo_name: 'exclusive-img-2.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'Live',
      cardInfoBg: 'purple',
    },
    {
      id: 3,
      photo_name: 'exclusive-img-3.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'soon',
      cardInfoBg: 'neon',
    },
    {
      id: 4,
      photo_name: 'exclusive-img-4.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'soon',
      cardInfoBg: 'neon',
    },
  ];

  useEffect(() => {
    const items = data;
    setExclusiveCards(items);
  }, []);


  const settings: Settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          centerPadding: "10px",
        }
      }
      ,
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
      <section className="exclusive-section w-full bg-secondary pt-[92px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-4 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-8">
            <h2 className="section-title title_animation text-primary uppercase">
              exclusives
            </h2>
          </div>
        </div>

        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:px-12 xl:px-12 laptop-x:px-0 lg:px-0 md:px-0 sm:px-0">
          <div className={`
         ${pageName === "campaign" ? "exclusive-wrap--campaign" : ""
            } 
         exclusive-content-wrapper px-28 py-12 desktop-l:px-12 md:px-0  sm:pb-8 w-full h-full bg-secondary md:bg-secondary rounded-3xl laptop-x:rounded-none overflow-hidden`}>
            <div className="exclusive-slidebox">
              <ul className="exclusive-slides-image">
                <Slider {...settings}>
                  {ExclusiveCards.map(
                    ({
                      id,
                      photo_name,
                      title,
                      desc,
                      cardType,
                      cardInfo,
                      cardInfoBg,
                    }: IExclusiveCard) => (
                      <li className="exclusive-image-items w-[382px]  md:w-full md:min-w-[216px]" key={id}>
                        <ExclusiveCard
                          id={id}
                          photo_name={photo_name}
                          desc={desc}
                          title={title}
                          cardType={cardType}
                          cardInfo={cardInfo}
                          cardInfoBg={cardInfoBg}
                        />
                      </li>
                    )
                  )}
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exclusive;
