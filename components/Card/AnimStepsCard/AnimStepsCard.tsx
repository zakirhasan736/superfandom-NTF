import React from 'react';
import Image from 'next/image';

export interface IAnimStepsCard {
  id: number;
  categories_name: string;
  photo_name: string;
}

const AnimStepsCard: React.FC<IAnimStepsCard> = ({id,photo_name}) => {
  return (
    <div key={id}>
      <Image
        src={`/cstoken_images/${photo_name}`}
        alt={photo_name}
        className="slide-image h-full w-full"
        width="382px"
        height="520px"
      />
    </div>
  );
};

export default AnimStepsCard;
