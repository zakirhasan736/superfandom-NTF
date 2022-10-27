import React from 'react';
import Image from 'next/image';

export interface ITokenCards {
  id: number;
  photo_name?: string;
  categories_name?: string;
  Price?: string;
  desc?: string;
  userInfo?: string;
  btnName?: string;
  userPhoto?: string;
  bidNow?: string;
  bidNowBg?: 'white' | 'neon';
  cardInfo?: 'Live' | 'Soon';
  cardInfoBg?: 'purple' | 'neon';

}

const TokenCards: React.FC<ITokenCards> = ({ id, photo_name,cardInfo,bidNowBg, userPhoto,bidNow,cardInfoBg,  Price, desc, userInfo, btnName }) => {
  return (
    <div className="token-card--items w-[382px] rounded-3xl overflow-hidden bg-primary" key={id}>

      <div className="token-img-cont-box relative">

        <div className="tokens-img-wrap relative">
          <div className="token--icons-img w-full h-[382px]">
            <Image
              src={`/images/${photo_name}`}
              alt="tokens-card-img"
              className="token-card-img h-full w-full"
              width="382px"
              height="382px"
            />
          </div>

          <div className="tokens-card-top-cont flex justify-between items-start absolute top-0 left-0 p-5 w-full">
            <a
              href="/"
              className={['link-item-text uppercase text-fig-15 bg-secondary text-primary text-center font-primary font-normal p-[10px] rounded-[40px]', `bg-${bidNowBg}`].join(' ')}
              >
              {bidNow}
            </a>
            <span className={['card-updates-info  text-fig-15 uppercase text-secondary block  text-center font-primary font-normal rounded-[100%] w-[62px] h-[62px] leading-[62px]', `bg-${cardInfoBg}`].join(' ')}
            >
             {cardInfo}
            </span>
          </div>
        </div>

      </div>

      <div className="token-card-content-box pt-[13px] pb-4 px-6">
        <div className="user-info-box mb-4 flex items-center">
          <img
            src={`/images/${userPhoto}`}
            alt="user-img"
            className="user-img rounded-[100%] overflow-hidden mr-2"
            width="20px"
            height="20px"
          />
          <h5 className="user-info-title font-primary font-normal text-fig-base text-left text-darkgray">
           {userInfo}
          </h5>
        </div>
        <p className="desc mb-4 text-fig-xs text-left text-secondary font-primary font-normal">{desc}</p>
        <div className="token-cards-bottom flex justify-between">
          <span className="cursor-pointer token-info-name text-fig-15 text-left text-darkgray font-primary font-normal uppercase">
           {btnName}
          </span>
          <h3 className="token-price font-primary font-normal text-fig-32 text-right text-secondary uppercase">
           { Price}
          </h3>
        </div>
      </div>

    </div>
  );
};

export default TokenCards;
