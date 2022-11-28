import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetails2: NextPage<any> = () => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="product-details-section relative w-full px-0 bg-secondary pt-44 md:pt-32 overflow-hidden">
        <div className="product-details-wrapper w-full z-10 relative">
          <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
            <div className="product-details-cont-wrapper flex items-start gap-8 sm:block">
              <div className="product-details-left-cont max-w-[570px] w-full ">
                <div className="product-modal-img max-w-[570px] max-h-[570px] w-full h-full mb-8 md:mb-4">
                  <Image
                    src="/images/product-details-2.png"
                    alt="superfandom product-details-img"
                    className="product-details-img "
                    width="570px"
                    height="570px"
                  />
                </div>
                <div className="product-cont-box desc-box bg-lightgray p-10 lg:p-5 mb-0 rounded-[20px] md:mb-8 sm:hidden">
                  <h3 className="product-cont-title mb-4">
                    Description
                  </h3>
                  <div className="description-list-box">
                    <div className="desceiption-details mb-4">
                      <h4 className="list-title mb-4">
                        <span className="mr-4 text-darkgray">by</span> Doctors
                        Without Borders
                      </h4>
                      <p className="list-desc">
                        The holder of this soulbound token will have an
                        exclusive meetup with Kumail, where they get to talk to
                        Kumail about any topic for up to 10 minutes
                      </p>
                    </div>
                    <div className="desceiption-details mb-0">
                      <h4 className="list-title mb-4">
                        <span className="mr-4 text-darkgray">note</span>
                      </h4>
                      <p className="list-desc">
                        The holder of this soulbound token will have an
                        exclusive meetup with Kumail, where they get to talk to
                        Kumail about any topic for up to 10 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-details-right-cont w-full">
                <div className="product-cont-box desc-box bg-lightgray p-10 md:p-5 rounded-[20px] mb-8 w-full md:mb-4">
                  <h3 className="mb-4 product-cont-title">
                    Mint price
                  </h3>
                  <div className="price-list-box">
                    <div className="price-details mb-4 sm:mb-0">
                      <h4 className="list-title mb-4 font-primary font-normal text-left text-fig-15 md:text-fig-12 md:mb-2 text-primary uppercase">
                        <span className="mr-4 text-darkgray">
                          Current price
                        </span>
                      </h4>
                      <div className="product-price-box">
                        <h3 className="price-title mb-4">
                          <span className="text-fig-32 text-primary text-left font-primary font-normal mr-4">
                            30 STX
                          </span>
                          <span className="text-fig-15 text-darkgray text-left font-primary font-normal sm:text-fig-xs">
                            $10
                          </span>
                        </h3>
                        <div className="product-price-btn-box text-center flex sm:flex sm:flex-col sm:px-0">
                          <div className="update-product flex items-center justify-between font-primary sm:mb-4 uppercase font-normal text-fig-15 text-primary  rounded-[40px] bg-transparent border border-solid border-primary transition duration-150 ease-out md:border-primary max-w-[180px] w-full md:text-primary mr-5 sm:max-w-full">
                            <div
                              onClick={() =>
                                count > 1 && setCount((prev) => prev - 1)
                              }
                              className="inc-box cursor-pointer py-[17px] pl-5"
                            >
                              <img src="/images/minus.png" alt="icon" />
                            </div>
                            <div className="upd-numb font-primary font-normal text-fig-32 text-center text-primary">
                              {count}
                            </div>
                            <div
                              onClick={() => setCount((prev) => prev + 1)}
                              className="dec-box cursor-pointer py-[17px] pr-5"
                            >
                              <img src="/images/plus.png" alt="icon" />
                            </div>
                          </div>

                          <button
                            onClick={() => setOpen(!open)}
                            className="primary-btn"
                          >
                            mint
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-cont-box desc-box bg-lightgray p-10 md:p-5 mb-0 rounded-[20px] w-full sm:mb-4">
                  <div className="offer-list-box">
                    <div className="offer-details mb-4">
                      <table className="offer-table w-full">
                        <thead>
                          <tr>
                            <th className="border-b uppercase table-heading">
                              minted
                            </th>
                            <th className="border-b uppercase table-heading">
                              Editions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-primary table-details">
                              82,377 STX
                            </td>
                            <td className="text-primary table-details">
                              2 hours
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* ===mobile view for details layout */}
                <div className="product-cont-box desc-box bg-lightgray p-10 lg:p-5 mb-0 rounded-[20px] hidden sm:block">
                  <h3 className="mb-4 product-cont-title"> 
                    Description
                  </h3>
                  <div className="description-list-box">
                    <div className="desceiption-details mb-4">
                      <h4 className="list-title mb-4">
                        <span className="mr-4 text-darkgray">by</span> Doctors
                        Without Borders
                      </h4>
                      <p className="list-desc">
                        The holder of this soulbound token will have an
                        exclusive meetup with Kumail, where they get to talk to
                        Kumail about any topic for up to 10 minutes
                      </p>
                    </div>
                    <div className="desceiption-details mb-0">
                      <h4 className="list-title mb-4">
                        <span className="mr-4 text-darkgray">note</span>
                      </h4>
                      <p className="list-desc">
                        The holder of this soulbound token will have an
                        exclusive meetup with Kumail, where they get to talk to
                        Kumail about any topic for up to 10 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <div
          className={`${
            open ? 'block' : 'hidden'
          } fixed z-[9999] inset-y-0 w-full h-full left-0 right-8 flex items-center justify-center px-6 popup-box`}
        >
          <div className="border bg-secondary max-w-[1000px] rounded-[20px] w-full px-5 pt-5 pb-24">
            <div className="close-button-box flex justify-end w-full">
              <button onClick={() => setOpen(!open)} className="md:w-[45px] sm:w-[32px] md:h-[45px] sm:h-[32px]">
                <Image
                  src="/images/close.png"
                  alt="superfandom popup close icon"
                  className="close-popup"
                  width="64px"
                  height="64px"
                />
              </button>
            </div>
            <h2 className="main-title pt-4 pb-6 text-fig-32 text-primary uppercase text-center">
              Pay via
            </h2>
            <div className="hightlight-wallet-box w-full text-center flex justify-center py-8 border-t-[1px] border-b-[1px] border-darkgray">
              <div className="wallet-box max-w-[460px] ">
                <h4 className="wallet-name">
                  hiro wallet
                </h4>
                <Link
                  href="/"
                  className="wallet-link-button text-fig-15 px-5 max-w-[180px] w-full bg-primary"
                >
                  <a className="wallet-link-button">
                    connect
                  </a>
                </Link>
              </div>
            </div>
          <div className="wallet-cont-wrap">
            <p className="text-highlight-point w-full text-center text-fig-base text-primary font-normal font-primary py-8">
              <span className='text-fig-base text-primary font-normal font-primary block'>Or use other payment methods</span>
              <span className='text-fig-xs block text-primary font-normal font-primary' >{`(We keep token custody in these)`}</span>
            </p>
          <div className="wallet-items-wrapper flex justify-center">
              <div className="wallet-items-box max-w-[460px] w-full">
                <div className="wallet-box mb-4">
                  <h4 className="wallet-name">
                  metamask
                  </h4>
                  <Link
                    href="/"
                    className="wallet-link-button text-fig-15 px-5 max-w-[180px] w-full bg-primary"
                  >
                    <a className="wallet-link-button">
                      connect
                    </a>
                  </Link>
                </div>
                {/* ---------- */}
                <div className="wallet-box mb-4">
                  <h4 className="wallet-name">
                  Coinbase Commerce
                  </h4>
                  <Link
                    href="/"
                    className="wallet-link-button text-fig-15 px-5 max-w-[180px] w-full bg-primary"
                  >
                    <a className="wallet-link-button">
                      connect
                    </a>
                  </Link>
                </div>
                {/* ---------------- */}
                <div className="wallet-box mb-4">
                  <h4 className="wallet-name">
                  Coinbase Commerce
                  </h4>
                  <Link
                    href="/"
                    className="wallet-link-button text-fig-15 px-5 max-w-[180px] w-full bg-primary"
                  >
                     <a className="wallet-link-button">
                      connect
                    </a>
                  </Link>
                </div>
                {/* ------------------ */}
                <div className="wallet-box mb-0 ">
                  <h4 className="wallet-name">
                  Visa/Mastercard
                  </h4>
                  <Link
                    href="/"
                    className="wallet-link-button text-fig-15 px-5 max-w-[180px] w-full bg-primary"
                  >
                       <a className="wallet-link-button">
                      connect
                    </a>
                  </Link>
                </div>
                {/* ------------------ */}
              </div>
            </div>

          </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails2;
