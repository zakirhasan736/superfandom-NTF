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
      className="token-card--items w-[518px] rounded-3xl overflow-hidden bg-primary"
      key={id}
    >
      <div className="token-img-cont-box relative">
        <div className="tokens-img-wrap relative">
          <div className="token--icons-img w-full h-[432px]">
            <Image
              src={`/images/${photo_name}`}
              alt="tokens-card-img"
              className="token-card-img h-full w-full"
              width="518px"
              height="432px"
            />
          </div>

          <div className="tokens-card-top-cont flex justify-end items-start absolute top-0 left-0 p-5 w-full">
            <span
              className={[
                'card-updates-info  text-fig-15 uppercase text-secondary block  text-center font-primary font-normal rounded-[100%] w-[62px] h-[62px] leading-[62px]',
                `bg-${cardInfoBg}`,
              ].join(' ')}
            >
              {cardInfo}
            </span>
          </div>

          <div className="token-card-content-box pt-[13px] pb-8 px-8  absolute bottom-0 left-0 w-full flex items-start">
            <div className="card-verified-logo">
              <Image
                src={`/images/${cardLogo}`}
                alt="active-card-img"
                className="active-card-img h-full w-full"
                width="87px"
                height="87px"
              />
            </div>

            <div className="card-wrapper ml-6">
              <h3 className="card-title font-primary font-normal text-fig-32 text-left text-secondary uppercase mb-2">
                {title}
              </h3>
              <p className="desc mb-8 text-fig-xs text-left text-secondary font-primary font-normal">
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
