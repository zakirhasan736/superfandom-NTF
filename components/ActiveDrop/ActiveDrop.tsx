import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import ActiveCard, { IActiveCard } from '../Card/ActiveCard/ActiveCard';

const ActiveDrop: NextPage<any> = ({ drops }) => {
  return (
    <>
      <section className="active-drop-section w-full bg-primary pt-[142px] laptop-m:pt-[65px]  md:pt-8 pb-16 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-4">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-secondary laptop-x:text-6xl md:text-fig-40 uppercase">
              Active Drops
            </h2>
          </div>
        </div>

        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:pl-12 2xl:pr-12 xl:pl-12 xl:pr-12 lg:pl-8 lg:pr-8 md:px-0 sm:px-0">
          <div className="active-drop-content-wrapper px-28 py-[100px] sm:pb-8 w-full h-full bg-primary md:bg-secondary sm:rounded-0">
            <div className="active-drop-slidebox mb-16">
              <ul className="active-drop-slides-cards flex no-wrap gap-5">
                {drops.map(
                  ({
                    _id,
                    bgImage,
                    status,
                    image,
                    statusColor,
                    title,
                    description,
                    slug,
                  }: IActiveCard) => (
                    <Link
                      href={'/campaign/[id]/[slug]'}
                      as={`/campaign/${_id}/${slug}`}
                      key={_id}
                    >
                      <li
                        className="active-drop-cards-items w-[518px] h-[432px]"
                        key={_id}
                      >
                        <ActiveCard
                          _id={_id}
                          bgImage={bgImage}
                          description={description}
                          title={title}
                          image={image}
                          status={status}
                          statusColor={statusColor}
                        />
                      </li>
                    </Link>
                  )
                )}
              </ul>
            </div>
            <div className="active-drop-btn-box text-center flex justify-center sm:flex sm:flex-col sm:px-4">
              <Link href="/">
                <a className="p-5 max-w-[180px] w-full font-primary uppercase font-normal text-fig-15 text-primary rounded-[40px] bg-transparent border border-solid border-primary hover:bg-primary hover:text-secondary transition duration-150 ease-out md:border-primary md:text-primary md:hover:bg-primary md:hover:text-secondary">
                  view all
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActiveDrop;
