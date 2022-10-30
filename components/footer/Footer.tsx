import Image from 'next/image';
import Link from 'next/link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {
  pageName:string;
}

const Footer: React.FC<IFooter> = ({ className,pageName, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full footer-section bg-secondary ${className}`}
    >
      <div className="container 2xl:container xl:container lg:container 2xl:px-12 pb-[50px] xl:px-12  lg:p-0 ">
        <div className="footer-wrapper-box rounded-[24px] bg-primary flex items-center lg:block lg:rounded-none">
          <div className="footer-brandlogo  border-r border-solid flex items-center border-secondary lg:block lg:w-full lg:text-center py-[132px] px-[108px] desktop-m:px-[62px] laptop-x:px-[40px]  laptop-x:py-[80px] lg:py-8 lg:px-[77px]">
            <Image
              src="/images/footer-logo.png"
              alt="superfandom logo"
              className="brand-image"
              width="222px"
              height="66px"
            />
          </div>
          <div className="footer-contant-box w-full">
            <ul className="footer-link-items flex items-center border-b border-solid border-secondary w-full py-[85px] px-[84px] laptop-x:py-12 laptop-x:px-14 lg:block lg:p-0 lg:text-center">
              <li className={`${pageName==="causes"?"text-neon":""} font-primary text-fig-32 font-normal text-secondary laptop-x:text-2xl laptop-m:text-xl lg:text-lg md:text-fig-15 lg:py-4 lg:border-t lg:border-solid lg:border-secondary`}>
                <Link href="/causespage">
                  <a>CAUSES</a>
                </Link>
              </li>
              <li  className={`${pageName==="fandom"?"text-neon":"" } font-primary text-fig-32 font-normal text-secondary laptop-x:text-2xl laptop-m:text-xl lg:text-lg md:text-fig-15 lg:py-4 lg:border-t lg:border-solid lg:border-secondary`}>
                <Link href="/fandom">
                  <a>FANDOMS</a>
                </Link>
              </li>
              <li className={`${pageName==="campaign"?"text-neon":"" } font-primary text-fig-32 font-normal text-secondary laptop-x:text-2xl laptop-m:text-xl lg:text-lg md:text-fig-15 lg:py-4 lg:border-t lg:border-solid lg:border-secondary`}>
                <Link href="/campaign">
                  <a>CAMPAIGN</a>
                </Link>
              </li>
              <li className="font-primary text-fig-32 font-normal text-secondary laptop-x:text-2xl laptop-m:text-xl lg:text-lg md:text-fig-15 lg:py-4 lg:border-t lg:border-solid lg:border-secondary">
                <Link href="/">
                  <a>SERVICES</a>
                </Link>
              </li>
            </ul>
            <div className="footer-contant-wrap flex items-center justify-between px-[85px] py-[37px] laptop-x:px-[45px] laptop-x:py-5 laptop-m:px-4 lg:block lg:p-0">
              <ul className="footer-socials-icons flex items-center  lg:border-b lg:border-solid lg:border-secondary lg:justify-center lg:py-8">
                <li className="font-primary cursor-pointer text-secondary laptop-x:w-6">
                  <Link href="/">
                    <Image
                      src="/images/icon/telegram 1.png"
                      alt="superfandom logo"
                      className="brand-image w-[24px]"
                      width="32px"
                      height="32px"
                    />
                  </Link>
                </li>
                <li className="font-primary cursor-pointer text-secondary laptop-x:w-6">
                  <Link href="/">
                    <Image
                      src="/images/icon/instagram 1.png"
                      alt="superfandom logo"
                      className="brand-image w-[24px]"
                      width="32px"
                      height="32px"
                    />
                  </Link>
                </li>
                <li className="font-primary cursor-pointer text-secondary laptop-x:w-6">
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/icon/twitte-1.png"
                        alt="superfandom logo"
                        className="brand-image w-[24px]"
                        width="32px"
                        height="32px"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="footer-copyright ">
                <p className="font-primary font-normal text-fig-base laptop-m:text-xs lg:text-fig-base sm:text-fig-xs text-darkgray lg:pt-8 lg:pb-2 lg:text-center">
                  Superfandom © Copyright 2022. (Product of Rare Sense Inc.)
                </p>
              </div>

              <ul className="footer-info-links flex items-center lg:pb-2.5 lg:justify-center">
                <li className="font-primary font-normal text-fig-base text-darkgray laptop-m:text-xs lg:text-fig-base sm:text-fig-xs">
                  <Link href="/">
                    <a>Terms of Service</a>
                  </Link>
                </li>
                <li className="font-primary font-normal text-fig-base text-darkgray laptop-m:text-xs lg:text-fig-base sm:text-fig-xs">
                  <Link href="/">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
