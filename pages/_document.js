import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&family=Playfair+Display:ital,wght@0,500;1,600&family=Poppins:wght@400;700&family=Roboto+Slab:wght@300;400&family=Righteous&family=Roboto:wght@300;400&display=swap&family=League+Spartan:wght@200;300;400"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
