/* eslint-disable */

import { useEffect, useCallback } from 'react';
import Head from 'next/head';

import 'styles/reset.scss';
import 'styles/common.scss';

import GlobalStateProvider from 'providers/GlobalStateProvider';

const MyApp = ({ Component, pageProps }) => {
  const handleCalcRealVh = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  useEffect(() => {
    handleCalcRealVh();
    window.addEventListener('resize', handleCalcRealVh);
    window.onpagehide = function () {
      window.scrollTo(0, 0);
    };

    return () => {
      window.removeEventListener('resize', handleCalcRealVh);
    };
  });

  return (
    <>
      <Head>
        <title>Colors</title>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=JetBrains+Mono:wght@100&family=Mulish:wght@400;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GlobalStateProvider>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </>
  );
};

export default MyApp;
