import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import FaqPage from '../components/FAQ/Faq';
import Explore from '../components/explore-and-collect/Explore';
import HowItWork from '../components/how-it-work/HowItWork';
import TextImgSiniped from '../components/text-and-img-siniped/TextImgSiniped';
import Banner from '../components/banner/Banner';

const Home: NextPageWithLayout = () => {

  return (
    <div className="container-wrapper">
      <Head>
        <title>Home Page - NFT's Superfundom Animation Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={''} subtitle={''} desc={''} />
      <TextImgSiniped />
      <HowItWork />
      <Explore />
      <FaqPage />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout headerNext={false}>{page}</PrimaryLayout>;
};
