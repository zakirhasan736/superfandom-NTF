import React from 'react';

export interface IToken {
  id: string;
  categories_name: string;
  photo_name: string;
}

const Token: React.FC<IToken> = () => {
  return <section></section>;
};

export default Token;
