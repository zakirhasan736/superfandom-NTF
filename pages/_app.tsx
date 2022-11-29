import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
import LoadingScreen from '../components/shared/pre-loader/LoadingScreen';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [time, setTime] = useState<number>(0);

  React.useEffect(() => {
    var loadTime =
      window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart;
    const t = ((loadTime / 60) * 100);
    const duration = t.toFixed(2);
    setTime(Number((Math.floor((Number(duration) / 1000)))));
    setTimeout(() => {
      setPageLoaded(true);
    }, Number(duration));

  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {pageLoaded ? (
        getLayout(<Component {...pageProps} />)
      ) : (
        <LoadingScreen loaded={time} />
      )}
    </>
  );
}

export default MyApp;
