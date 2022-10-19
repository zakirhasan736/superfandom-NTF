import Image from 'next/image';
import Link from 'next/link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full footer-section bg-secondary ${className}`}
    >
      <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:px-12 pb-[50px] xl:px-12 lg:px-8 md:px-5 sm:p-0 ">
        <div className="footer-wrapper-box rounded-[24px] bg-primary flex items-center md:block">
          <div className="footer-brandlogo flex items-center border-r border-solid border-secondary w-[436px] h-[330px] md:block md:w-full md:h-[131px] md:text-center md:relative">
          <Image src="/images/footer-logo.png"
                             alt="superfandom logo"
                             className="brand-image md:absolute"
                             width="272px"
                             height="251px"
                              />
          </div>
          <div className="footer-contant-box w-full">
            <ul className="footer-link-items flex items-center border-b border-solid border-secondary w-full pt-[90px] px-[84px] pb-[104px] md:block md:p-0 md:text-center">
              <li className="font-primary text-fig-32 font-normal text-secondary md:py-4 md:border-t md:border-solid md:border-secondary">
                <Link href="/">CAUSES</Link>
              </li>
              <li className="font-primary text-fig-32 font-normal text-secondary md:py-4 md:border-t md:border-solid md:border-secondary">
                <Link href="/">FANDOMS</Link>
              </li>
              <li className="font-primary text-fig-32 font-normal text-secondary md:py-4 md:border-t md:border-solid md:border-secondary">
                <Link href="/">CAMPAIGN</Link>
              </li>
              <li className="font-primary text-fig-32 font-normal text-secondary md:py-4 md:border-t md:border-solid md:border-secondary">
                <Link href="/">SERVICES</Link>
              </li>
              
            </ul>
            <div className="footer-contant-wrap flex items-center justify-between px-[85px] py-[37px] md:block md:p-0">
              <ul className="footer-socials-icons flex items-center  md:border-b md:border-solid md:border-secondary md:justify-center md:py-8">
                <li className='font-primary cursor-pointer text-secondary'>
                  <Link href="/">
                           <Image src="/images/icon/telegram 1.png"
                             alt="superfandom logo"
                             className="brand-image "
                             width="32px"
                             height="32px"
                              />
                  </Link>
                </li>
                <li className='font-primary cursor-pointer text-secondary'>
                  <Link href="/">
                           <Image src="/images/icon/instagram 1.png"
                             alt="superfandom logo"
                             className="brand-image "
                             width="32px"
                             height="32px"
                              />
                  </Link>
                </li>
                <li className='font-primary cursor-pointer text-secondary'>
                  <Link href="/">
                           <Image src="/images/icon/twitte-1.png"
                             alt="superfandom logo"
                             className="brand-image "
                             width="32px"
                             height="32px"
                              />
                  </Link>
                </li>

              </ul>
              <div className="footer-copyright "><p className='font-primary font-normal text-fig-base text-darkgray md:pt-8 md:pb-2 md:text-center'>Superfandom © Copyright 2022. (Product of Rare Sense Inc.)</p></div>
              <ul className="footer-info-links flex items-center md:pb-2.5 md:justify-center">
                <li className='font-primary font-normal text-fig-base text-darkgray'>
                  <Link href="/">Terms of Service</Link>
                </li>
                <li className='font-primary font-normal text-fig-base text-darkgray'>
                  <Link href="/">Privacy Policy</Link>
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
