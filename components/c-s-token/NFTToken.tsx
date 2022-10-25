import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Token from '../collect-soulbound-tokens/Token';

const NFTToken = () => {
  const [filterText, setFilter] = useState<string>('all');
  const [tokenItem, setTokenItem] = useState<any>([]);
  let data = [
    {
      id: 1,
      categories_name: ['all', 'p_food'],
      photo_name: 'Group_481234.png',
    },
    {
      id: 2,
      categories_name: ['all', 'lorem'],
      photo_name: 'Group_481235.png',
    },
    {
      id: 3,
      categories_name: ['all', 'd_wot_b'],
      photo_name: 'Group_481236.png',
    },
    {
      id: 4,
      categories_name: ['all', 'p_food'],
      photo_name: 'Group_481237.png',
    },
    {
      id: 5,
      categories_name: ['all', 'p_food'],
      photo_name: 'Group_481234.png',
    },
    {
      id: 6,
      categories_name: ['all', 'lorem'],
      photo_name: 'Group_481235.png',
    },
    {
      id: 7,
      categories_name: ['all', 'd_wot_b'],
      photo_name: 'Group_481236.png',
    },
    {
      id: 8,
      categories_name: ['all', 'p_food'],
      photo_name: 'Group_481237.png',
    },
  {
    id: 9,
    categories_name: ['all', 'p_food'],
    photo_name: 'Group_481234.png',
  },
  {
    id: 10,
    categories_name: ['all', 'lorem'],
    photo_name: 'Group_481235.png',
  },
  {
    id: 11,
    categories_name: ['all', 'd_wot_b'],
    photo_name: 'Group_481236.png',
  },
  {
    id: 12,
    categories_name: ['all', 'p_food'],
    photo_name: 'Group_481237.png',
  }
  ];

  useEffect(() => {
    const items = data.filter((item) =>
      item.categories_name.includes(filterText)
    );
    setTokenItem(items);
  }, [filterText]);

  return (
    <>
      <section className="collection-tokent-section w-full bg-secondary pt-[132px] laptop-m:pt-[65px]  md:pt-8 pb-24 px-0 relative z-10  overflow-hidden">
    
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-8 md:mb-4">
            <h2 className="section-title title_animation max-w-[970px] font-primary font-normal text-fig-3x text-left text-primary laptop-x:text-6xl md:text-fig-40 uppercase">
            collections
            </h2>
          </div>

          <div className="collection-wrapper-box">
            <div className="collection-tabs-items mb-8">
              
              <button
                onClick={() => setFilter('all')}
                className={`border-primary ${
                  filterText === 'all' && 'bg-primary text-secondary'
                } border rounded-[40px] px-[10px] py-[10px] mx-2 text-fig-15 font-normal uppercase font-primary text-center text-primary border-solid border-primary hover:text-secondary hover:bg-primary`}
              >
                all soulbound tokens
              </button>

              <button
                onClick={() => setFilter('p_food')}
                className={`border-primary ${
                  filterText === 'p_food' && 'bg-primary text-secondary'
                } border rounded-[40px] px-[10px] py-[10px] mx-2 text-fig-15 font-normal uppercase font-primary text-center text-primary border-solid border-primary hover:text-secondary hover:bg-primary`}
              >
                pakistani food
              </button>

              <button
                onClick={() => setFilter('d_wot_b')}
                className={`border-primary ${
                  filterText === 'd_wot_b' && 'bg-primary text-secondary'
                } border rounded-[40px] px-[10px] py-[10px] mx-2 text-fig-15 font-normal uppercase font-primary text-center text-primary border-solid border-primary hover:text-secondary hover:bg-primary`}
              >
               doctors without borders
              </button>

              <button
                onClick={() => setFilter('lorem')}
                className={`border-primary ${
                  filterText === 'lorem' && 'bg-primary text-secondary'
                } border rounded-[40px] px-[10px] py-[10px] mx-2 text-fig-15 font-normal uppercase font-primary text-center text-primary border-solid border-primary hover:text-secondary hover:bg-primary`}
              >
                lorem ipsum
              </button>
            </div>
          </div>

          <div className="collection-tokens-box">
            <div className="content_wrapper flex items-center flex-wrap gap-5 mb-16">
              {tokenItem.map(({ id, photo_name, categories_name }) => (
                <Token
                  key={id}
                  id={id}
                  categories_name={categories_name}
                  photo_name={photo_name}
                />
              ))}
            </div>

            <div className="collection-btn-box text-center flex justify-center sm:flex sm:flex-col sm:px-4">
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

export default NFTToken;
