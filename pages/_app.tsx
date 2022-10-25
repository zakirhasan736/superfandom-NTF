import React from "react"
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
import LoadingScreen from './../components/pre-loader/LoadingScreen';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <> 
      {pageLoaded ?
        getLayout(<Component {...pageProps} />) :
        <LoadingScreen loaded={pageLoaded}/>}
    </>
  );
}

export default MyApp;