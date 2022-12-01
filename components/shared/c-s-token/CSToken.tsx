import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IExclusiveCard, ITokenCards } from '../../../typings/types';
import ExclusiveCard from '../ExclusiveCard/ExclusiveCard';
import TokenCards from '../TokenCards/TokenCards';

const CSToken = ({ pageName, title }: any) => {
  const [filterText, setFilter] = useState<string>('all');
  const [filtertabs, setTabs] = useState<any>([]);
  const [tokenItem, setTokenItem] = useState<any>([]);
  const [ExclusiveTokenData, setExclusiveTokenData] = useState<any>([]);

  useEffect(() => {
    let data = [
      {
        id: 1,
        categories_name: ['all', 'p_food'],
        photo_name: 'card-img-1.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
        bidNow: 'Bid Now',
        bidNowBg: 'white',
      },
      {
        id: 2,
        categories_name: ['all', 'lorem'],
        photo_name: 'card-img-2.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
        bidNow: 'Bid Now',
        bidNowBg: 'white',
      },
      {
        id: 3,
        categories_name: ['all', 'd_wot_b'],
        photo_name: 'card-img-3.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
        bidNow: 'BID IN 6 HRS 25 MINS 36 SECS',
        bidNowBg: 'neon',
      },
      {
        id: 4,
        categories_name: ['all', 'p_food'],
        photo_name: 'card-img-4.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
      },
      {
        id: 5,
        categories_name: ['all', 'p_food'],
        photo_name: 'card-img-5.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
        bidNow: 'BID IN 6 HRS 25 MINS 36 SECS',
        bidNowBg: 'neon',
      },
      {
        id: 6,
        categories_name: ['all', 'lorem'],
        photo_name: 'card-img-6.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
        bidNow: 'Bid Now',
        bidNowBg: 'white',
      },
      {
        id: 7,
        categories_name: ['all', 'd_wot_b'],
        photo_name: 'card-img-7.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
      },
      {
        id: 8,
        categories_name: ['all', 'p_food'],
        photo_name: 'card-img-8.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
      },
      {
        id: 9,
        categories_name: ['all', 'p_food'],
        photo_name: 'card-img-9.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
      },
      {
        id: 10,
        categories_name: ['all', 'lorem'],
        photo_name: 'card-img-10.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
      },
      {
        id: 11,
        categories_name: ['all', 'd_wot_b'],
        photo_name: 'card-img-11.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
      },
      {
        id: 12,
        categories_name: ['all', 'p_food'],
        photo_name: 'card-img-12.png',
        Price: '320STX',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        userInfo: '@voice over',
        btnName: 'Buy Now',
        userPhoto: 'user-img.png',
      },
    ];

    const items = data.filter((item) =>
      item.categories_name.includes(filterText)
    );
    setTokenItem(items);
  }, [filterText]);

  useEffect(() => {
    let data2 = [
      {
        id: 1,
        categories_name: ['all', 'pfps'],
        photo_name: 'exclusive-img-1.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'soon',
        cardInfoBg: 'neon',
      },
      {
        id: 2,
        categories_name: ['all', 'editions'],
        photo_name: 'exclusive-img-2.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'purple',
      },
      {
        id: 3,
        categories_name: ['all', 'pfps'],
        photo_name: 'exclusive-img-3.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'purple',
      },
      {
        id: 4,
        categories_name: ['all', 'pfps'],
        photo_name: 'exclusive-img-4.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'soon',
        cardInfoBg: 'neon',
      },
      {
        id: 5,
        categories_name: ['all', 'editions'],
        photo_name: 'exclusive-img-2.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
      {
        id: 6,
        categories_name: ['all', 'pfps'],
        photo_name: 'exclusive-img-4.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
      {
        id: 7,
        categories_name: ['all', 'pfps'],
        photo_name: 'exclusive-img-3.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
      {
        id: 8,
        categories_name: ['all', 'editions'],
        photo_name: 'exclusive-img-1.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
      {
        id: 9,
        categories_name: ['all', 'pfps'],
        photo_name: 'exclusive-img-4.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
      {
        id: 10,
        categories_name: ['all', 'editions'],
        photo_name: 'exclusive-img-2.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
      {
        id: 11,
        categories_name: ['all', 'pfps'],
        photo_name: 'exclusive-img-4.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
      {
        id: 12,
        categories_name: ['all', 'editions'],
        photo_name: 'exclusive-img-1.png',
        desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
        title: 'Collection name',
        cardType: 'Nft',
        cardInfo: 'Live',
        cardInfoBg: 'neon',
      },
    ];
    const items2 = data2.filter((items) =>
      items.categories_name.includes(filterText)
    );
    setExclusiveTokenData(items2);
  }, [filterText]);

  useEffect(() => {
    const tabs = [
      {
        id: 1,
        pageName: ["causes"],
        title: "all soulbound tokens",
        filterText: "all"
      },
      {
        id: 2,
        pageName: ["fandom"],
        title: "all nft tokens",
        filterText: "all"
      },
      {
        id: 3,
        pageName: ["campaign"],
        title: "all collections",
        filterText: "all"
      },
      {
        id: 4,
        pageName: ["causes"],
        title: "pakistani food",
        filterText: "p_food"
      },
      {
        id: 5,
        pageName: ["fandom"],
        title: "pakistani food",
        filterText: "p_food"
      },
      {
        id: 6,
        pageName: ["causes"],
        title: "doctors without borders",
        filterText: "d_wot_b"
      },
      {
        id: 7,
        pageName: ["fandom"],
        title: "doctors without borders",
        filterText: "d_wot_b"
      },
      {
        id: 8,
        pageName: ["campaign"],
        title: "editions",
        filterText: "editions"
      },
      {
        id: 9,
        pageName: ["campaign"],
        title: "pfps",
        filterText: "pfps"
      },
      {
        id: 10,
        pageName: ["causes"],
        title: "lorem ipsum",
        filterText: "lorem"
      },
      {
        id: 11,
        pageName: ["fandom"],
        title: "lorem ipsum",
        filterText: "lorem"
      }
    ]
    const tabItems = tabs.filter((items) =>
      items.pageName.includes(pageName)
    );
    setTabs(tabItems);
  }, [pageName]);

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
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: false,
          variableWidth: true,
          centerMode: true,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <>
      <section className="collection-tokent-section w-full bg-secondary pt-[132px] laptop-m:pt-[65px] md:py-8 pb-24 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-2">
          <div className="section-titlebox text-animetion mb-8 md:mb-4">
            <h2 className="section-title title_animation max-w-[970px] text-primary uppercase">
              {title}
            </h2>
          </div>

          <div className="collection-wrapper-box">
            <div className="collection-tabs-items mb-8 md:flex md:flex-nowrap sm:block">
              {filtertabs &&
                filtertabs.map((item: any) => (
                  <button key={item.id} onClick={() => setFilter(item.filterText)} className={`border-primary ${filterText === item.filterText && 'tabs-active active'} token-tabs-title`}>
                    {item.title}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-0">
          <div className="collection-tokens-box">
            <div
              className="content_wrapper md
            
            :block md::w-full gap-5 mb-16 md:mb-0"
            >
              <Slider {...settings}>
                {pageName === 'campaign'
                  ? ExclusiveTokenData.map(
                    ({
                      id,
                      photo_name,
                      desc,
                      title,
                      cardType,
                      cardInfo,
                      categories_name,
                      cardInfoBg,
                    }: IExclusiveCard) => (
                      // Exclusive card
                      <ExclusiveCard
                        key={id}
                        id={id}
                        categories_name={categories_name}
                        photo_name={photo_name}
                        desc={desc}
                        title={title}
                        cardType={cardType}
                        cardInfo={cardInfo}
                        cardInfoBg={cardInfoBg}
                      />
                    )
                  )
                  : tokenItem.map(
                    ({
                      id,
                      photo_name,
                      categories_name,
                      bidNowBg,
                      userPhoto,
                      bidNow,
                      Price,
                      desc,
                      userInfo,
                      btnName,
                    }: ITokenCards) => (
                      <TokenCards
                        key={id}
                        id={id}
                        categories_name={categories_name}
                        photo_name={photo_name}
                        Price={Price}
                        desc={desc}
                        userInfo={userInfo}
                        btnName={btnName}
                        userPhoto={userPhoto}
                        bidNow={bidNow}
                        bidNowBg={bidNowBg}
                      />
                    )
                  )}
              </Slider>
            </div>
            <div className="collection-btn-box text-center flex justify-center md:hidden sm:px-4 ">
              <Link href="/">
                <a className="secondary-btn">
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

export default CSToken;
