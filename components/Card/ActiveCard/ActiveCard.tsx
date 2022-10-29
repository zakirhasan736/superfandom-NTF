import React from 'react';
import Image from 'next/image';

export interface IActiveCard {
  id: 1;
  photo_name?: string;
  desc?: string;
  title?: string;
  cardLogo?: string;
  cardInfo?: string;
  cardInfoBg?: 'purple' | 'neon';
}

const ActiveCard: React.FC<IActiveCard> = ({
  id,
  photo_name,
  cardInfo,
  cardLogo,
  cardInfoBg,
  title,
  desc,
}) => {
  return (
    <div
      className="token-card--items w-[518px]  md:min-w-[300px] md:w-[300px] rounded-3xl overflow-hidden bg-primary"
      key={id}
    >
      <div className="token-img-cont-box relative">
        <div className="tokens-img-wrap relative">
          <div className="active--cards-img w-full h-[432px] md:h-[100%] relative">
            <Image
              src={`/images/${photo_name}`}
              alt="tokens-card-img"
              className="token-card-img h-full w-full"
              width="518px"
              height="432px"
            />
          </div>

          <div className="tokens-card-top-cont flex justify-end items-start absolute top-0 left-0 p-5 w-full md:p-3">
            <span
              className={[
                'card-updates-info  text-fig-15 uppercase text-secondary block  text-center font-primary font-normal rounded-[100%] w-[62px] h-[62px] leading-[62px] md:w-[36px] md:h-[36px] md:text-fig-xs md:leading-[36px]',
                `bg-${cardInfoBg}`,
              ].join(' ')}
            >
              {cardInfo}
            </span>
          </div>

          <div className="token-card-content-box pt-[13px] pb-8 px-8  absolute bottom-0 left-0 w-full flex items-start z-40 md:block md:px-5 md:py-5">
            <div className="card-verified-logo w-[87px] h-[87px] rounded-[100px] md:mb-2 md:w-[46px] md:h-[46px]">
              <Image
                src={`/images/${cardLogo}`}
                alt="active-card-img"
                className="active-card-img h-full w-full"
                width="87px"
                height="87px"
              />
            </div>

            <div className="card-wrapper ml-6 md:ml-0">
              <h3 className="card-title font-primary font-normal text-fig-32 h-[62px] md:h-[22px] overflow-hidden text-left text-secondary uppercase mb-2 md:text-fig-15 md:mb-1">
                {title}
              </h3>
              <p className="desc mb-8 text-fig-xs text-left h-[15px] md:h-[28px] md:text-fig-xs md:mb-0 overflow-hidden text-secondary font-primary font-normal">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
