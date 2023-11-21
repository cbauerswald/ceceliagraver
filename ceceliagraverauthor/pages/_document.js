//feature of next.js that allows you to control the structure of pages and have some SEO value
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <title>Cecelia Auerswald</title> */}
                    <link rel="icon" href="/favicon_new.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <footer>
                    <div className="footer">
                        <a>ceceliagraverauthor@gmail.com</a>
                        <a href="https://www.instagram.com/her_eyes_flashed/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://twitter.com/that_heartbrkr" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                    </div>
                </footer>
            </Html>
        )
    }
}