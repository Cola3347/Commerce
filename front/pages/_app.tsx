import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useEffect } from "react";
import { SessionProvider } from 'next-auth/react';


export default function App({  session, Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      {useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, [])};
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
