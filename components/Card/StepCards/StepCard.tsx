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
    <div className="steps-card--items pt-[29px] pr-9 pb-16 pl-4 relative border-solid border-2 border-secondary h-[400px] rounded-3xl bg-primary" key={id}>
    <div className="step--icons-img">
    <Image
  src={`/images/${photo_name}`}
  alt={photo_name}
  className="steps-card-number h-full w-full"
  width="147px"
  height="152px"
/>
    </div>
    <div className="steps-card-content-box pl-40">
        <h2 className="title text-fig-32 text-left text-secondary font-primary font- normal uppercase mb-6">{title}</h2>
        <p className="desc text-fig-base text-left text-secondary font-primary font-normal">{desc}</p>
    </div>
</div>
  );
};

export default StepCard;
