import { NextPage } from 'next';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetails: NextPage<any> = () => {
  const [more, setMore] = useState(false);
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
                    src="/images/product-details-1.png"
                    alt="superfandom product-details-img"
                    className="product-details-img "
                    width="570px"
                    height="570px"
                  />
                </div>
                <div className="product-cont-box desc-box bg-lightgray p-10 lg:p-5 mb-0 rounded-[20px] sm:mb-4 sm:hidden">
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

              <div className="product-details-right-cont w-full">
                <div className="product-cont-box desc-box bg-lightgray p-10 lg:p-5 rounded-[20px] mb-8 md:mb-4 w-full">
                  <h3 className="product-cont-title  mb-4">
                    Sale in progress
                  </h3>
                  <div className="price-list-box">
                    <div className="price-details mb-4">
                      <h4 className="list-title mb-4  font-primary font-normal text-left text-fig-15 sm:text-fig-12 text-primary uppercase">
                        <span className="mr-4 text-darkgray">
                          Current price
                        </span>
                      </h4>
                      <div className="product-price-box">
                        <h3 className="price-title mb-4">
                          <span className="text-fig-32 text-primary text-left font-primary font-normal mr-4">
                            1,324 STX
                          </span>
                          <span className="text-fig-15 text-darkgray text-left font-primary font-normal sm:text-fig-12">
                            $896
                          </span>
                        </h3>
                        <div className="product-price-btn-box text-center flex sm:flex sm:flex-col sm:px-0">
                          <Link href="/">
                            <a className="primary-btn">
                              buy now
                            </a>
                          </Link>
                          <button
                            onClick={() => setOpen(!open)}
                            className="secondary-btn"
                          >
                            make offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${more
                      ? 'h-100 transition-all duration-300 ease-in-out sm:mb-4'
                      : 'h-20 sm:h-16 transition-all sm:mb-4 duration-300 ease-in-out'
                    } product-cont-box desc-box bg-lightgray p-10 lg:p-5 mb-0 rounded-[20px] w-full overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  <div className=" mb-0 product-cont-title flex items-center justify-between">
                    <h3>Offers</h3>
                    <div
                      onClick={() => setMore(!more)}
                      className={`${more ? 'rotate-360' : 'rotate-90'
                        } cursor-pointer`}
                    >
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="offer-list-box">
                    <div className="offer-details mb-4">
                      <table className="offer-table w-full">
                        <thead>
                          <tr>
                            <th className="uppercase table-heading">
                              Value
                            </th>
                            <th className="uppercase table-heading">
                              Expires in
                            </th>
                            <th className="uppercase table-heading">
                              From
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="table-details text-primary  border-b border-secondary">
                              82,377 STX
                            </td>
                            <td className="table-details text-primary  border-b border-secondary">
                              2 hours
                            </td>
                            <td className="table-details text-skyblue border-b border-secondary">
                              boredorangutan
                            </td>
                          </tr>
                          <tr>
                            <td className="table-details text-primary  border-b border-secondary">
                              54,918 STX
                            </td>
                            <td className="table-details text-primary  border-b border-secondary">
                              3 days
                            </td>
                            <td className="table-details text-skyblue border-b border-secondary">
                              mhb11
                            </td>
                          </tr>
                          <tr>
                            <td className="table-details text-primary  border-b border-secondary">
                              24,614 STX
                            </td>
                            <td className="table-details text-primary  border-b border-secondary">
                              48 mins
                            </td>
                            <td className="table-details text-skyblue border-b border-secondary">
                              crypto_phunk
                            </td>
                          </tr>
                          <tr>
                            <td className="table-details text-primary">
                              2,746 STX
                            </td>
                            <td className="table-details text-primary">
                              3 weeks
                            </td>
                            <td className="table-details text-skyblue">
                              randomd00d
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
        <div
          className={`${open ? 'block' : 'hidden'
            } fixed z-50 inset-y-0 w-full h-full left-0 right-8 flex items-center justify-center`}
        >
          <div className="shadow border rounded bg-black w-48 h-48 text-white">
            <button onClick={() => setOpen(!open)}>close</button>
            <h2>Modal title</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
