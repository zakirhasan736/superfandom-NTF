import { NextPage } from 'next';
import { Accordion } from './accordion';

const FaqPage: NextPage<any> = () => {
  const accordianData = [
    {
      id: 1,
      question: 'Information about the floods in Pakistan',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus.`,
    },
    {
      id: 2,
      question: 'More about the charities live on this page',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus.`,
    },
    {
      id: 3,
      question: 'What are soulbound tokens?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus.`,
    },
    {
      id: 4,
      question: 'Why is Superfandom using soulbound tokens for charity?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus.`,

    },
    {
      id: 5,
      question: 'Why are influencers collaborating with charities for these drops?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sed eleifend ac gravida bibendum. Velit, pellentesque elementum enim senectus.`,

    },
  ];
  return (
    <>
      <section className="w-full bg-secondary pt-[132px] pb-[132px] laptop-m:pt-[64px] laptop-m:pb-[60px] sm:pt-8  md:pb-[40px] px-0  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-[50px] laptop-x:px-12 md:px-5 sm:px-4">
          <div className="mb-16 md:mb-4">
            <h2 className="section-title">
              FAQs
            </h2>
          </div>
          <div className="Faq-content-wrapper">
            {accordianData.map(({ id, question, answer }) => (
              <Accordion key={id} id={id} question={question} answer={answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
