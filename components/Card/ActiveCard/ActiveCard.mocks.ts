import { IActiveCard } from './ActiveCard';

const base: IActiveCard = {
  id: 1,
  photo_name: 'drop-card-img-1.png',
  desc: 'DWB in collaboration with Bella Hadid, all proceeds go to DWB',
  title: 'Doctors Without Borders',
  cardLogo: 'varified-logo.png',
  cardInfo: 'Live', 
  cardInfoBg: 'purple' ,
};

export const mockActiveCardProps = {
  base,
};
