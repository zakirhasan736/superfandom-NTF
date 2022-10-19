import { NextPage } from 'next';
import Image from 'next/image';

const Explore: NextPage<any> = ({}) => {
  return (
    <>
      <section className="explore-section w-full bg-secondary pt-[132px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10">
        <div className="custom-container 2xl:px-0 xl:px-0 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox mb-16 md:mb-4">
            <h2 className="section-title font-primary font-normal text-fig-3x text-left text-primary laptop-x:text-6xl md:text-fig-40 uppercase">
              Explore & collect
            </h2>
          </div>
        </div>
        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:px-12 xl:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="explore-content-wrapper pt-12 md:pt-0 md:rounded-none md:pb-0 pb-[51px] px-0 bg-primary overflow-hidden md:bg-transparent">
            <div className="explore-slidebox mb-12 md:mb-8">
              <ul className="slides-image-box grid grid-cols-5 gap-5 md:grid-cols-2 sm:grid-cols-1 text-center">
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-7.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-13.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-18.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-4.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
                <li className="slide-image-items">
                  <Image
                    src="/images/card-img-5.png"
                    alt="superfandom slide-image"
                    className="slide-image "
                    width="382px"
                    height="520px"
                  />
                </li>
              </ul>
            </div>
            <div className="explore-btn-box text-center">
              <a
                href="/"
                className="md:block md:mb-4 md:mr-0 uppercase p-5 font-primary font-normal text-fig-15 text-primary rounded-[40px] bg-secondary border border-solid border-secondary mr-5 hover:bg-transparent hover:text-secondary transition duration-150 ease-out md:bg-primary md:text-secondary md:border md:border-solid md:border-primary md:hover:text-primary"
              >
                Explore Causes
              </a>
              <a
                href="/"
                className="md:block uppercase p-5 font-primary font-normal text-fig-15 text-secondary rounded-[40px] bg-transparent border border-solid border-secondary hover:bg-secondary hover:text-primary transition duration-150 ease-out md:bg-transparent md:text-primary md:border md:border-solid md:border-primary"
              >
                Explore Causes
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
