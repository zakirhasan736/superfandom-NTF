import { ITokenCards } from './../typings/types';

const base: ITokenCards = {
  id: 1,
  photo_name: 'card-img-1.png',
  Price: '320STX',
  desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
  userInfo: '@voice over',
  btnName: 'Buy Now',
  userPhoto: 'user-img.png',
  bidNow: 'Bid Now',
  bidNowBg: 'neon',
  cardInfo: 'Live', 
  cardInfoBg: 'neon' ,
};

export const mockTokenCardsProps = {
  base,
};
