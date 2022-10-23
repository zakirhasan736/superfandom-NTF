import React, { useState, useEffect } from 'react';
import Token from '../collect-soulbound-tokens/Token';

const CSToken = () => {
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
  ];
  useEffect(() => {
    const items = data.filter((item) =>
      item.categories_name.includes(filterText)
    );
    setTokenItem(items);
  }, [filterText]);

  return (
    <section className="bg-white">
      <h2>collect soulbound tokens</h2>
      <button
        onClick={() => setFilter('all')}
        className={`bg-white ${filterText==="all"&& "border-black"} border rounded px-4 py-8 mx-5`}
      >
        all soulbound tokens
      </button>
      <button
        onClick={() => setFilter('p_food')}
        className={`bg-white ${filterText==="p_food"&& "border-black"} border rounded px-4 py-8 mx-5`}
      >
        pakistani food
      </button>
      <button
        onClick={() => setFilter('d_wot_b')}
        className={`bg-white ${filterText==="d_wot_b"&& "border-black"} border rounded px-4 py-8 mx-5`}
      >
        doctors without borders
      </button>
      <button
        onClick={() => setFilter('lorem')}
        className={`bg-white ${filterText==="lorem"&& "border-black"} border rounded px-4 py-8 mx-5`}
      >
        lorem ipsum
      </button>

      <div className="content_wrapper flex items-center">
        {tokenItem.map(({ id, photo_name, categories_name }) => (
          <Token
            key={id}
            id={id}
            categories_name={categories_name}
            photo_name={photo_name}
          />
        ))}
      </div>
    </section>
  );
};

export default CSToken;
