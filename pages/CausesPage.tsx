import Head from 'next/head';
import Banner from '../components/banner/Banner';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const CausesPage: NextPageWithLayout = () => {

  return (
    <div className="container-wrapper">
      <Head>
        <title>Causes Page - NFT's Superfundom Animate Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    </div>
  );
};

export default CausesPage;

CausesPage.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
