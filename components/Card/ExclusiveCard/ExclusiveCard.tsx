import React from 'react';
import Image from 'next/image';

export interface IExclusiveCard {
  _id: string;
  image?: string;
  description?: string;
  title?: string;
  cardType?: string;
  status?: string;
  statusColor?: 'purple' | 'neon';
}

const ExclusiveCard: React.FC<IExclusiveCard> = ({
  _id,
  image = `/images/exclusive-img-1.png`,
  status = 'live',
  cardType,
  statusColor = 'neon',
  title,
  description,
}) => {
  return (
    <div
      className="token-card--items w-[382px] md:w-full md:min-w-[216px] lg:w-[290px] laptop-x:w-[300px] laptop-m:w-[350px] desktop-m:w-[350px] rounded-3xl overflow-hidden bg-primary lg:rounded-2xl"
      key={_id}
    >
      <div className="token-img-cont-box relative">
        <div className="tokens-img-wrap relative">
          <div className="exclusive--card-img w-full relative">
            <Image
              src={image}
              alt="tokens-card-img"
              className="token-card-img h-full w-full"
              width="382px"
              height="520px"
            />
          </div>

          <div className="tokens-card-top-cont flex justify-end items-start absolute top-0 left-0 p-5 w-full md:p-2">
            <span
              className={[
                'card-updates-info  text-fig-15 uppercase text-secondary block  text-center font-primary font-normal rounded-[100%] w-[62px] h-[62px] leading-[62px] laptop-x:text-fig-12 laptop-x:w-[45px] laptop-x:h-[45px] laptop-x:leading-[45px] lg:w-[36px] lg:h-[36px] lg:text-fig-xs lg:leading-[36px]',
                `bg-${statusColor}`,
              ].join(' ')}
            >
              {status}
            </span>
          </div>

          <div className="token-card-content-box pt-[13px] pb-4 px-6 absolute bottom-0 left-0 z-50 lg:px-4">
            <h3 className="card-title font-primary font-normal text-fig-32 text-left text-secondary uppercase mb-4  laptop-x:text-fig-24 lg:text-fig-base lg:mb-2">
              {title}
            </h3>
            <p className="desc mb-8 text-fig-xs text-left text-secondary font-primary font-normal md:text-fig-xs md:mb-2">
              {description}
            </p>
            <div className="token-cards-bottom flex justify-end w-full">
              <h3 className="card-type font-primary font-normal text-fig-32 text-right laptop-x:text-fig-24 text-darkgray uppercase lg:text-fig-15 lg:mb-0">
                {cardType}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveCard;
