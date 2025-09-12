import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Insights', href: '#' },
  { title: 'Industries', href: '#' },
  { title: 'Capabilities', href: '#' },
  { title: 'Leadership', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Careers', href: '#' },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <NavigationDrawer items={navItems}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NavigationDrawer>
    </>
  );
}

export default MyApp;