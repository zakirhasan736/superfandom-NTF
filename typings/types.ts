export interface IBanner {
    title?: string;
    subtitle?: string;
    desc?: string;
}
export interface ICampaignBanner {
    title?: string;
    subtitle?: string;
    desc?: string;
}
export interface ICausesBanner {
    title?: string;
    subtitle?: string;
    desc?: string;
}
export interface IFandomBanner {
    title?: string;
    subtitle?: string;
    desc?: string;
}
export interface IStepCard {
    id: number,
    photo_name: string,
    title: string,
    desc: string,
}

export interface accordion {
    id: number,
    question: string,
    answer: string,
}

export interface IFaq {
    id: number,
    question: string;
    answer: string;
}

export interface IActiveCard {
    id: 1;
    photo_name?: string;
    desc?: string;
    title?: string;
    cardLogo?: string;
    cardInfo?: string;
    cardInfoBg?: 'purple' | 'neon';
}

export interface IExclusiveCard {
    id: 1,
    photo_name?: string;
    desc?: string;
    categories_name?: string;
    title?: string;
    cardType?: string;
    cardInfo?: string;
    cardInfoBg?: 'purple' | 'neon';
}

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {
    pageName?: string;
}

export interface INavigation extends React.ComponentPropsWithoutRef<'header'> {
    headerNext: boolean;
    pageName?: string;
}

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
    justify?: 'items-center' | 'items-start';
    headerNext: boolean;
    pageName?: string | undefined;
}

export interface ITokenCards {
    id: number;
    photo_name?: string;
    categories_name?: string;
    Price?: string;
    desc?: string;
    userInfo?: string;
    btnName?: string;
    userPhoto?: string;
    bidNow?: string;
    bidNowBg?: 'white' | 'neon';
    cardInfo?: 'Live' | 'Soon';
    cardInfoBg?: 'purple' | 'neon';

}