import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=IBM+Plex+Sans+KR&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
