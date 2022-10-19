import Image from 'next/image';

export interface IBanner {
  title: string;
  subtitle: string;
  desc: string;
}

const Banner: React.FC<IBanner> = ({ title, subtitle, desc }) => {
  return (
    <div className="main-visual-section bg-primary pb-[51px] pt-[209px] relative">
      <div className="container lg:container md:container sm:container relative lg:px-9 md:px-7 sm:px-4">
        <div className="main-visual-wrapper flex items-center justify-between md:block">
          {/* ------------------- */}
          <div className="banner-text-cont-left relative w-full z-50">
            <h2 className="banner-title mb-[67px] absolute top-0 left-0 z-30">
              <span className="font-primary font-normal text-fig-5x text-left text-secondary uppercase laptop-x:text-[130px] laptop-x:leading-[100px] lg:text-[110px] lg:leading-[80px] md:text-fig-xx sm:text-fig-40">
                Collect
              </span>{' '}
              <br />
              <span className="font-primary font-normal text-fig-5x text-left text-secondary uppercase laptop-x:text-[130px] laptop-x:leading-[100px] lg:text-[110px] lg:leading-[80px] md:text-fig-xx sm:text-fig-40">
                life-changing
              </span>{' '}
              <br />
              <span className="font-primary font-normal text-fig-5x text-left text-secondary uppercase laptop-x:text-[130px] laptop-m:leading-[100px] lg:text-[110px] lg:leading-[80px] md:text-fig-xx sm:text-fig-40">
                NFTs
              </span>
            </h2>
            <div className="banner-modal-imgbox w-full z-20 relative">
              <ul className="modal-img-list flex gap-7 items-center justify-end mr-28 desktop-l:mr-16 lg:mr-12">
                <li className="modal-img-item mt-[320px] md:w-[146px">
                  <Image
                    src="/images/card-img-1.png"
                    alt="superfandom banner-modal-img"
                    className="banner-modal-img "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="modal-img-item mb-[30px] md:w-[146px">
                  <Image
                    src="/images/card-img-2.png"
                    alt="superfandom banner-modal-img"
                    className="banner-modal-img "
                    width="382px"
                    height="520px"
                  />
                </li>
              </ul>
            </div>
            <span className="md:hidden overly-text-bottom z-30 font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-[-90deg] absolute left-0 top-[520px]">
              Nft
            </span>
          </div>
          {/* --------------- */}

          {/* ------------- */}
          <div className="banner-text-cont-right w-[560px] relative z-50 mt-24 mr-10">
            <span className="md:hidden overly-text-top overly-text-bottom font-primary font-normal text-left text-fig-4x text-secondary mb-0 uppercase rotate-90 absolute right-0 bottom-[420px]">
              SBT
            </span>
            <h3 className="subtitle font-primary font-normal text-fig-32 text-left text-secondary uppercase mb-3 md:text-fig-24">
              Soulbound tokens and NFTs that make a difference
            </h3>
            <p className="desc font-primary font-normal text-fig-base text-left text-secondary md:text-fig-base">
              Participate in your cherished causes, or experience your favorite
              fandoms
            </p>
            <div className="banner-btn-box text-left flex mt-8">
              <a
                href="/"
                className="p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary mr-5 hover:bg-transparent hover:text-secondary transition duration-150 ease-out"
              >
                Explore Causes
              </a>
              <a
                href="/"
                className="p-5 font-primary font-normal text-fig-15 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-secondary hover:text-primary transition duration-150 ease-out"
              >
                Explore Causes
              </a>
            </div>
          </div>
          {/* ------------ */}

        </div>
        <div className="main-visual-modal-bg absolute bottom-[170px] left-0 w-full max-w-[1820px] right-0 ml-auto mr-auto desktop-m:bottom-[220px]">
            <Image
              src="/images/banner-bg.png"
              alt="superfandom banner-bg"
              className="banner-bg "
              width="1820px"
              height="444px"
            />
          </div>
      </div>
     
    </div>
  );
};

export default Banner;
