import { useState } from 'react';
import Image from 'next/image';
export interface IFaq {
  id: number,
  question: string;
  answer: string;
}

const Faq: React.FC<IFaq> = ({id, question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <div style={{ paddingBottom: '235px' }} className="h-100 bg-light-gray">
        <div
          style={{ paddingTop: '64px' }}
          className={`d-flex justify-content-center align-items-center`}
        >
          <div
            style={{ maxWidth: '816px' }}
            className={`row w-100 mx-5 m-0 p-0`}
          >
            <div className="col-sm-12 d-flex flex-column w-100 justify-content-center align-items-center px-0">
              <h5 className="font-32 color-black">FAQs</h5>
              <div className="w-100 cursor-pointer bg-light-gray mt-4">
              <div
            className="py-2 mb-4"
            style={{ borderBottom: '1px solid #201627' }}
            id={`faqs-accordion-${id}-wrapper`}
        >
            <div
                className="font-primary font-normal accordion-title-text text-fig-32 text-left text-primary uppercase cursor-pointer md:text-fig-15"
                onClick={() => setIsActive(!isActive)}
                id={`faqs-accordion-${id}`}
            >
                <div className="font-24 color-black">{question}</div>
                {isActive ? (
            <Image
              src="/images/faq-close.png"
              alt={'close icon'}
              width="33.42px"
              height="33.42px"
            />
          ) : (
            <Image
              src="/images/faq-plus.png"
              alt={'plus icon'}
              width="32px"
              height="32px"
            />
          )}
            </div>
            {isActive && (
                <div
                    dangerouslySetInnerHTML={{ __html: answer }}
                    className="mt-[46px] font-primary font-normal text-left text-primary text-fig-24 md:text-fig-xs md:mt-4"
                ></div>
            )}
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
