import { useState } from 'react';
import Image from 'next/image';
type accordion = {
  id: number;
  question: string;
  answer: string;
};

export const Accordion = ({ id, question, answer }: accordion) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className="pb-[34px] accordion-items border-b border-solid border-primary md:pb-4 md:pt-4 "
        id={`faqs-accordion-${id}-wrapper`}
      >
        <div
          className="flex justify-between accordion-title items-center w-full"
          onClick={() => setIsActive(!isActive)}
          id={`faqs-accordion-${id}`}
        >
          <div className="font-primary font-normal accordion-title-text text-fig-32 text-left text-primary uppercase cursor-pointer md:text-fig-15">
            {question}
          </div>
          {isActive ? (
            <Image
              src="/images/icon/close.png"
              alt={'close icon'}
              width="32px"
              height="32px"
            />
          ) : (
            <Image
              src="/images/icon/plus.png"
              alt={'plus icon'}
              width="32px"
              height="32px"
            />
          )}
        </div>
        {isActive && (
          <div
            dangerouslySetInnerHTML={{ __html: answer }}
            className="text-left mt-[46px] font-primary font-normal text-primary text-fig-24 md:text-fig-xs md:mt-4"
          ></div>
        )}
      </div>
    </>
  );
};
