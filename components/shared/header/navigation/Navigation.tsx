import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { INavigation } from '../../../../typings/types';

const Header: React.FC<INavigation> = ({
  className,
  pageName,
  headerNext,

  ...headerProps
}) => {
  const [open, setOpen] = useState(false);
  return (
    <header
      {...headerProps}
      className={`${headerNext ? 'bg-white white-varient-navbar' : 'bg-primary'
        } w-full flex flex-row justify-between bg-primary absolute top-0 left-0 z-[9999] pt-[50px] sm:pt-8 ${className}`}
    >
      <div className="container lg:container md:container sm:container 2xl:px-12 xl:px-12 lg:px-8  sm:px-4 md:px-0">
        <nav className="navbar">
          <div className="nav-contantwrapper flex items-center justify-between md:block">
            <div className="navbar-wrapper md:flex md:items-center md:justify-between relative md:px-8 sm:px-3 z-[99999]">
              <div className="nav-logo w-[222px] h-[60px] sm:w-[170px] sm:h-auto">
                <div className="brand-logo-box">
                  <Link href="/">
                    <a>
                      <Image
                        src={`${headerNext
                            ? '/images/brand-logo-fill.svg'
                            : '/images/brand-logo.svg'
                          }`}
                        alt="superfandom logo"
                        className="brand-image"
                        width="222px"
                        height="60px"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="hamgur-bar hidden md:block text-secondary text-[40px]"
                onClick={() => setOpen(!open)}
              >
                <span>{open ? <HiX /> : <HiMenu />}</span>
              </div>
            </div>

            <div
              className={`navbar-cont-box flex items-center  md:block md:absolute md:left-0 md:top-0 md:pt-[166px] sm:pt-[120px] md:pb-[103px] md:z-[9999] md:bg-primary md:w-full ${open && 'navbar-box-active'
                }`}
            >
              <ul className="nav-items flex items-center mr-[76px] lg:mr-[25px] md:mr-0  md:mb-16 md:hidden">
                <li className="nav-items-link ">
                  <Link href="/">
                    <a>explore</a>
                  </Link>
                </li>
              </ul>
              <ul className="nav-items items-center mr-[76px] lg:mr-[25px] md:mr-0 md:mb-16 hidden md:block">
                <li
                  className={`${pageName === 'causes' ? 'text-neon' : ''
                    } nav-items-link`}
                >
                  <Link href="/causespage">
                    <a>CAUSES</a>
                  </Link>
                </li>
                <li
                  className={`${pageName === 'fandom' ? 'text-neon' : ''
                    } nav-items-link`}
                >
                  <Link href="/fandom">
                    <a>FANDOMS</a>
                  </Link>
                </li>
                <li
                  className={`${pageName === 'campaign' ? 'text-neon' : ''
                    } nav-items-link`}
                >
                  <Link href="/campaign">
                    <a>CAMPAIGN</a>
                  </Link>
                </li>
                <li className="nav-items-link md:border-b ">
                  <Link href="/">
                    <a>SERVICES</a>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-btn-items md:px-4 flex items-center md:block">
                <li className="md:mb-4 nav-btn-link md:max-auto  md:bg-primary md:hover:bg-secondary md:hover:text-primary">
                  <Link href="/">
                    <a>log in</a>
                  </Link>
                </li>
                <li className="mr-5 md:mr-0 nav-btn-link md:max-auto  hover:text-primary md:bg-secondary md:text-primary md:hover:bg-primary md:hover:text-secondary border border-solid border-secondary rounded-[40px] hover:bg-secondary ">
                  <Link href="/">
                    <a>Sign up</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;