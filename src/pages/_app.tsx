import { GlobalStyles } from '@/styles/golbal-styles';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ParallaxProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ParallaxProvider>
    </SessionProvider>
  );
}
