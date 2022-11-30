import { IExclusiveCard } from './../typings/types';

const base: IExclusiveCard = {
  id: 1,
  photo_name: 'exclusive-img-1.png',
  desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
  title: 'Collection name',
  cardType: 'Nft',
  cardInfo: 'Live', 
  cardInfoBg: 'neon' ,
};

export const mockExclusiveCardProps = {
  base,
};
