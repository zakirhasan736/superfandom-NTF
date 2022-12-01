import Image from 'next/image';
import { IFooter } from '../../../typings/types';
import FooterLink from './FooterLink';
import ServiceLink from './ServiceLink';
import SocialLink from './SocialLink';

const Footer: React.FC<IFooter> = ({ className, pageName, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full footer-section bg-secondary ${className}`}
    >
      <div className="footer-mobo-spaching"></div>
      <div className="container 2xl:container xl:container lg:container 2xl:px-12 pb-[50px] xl:px-12  lg:p-0 ">
        <div className="footer-wrapper-box rounded-[24px] bg-primary flex items-center lg:block lg:rounded-none">
          <div className="footer-brandlogo  border-r border-solid flex items-center border-secondary lg:block lg:w-full lg:text-center py-[132px] px-[108px] desktop-m:px-[62px] laptop-x:px-[40px]  laptop-x:py-[80px] lg:py-8 lg:px-[77px] sm:px-16">
            <Image
              src="/images/footer-logo.svg"
              alt="superfandom logo"
              className="brand-image"
              width="222px"
              height="60px"
            />
          </div>
          <div className="footer-contant-box w-full">
            <ul className="footer-link-items flex items-center border-b border-solid border-secondary w-full py-[85px] px-[84px] laptop-x:py-12 laptop-x:px-14 lg:block lg:p-0 lg:text-center">
              <FooterLink name="CAUSES" title="causespage" href="/causespage" pageName={pageName} />
              <FooterLink name="FANDOMS" title="fandom" href="/fandom" pageName={pageName} />
              <FooterLink name="CAMPAIGN" title="campaign" href="/campaign" pageName={pageName} />
              <FooterLink name="SERVICES" title="/" href="/" pageName={pageName} />
            </ul>
            <div className="footer-contant-wrap flex items-center justify-between px-[85px] py-[37px] laptop-x:px-[45px] laptop-x:py-5 laptop-m:px-4 lg:block lg:p-0">
              <ul className="footer-socials-icons flex items-center  lg:border-b lg:border-solid lg:border-secondary lg:justify-center lg:py-8">
                <SocialLink img={"telegram 1.png"} />
                <SocialLink img={"instagram 1.png"} />
                <SocialLink img={"twitte-1.png"} />
              </ul>
              <div className="footer-copyright ">
                <p className="font-primary font-normal text-fig-base laptop-m:text-xs lg:text-fig-base sm:text-fig-xs text-darkgray lg:pt-8 lg:pb-2 lg:text-center">
                  Superfandom © Copyright 2022. (Product of Rare Sense Inc.)
                </p>
              </div>

              <ul className="footer-info-links flex items-center lg:pb-2.5 lg:justify-center">
                <ServiceLink name={"Terms of Service"} />
                <ServiceLink name={"Privacy Policy"} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
