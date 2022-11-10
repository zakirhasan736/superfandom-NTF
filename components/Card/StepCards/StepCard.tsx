import React from 'react';
import Image from 'next/image';

export interface IStepCard {
  id: number,
  photo_name: string,
  title: string,
  desc: string,
}

const StepCard: React.FC<IStepCard> = ({id,photo_name, title, desc}) => {
  return (
    <div className="steps-card--items max-w-[516px] w-full md:mb-5 pt-[29px] pr-9 pb-8 pl-4 sm:py-4 sm:pr-4 relative border-solid border-2 border-secondary h-[400px] laptop-x:h-[366px] laptop-m:h-[315px] lg:h-[325px] md:min-h-[170px] rounded-3xl bg-primary md:h-auto md:" key={id}>
    <div className="step--icons-img sm:top-[17px] w-[130px] h-[ 130px] laptop-m:w-[110px] laptop-m:h-[ 110px] laptop-m:w-[80px] laptop-m:h-[80px] md:w-[60px] md:h-[60px] md:absolute md:top-[30px]">
    <Image
  src={`/images/${photo_name}`}
  alt={photo_name}
  className="steps-card-number h-full w-full"
  width="147px"
  height="152px"
/>
    </div>
    <div className="steps-card-content-box pl-[120px] desktop-m:pl-32 laptop-x:pl-16 laptop-m:pl-4 mt-[52px] lg:pl-0 lg:mt-10 md:pl-[80px] sm:pl-[75px] md:mt-0">
        <h2 className="title text-fig-32 text-left text-secondary font-primary font- normal uppercase mb-6">{title}</h2>
        <p className="desc text-fig-base text-left text-secondary font-primary font-normal">{desc}</p>
    </div>
</div>
  );
};

export default StepCard;
