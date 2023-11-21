//styles
import '../scss/style.scss';
import React from "react";
// import 'react-image-lightbox/style.css';

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
  </div>
}

export default MyApp
