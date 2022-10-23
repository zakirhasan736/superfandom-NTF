import { useState } from 'react';

export interface IFaq {
  id: number,
  question: string;
  answer: string;
}

const Faq: React.FC<IFaq> = ({ id, question, answer }) => {
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
                    className="d-flex flex-row justify-content-between align-items-center w-100"
                    onClick={() => setIsActive(!isActive)}
                    id={`faqs-accordion-${id}`}
                  >
                    <div className="font-24 color-black">{question}</div>
                    {isActive ? (
                      <img src="/assets/icon/arrow-up.svg" alt={'arrow-up'} />
                    ) : (
                      <img src="/assets/icon/arrow-down.svg" alt={'arrow-down'} />
                    )}
                  </div>
                  {isActive && (
                    <div
                      dangerouslySetInnerHTML={{ __html: answer }}
                      className="text-left mt-3 font-20thin color-black"
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
