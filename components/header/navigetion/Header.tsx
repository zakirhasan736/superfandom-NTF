import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu , HiX } from "react-icons/hi";
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [open, setOpen] = useState(false)
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between bg-primary absolute top-0 left-0 z-50 pt-[50px] ${className}`}
    >
      <div className="container lg:container md:container sm:container 2xl:px-12 xl:px-12 lg:px-8 md:px-5 sm:px-4 md:px-0">
      <nav className='navbar'>
                <div className="nav-contantwrapper flex items-center justify-between md:block">

                    <div className="navbar-wrapper md:flex md:items-center md:justify-between">
                        <div className="nav-logo w-[222px] h-[66px]" >
                          <div className="brand-logo-box absolute top-[12px]">
                          <Image src="/images/brand-logo.png"
                             alt="superfandom logo"
                             className="brand-image absolute top-[-20px]"
                             width="272px"
                             height="251px"
                             
                              />
                          </div>
                            
                        </div>
                        <div className="hamgur-bar hidden md:block text-secondary text-[40px]" onClick={() => setOpen(!open)}>
                            <span>{open ? <HiX /> : <HiMenu />}</span> 
                        </div>
                    </div>

                    <div className={`navbar-cont-box flex items-center md:block md:absolute md:left-0 md:top-[105px] md:pt-[40px] md:pb-[103px] md:z-50 md:bg-primary md:w-full ${open && "navbar-box-active"}`}>
                    <ul className="nav-items flex items-center mr-[76px] lg:mr-[30px] md:mr-0 md:block md:mb-16">
                        <li className='uppercase font-primary font-normal text-secondary p-5 mr-5 md:mr-0 text-fig-15 md:text-fig-32 md:w-full md:p-8 md:border-t md:border-solid md:border-secondary md:text-center '><Link href="/">CAUSES</Link></li>
                        <li className='uppercase font-primary font-normal text-secondary p-5 mr-5 md:mr-0 text-fig-15 md:text-fig-32 md:w-full md:p-8 md:border-t md:border-solid md:border-secondary md:text-center '><Link href="/">FANDOMS</Link></li>
                        <li className='uppercase font-primary font-normal text-secondary p-5 mr-5 md:mr-0 text-fig-15 md:text-fig-32 md:w-full md:p-8 md:border-t md:border-solid md:border-secondary md:text-center '><Link href="/">CAMPAIGN</Link></li>
                        <li className='uppercase font-primary font-normal text-secondary p-5 mr-0 md:mr-0 text-fig-15 md:text-fig-32 md:w-full md:p-8 md:border-t md:border-solid md:border-secondary md:text-center '><Link href="/">SERVICES</Link></li>
                    </ul>
                    <ul className="navbar-btn-items md:px-4 flex items-center md:block">
                        <li className='uppercase font-primary font-normal text-secondary text-fig-15 p-5 md:mb-4 md:w-full md:max-auto md:p-5 md:border md:border-solid md:border-secondary md:text-center md:rounded-[40px] md:bg-primary md:hover:bg-secondary md:hover:text-primary'><Link href="/">log in</Link></li>
                        <li className='uppercase font-primary font-normal text-secondary text-fig-15 p-5 mr-5 md:mr-0 md:w-full md:max-auto md:p-5 md:border md:border-solid md:border-secondary md:text-center md:rounded-[40px] md:bg-secondary md:text-primary md:hover:bg-primary md:hover:text-secondary border border-solid border-secondary rounded-[40px] hover:bg-secondary hover:text-primary'><Link href="/">Sign up</Link></li>
                    </ul>
                    </div>
                </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;