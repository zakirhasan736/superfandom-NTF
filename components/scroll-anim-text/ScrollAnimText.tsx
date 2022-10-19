import { NextPage } from 'next';
import Image from 'next/image';

const ScrollAnimText: NextPage<any> = ({}) => {
  return (
    <>
      <section className="how-it-work-section relative w-full h-[1080px] px-0 bg-primary overflow-hidden">
        <div className="scrolable-bg-shape absolute top-0 left-0 w-full">
          <Image
            src="/images/scroll-text-bg.png"
            alt="superfandom bg-shape"
            className="bg-shape-image w-full h-full"
            width="1920px"
            height="1080px"
          />
        </div>
        <div className="how-it-work-wrapper pt-[138px] pb-[234px] w-full z-10 relative">
          <div className="section-titlebox mb-24">
            <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-40 mb-[29px]">
            nft • fandoms • metavers • 
            </h2>
            <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-40 mb-[29px]">
            soulbound • tokens • no • 
            </h2>
            <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-40 mb-0">
            nft • fandoms • metaverse • 
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollAnimText;
