import { globalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>임리하의 첫 생일파티에 초대드립니다.</title>
        <meta
          name="description"
          content="임리하의 첫 생일파티에 초대드립니다."
        />
        <meta name="author" content="임리하의 첫 생일파티에 초대드립니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="임리하의 첫 생일파티에 초대드립니다."
        />
        <meta
          property="og:description"
          content="8월 31일 오후 12시 센텀스퀘어 2동 7층 717호 "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://invitation-lyart-pi.vercel.app"
        />
        <meta
          property="og:image"
          content="https://portfolio-opal-iota-92.vercel.app/lyha/1.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={globalStyle(theme)} />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
