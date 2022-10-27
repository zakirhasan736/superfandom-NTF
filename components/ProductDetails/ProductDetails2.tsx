import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductDetails2: NextPage<any> = () => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="product-details-section relative w-full px-0 bg-secondary pt-44 overflow-hidden">
        <div className="product-details-wrapper w-full z-10 relative lg:pt-[80px] lg:pb-[80px] md:pt-8 md:pb-8">
          <div className="custom-container 2xl:px-0 xl:px-0 laptop-x:px-12 md:px-5 sm:px-4">
            <div className="product-details-cont-wrapper flex items-start gap-8">
              <div className="product-details-left-cont max-w-[570px] w-full ">
                <div className="product-modal-img max-w-[570px] max-h-[570px] w-full h-full mb-8">
                  <Image
                    src="/images/product-details-2.png"
                    alt="superfandom product-details-img"
                    className="product-details-img "
                    width="570px"
                    height="570px"
                  />
                </div>
                <div className="product-cont-box desc-box bg-lightgray px-10 py-10 mb-0 rounded-[20px]">
                  <h3 className="product-cont-title text-primary text-left text-fig-24 font-primary font-normal mb-4 pb-4 border-b border-secondary">
                    Description
                  </h3>
                  <div className="description-list-box">
                    <div className="desceiption-details mb-4">
                      <h4 className="list-title mb-4  font-primary font-normal text-left text-fig-15 text-primary uppercase">
                        <span className="mr-4 text-darkgray">by</span> Doctors
                        Without Borders
                      </h4>
                      <p className="list-desc text-primary text-left text-fig-4 font-primary font-normal">
                        The holder of this soulbound token will have an
                        exclusive meetup with Kumail, where they get to talk to
                        Kumail about any topic for up to 10 minutes
                      </p>
                    </div>
                    <div className="desceiption-details mb-0">
                      <h4 className="list-title mb-4  font-primary font-normal text-left text-fig-15 text-primary uppercase">
                        <span className="mr-4 text-darkgray">note</span>
                      </h4>
                      <p className="list-desc text-primary text-left text-fig-4 font-primary font-normal">
                        The holder of this soulbound token will have an
                        exclusive meetup with Kumail, where they get to talk to
                        Kumail about any topic for up to 10 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-details-right-cont w-full">
                <div className="product-cont-box desc-box bg-lightgray px-10 py-10 rounded-[20px] mb-8 w-full">
                  <h3 className="product-cont-title text-primary text-left text-fig-24 font-primary font-normal mb-4 pb-4 border-b border-secondary">
                    Mint price
                  </h3>
                  <div className="price-list-box">
                    <div className="price-details mb-4">
                      <h4 className="list-title mb-4  font-primary font-normal text-left text-fig-15 text-primary uppercase">
                        <span className="mr-4 text-darkgray">
                          Current price
                        </span>
                      </h4>
                      <div className="product-price-box">
                        <h3 className="price-title mb-4">
                          <span className="text-fig-32 text-primary text-left font-primary font-normal mr-4">
                            30 STX
                          </span>
                          <span className="text-fig-15 text-darkgray text-left font-primary font-normal">
                            $10
                          </span>
                        </h3>
                        <div className="product-price-btn-box text-center flex sm:flex sm:flex-col sm:px-4">
                          <div className="update-product flex items-center justify-between p-5 font-primary uppercase font-normal text-fig-15 text-primary  rounded-[40px] bg-transparent border border-solid border-primary transition duration-150 ease-out md:border-primary max-w-[180px] w-full md:text-primary mr-5">
                            <div
                              onClick={() =>
                                count > 1 && setCount((prev) => prev - 1)
                              }
                              className="inc-box cursor-pointer"
                            >
                              <img src="/images/minus.png" alt="icon" />
                            </div>
                            <div className="upd-numb font-primary font-normal text-fig-32 text-center text-primary">
                              {count}
                            </div>
                            <div
                              onClick={() => setCount((prev) => prev + 1)}
                              className="dec-box cursor-pointer"
                            >
                              <img src="/images/plus.png" alt="icon" />
                            </div>
                          </div>

                          <button
                            onClick={() => setOpen(!open)}
                            className="p-5 font-primary uppercase font-normal text-fig-15 text-secondary sm:mb-5 sm:mr-0 rounded-[40px] bg-primary border md:hover:text-secondary border-solid border-primary mr-5 hover:bg-transparent hover:text-primary transition max-w-[180px] w-full duration-150 ease-out md:bg-secondary md:hover:text-secondary md:hover:border-primary"
                          >
                            mint
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-cont-box desc-box bg-lightgray px-10 py-10 mb-0 rounded-[20px] w-full">
                  <div className="offer-list-box">
                    <div className="offer-details mb-4">
                      <table className="offer-table w-full">
                        <thead>
                          <tr>
                            <th className="border-b uppercase  border-secondary font-primary font-normal text-darkgray text-fig-15 text-left py-2">
                              minted
                            </th>
                            <th className="border-b uppercase  border-secondary font-primary font-normal text-darkgray text-fig-15 text-left py-2">
                              Editions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-primary font-normal text-primary text-fig-15 text-left py-2">
                              82,377 STX
                            </td>
                            <td className="font-primary font-normal text-primary text-fig-15 text-left py-2">
                              2 hours
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default ProductDetails2;
