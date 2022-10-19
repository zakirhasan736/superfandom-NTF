import { NextPage } from 'next';
import { Accordion } from '../accordion/accordion';

const FaqPage: NextPage<any> = ({}) => {
  const accordianData = [
    {
      id: 1,
      question: 'What is Superfandom?',
      answer: `On Superfandom, creators issue special NFTs to their superfans, going beyond digital art or collectibles. These NFTs are like tickets, or passes, that enable real-world and virtual experiences with creators. It's a new way for creators to cultivate their fandoms.`,
    },
    {
      id: 2,
      question: 'Why use Superfandom?',
      answer: `<i>For creators:</i><br />NFTs launched on Superfandom give access to unique experiences with creators. Such NFTs are naturally very desirable for your fandom. Hence you can launch such NFTs to cultivate the community of your superfans. 
            <br /><br /><i>For superfans:</i><br />Buy your favorite creators' NFTs, and redeem them for unique experiences with them. Show these NFTs off to friends in the Metaverse, so they know about your unique experiences. Lastly, your NFTs are an asset, so you are free to sell them in the secondary market.`,
    },
    {
      id: 3,
      question: 'What are NFTs?',
      answer: `NFTs are unique assets existing on the blockchain. They typically represent digital art. But since NFTs are essentially code, experts can program them for other uses too.
            For example, NFTs can be used to give exclusive access to special events or experiences. And those are the type of NFTs Superfandom enables creators to launch, in just a few clicks.`,
    },
    {
      id: 4,
      question: 'Why use NFTs for this?',
      answer: `We believe NFTs are a direct pathway from creators to their fandom. Thus creators can use NFTs to give something special to their superfans. This can tremendously help creators grow their brands and influence.`,
    },
    {
      id: 5,
      question: 'Are the NFTs bad for the environment?',
      answer: `No, our NFTs are not bad for the environment. Through clever engineering, our NFTs simply recycle energy that was utilized by Bitcoin miners in the past. This is made possible through an innovative consensus mechanism that you can read more about 
            <a target="_blank" rel="noopener noreferrer" href="https://hackernoon.com/wtf-is-proof-of-transfer-and-why-should-anyone-care-wd2330p9">here</a>.`,
    },
  ];
  return (
    <>
    <section className="Faq-section w-full bg-secondary pt-[132px] pb-[132px] laptop-m:pt-[64px] laptop-m:pb-[60px]  md:pb-[40px] px-0">
          <div className="custom-container 2xl:px-0 xl:px-[50px] laptop-x:px-12 md:px-5 sm:px-4">
              <div className="section-titlebox mb-16 md:mb-4">
                <h2 className="section-title font-primary font-normal text-fig-3x text-left text-primary laptop-x:text-6xl md:text-fig-40">FAQs</h2>
              </div>
              <div className="Faq-content-wrapper">
              {accordianData.map(({ id, question, answer }) => (
                  <Accordion
                    key={id}
                    id={id}
                    question={question}
                    answer={answer}
                  />
                ))}
              </div>
          </div>
    </section>
    </>
  );
};

export default FaqPage;
