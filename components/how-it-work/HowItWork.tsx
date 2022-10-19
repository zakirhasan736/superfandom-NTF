import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ImStarFull } from 'react-icons/im';
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HowItWork: NextPage<any> = ({}) => {
  return (
    <>
      <section className="how-it-work-section relative w-full px-0 bg-primary">
        <div className="scrolable-bg-shape absolute top-0 left-0 w-full w-[100%]">
          <Image
            src="/images/how-it-work-bg.png"
            alt="superfandom bg-shape"
            className="bg-shape-image w-full h-full"
            width="1920px"
            height="1080px"
          />
        </div>
        <div className="how-it-work-wrapper pt-[138px] pb-[234px] w-full z-10 relative">
          <div className="section-titlebox mb-24">
            <h2 className="section-title scrollable--title font-primary font-normal text-fig-5x text-center uppercase md:text-fig-40">
              how it works • how it work
            </h2>
          </div>
          <div className="custom-container 2xl:px-0 xl:px-0 laptop-x:px-12 md:px-5 sm:px-4">
            <div className="how-it-work-cont-wrapper">
              <ul className="how-it-work-info-items">
                <li className="how-it-work-info-list flex items-center flex-row gap-[190px]">
                  <div className="how-it-work-info-cont w-full flex justify-end">
                    <div className="text-cont-box w-full max-w-[462px] relative">
                      <div className="info-num-icon absolute right-0 top-[-129px] ">
                        <Image
                          src="/images/Subtract-num-1.png"
                          alt="superfandom info-item-num-img"
                          className="info-item-num-img "
                          width="195px"
                          height="198px"
                        />
                      </div>
                      <h2 className="title font-primary font-normal text-fig-xx text-left mb-8 text-secondary uppercase">
                        Mint <br /> soulbound
                      </h2>
                      <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0">
                        Mint soulbound tokens of the causes you care about
                      </p>
                    </div>
                  </div>

                  <div className="how-it-work-anim-cont w-full relative">
                    <div className="how-it-work-anim-img">
                      <Image
                        src="/images/card-img-6.png"
                        alt="superfandom anim-modal-img"
                        className="anim-modal-img"
                        width="382px"
                        height="520px"
                      />
                    </div>
                    <div className="how-it-work-anim-btn-box absolute bottom-0 left-0">
                    <Link href="/">
                    <a
                        className="anim-item-btn font-primary relative bottom-[161px] font-normal text-fig-15 text-center text-primary border border-solid border-primary bg-neon hover:bg-secondary uppercase p-5 w-[245px] block rounded-[40px]"
                      >
                        mint now
                      </a>
                    </Link>
                      <div className="anim-hand-icon relative bottom-[161px]">
                        <Image
                          src="/images/icon/cursor-hand-svgrepo-com 2.png"
                          alt="superfandom anim-hand-icon"
                          className="anim-hand-icon"
                          width="36px"
                          height="36px"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="how-it-work-info-list flex items-center flex-row gap-[190px]">
                  <div className="how-it-work-info-cont w-full flex justify-end">
                    <div className="text-cont-box w-full max-w-[462px] relative">
                      <div className="info-num-icon absolute right-0 top-[-129px] ">
                        <Image
                          src="/images/Subtract-num-2.png"
                          alt="superfandom info-item-num-img"
                          className="info-item-num-img "
                          width="195px"
                          height="198px"
                        />
                      </div>
                      <h2 className="title font-primary font-normal text-fig-xx text-left mb-8 text-secondary uppercase">
                        Mint <br /> soulbound
                      </h2>
                      <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0">
                        Mint soulbound tokens of the causes you care about
                      </p>
                    </div>
                  </div>

                  <div className="how-it-work-anim-cont w-full relative flex justify-end">
                    <div className="how-it-work-anim-img relative">
                      <Image
                        src="/images/card-mobo.png"
                        alt="superfandom anim-modal-img"
                        className="anim-modal-img"
                        width="389px"
                        height="601px"
                      />
                       <ul className="shadow-image-box absolute left-[-60px] top-0 w-full h-full">
                        <li className="shadow-image-item absolute left-[-105px] top-[-23px] w-full z-[-9]">
                          <Image
                            src="/images/card-img-16.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                        <li className="shadow-image-item absolute w-full z-[-12] left-[-164px] top-[-64px]">
                          <Image
                            src="/images/card-img-17.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                        <li className="shadow-image-item absolute w-full z-[-17] left-[-216px] top-[-107px]">
                          <Image
                            src="/images/card-img-15.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="how-it-work-anim-btn-box absolute bottom-0 right-0">
                      <Link href="/">
                      <a
                        
                        className="anim-item-btn font-primary relative bottom-[131px] font-normal text-fig-15 text-center text-primary border border-solid border-primary bg-secondary hover:bg-neon uppercase p-5 w-[245px] block rounded-[40px]"
                      >
                        your collection
                      </a>
                      </Link>
                      <div className="anim-hand-icon relative bottom-[131px]">
                        <Image
                          src="/images/icon/cursor-hand-svgrepo-com 2.png"
                          alt="superfandom anim-hand-icon"
                          className="anim-hand-icon"
                          width="36px"
                          height="36px"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="how-it-work-info-list flex items-center flex-row gap-[190px]">
                  <div className="how-it-work-info-cont w-full flex justify-end">
                    <div className="text-cont-box w-full max-w-[462px] relative">
                      <div className="info-num-icon absolute right-0 top-[-129px] ">
                        <Image
                          src="/images/Subtract-num-3.png"
                          alt="superfandom info-item-num-img"
                          className="info-item-num-img "
                          width="195px"
                          height="198px"
                        />
                      </div>
                      <h2 className="title font-primary font-normal text-fig-xx text-left mb-8 text-secondary uppercase">
                        Mint <br /> soulbound
                      </h2>
                      <p className="desc font-primary font-normal text-fig-24 text-left text-secondary mb-0">
                        Mint soulbound tokens of the causes you care about
                      </p>
                    </div>
                  </div>

                  <div className="how-it-work-anim-cont w-full relative">
                    <div className="how-it-work-anim-img relative">
                      <Image
                        src="/images/card-img-1.png"
                        alt="superfandom anim-modal-img"
                        className="anim-modal-img"
                        width="382px"
                        height="502px"
                      />
                      <ul className="shadow-image-box absolute left-0 top-0 w-full h-full">
                        <li className="shadow-image-item absolute left-[109px] top-[-37px] w-full z-[-9]">
                          <Image
                            src="/images/card-img-11.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                        <li className="shadow-image-item absolute w-full z-[-12] left-[251px] top-[-76px]">
                          <Image
                            src="/images/card-img-18.png"
                            alt="superfandom anim-modal-img"
                            className="anim-modal-img"
                            width="382px"
                            height="502px"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="how-it-work-anim-btn-box absolute bottom-0 left-0">
                     <Link href="/">
                     <a
                        className="anim-item-btn font-primary relative bottom-[161px] font-normal flex items-center justify-between text-fig-24 text-center text-primary border border-solid border-primary bg-secondary uppercase py-5 px-[45px] w-[245px]  rounded-[40px]"
                      >
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                        <span className="stars">
                          <ImStarFull />
                        </span>
                      </a>
                     </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWork;
