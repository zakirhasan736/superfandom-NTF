import Head from 'next/head';
import { NextPageWithLayout } from './page';
import FaqPage from '../components/shared/Faq/Faq';
import FandomBanner from '../components/core/banner/FandomBanner';
import ActiveDrop from '../components/shared/ActiveDrop/ActiveDrop';
import CSToken from '../components/shared/c-s-token/CSToken';
import HowItWork2 from '../components/core/how-it-work/HowItWork2';
import PrimaryLayout from '../components/shared/layouts/primary/PrimaryLayout';


const Fundom: NextPageWithLayout = () => {

  return (
    <div className="container-wrapper">
      <Head>
        <title>{`Fandom Page - NFT's Superfundom Animation Landing Page`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FandomBanner  />
      <ActiveDrop />
      <CSToken pageName={"fandom"}/>
      <HowItWork2  pageName={"fandom"} />
      <FaqPage />
    </div>
  );
};

export default Fundom;

Fundom.getLayout = (page) => {
  return <PrimaryLayout pageName={"fandom"} headerNext={false}>{page}</PrimaryLayout>;
};
