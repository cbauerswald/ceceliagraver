//styles
import '../scss/style.scss';
import React from "react";
import { Head } from 'next/document';
// import 'react-image-lightbox/style.css';

function MyApp({ Component, pageProps }) {
  return <div>
    {/* <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Cecelia Auerswald</title>
    </Head> */}
    <Component {...pageProps} />
  </div>
}

export default MyApp
