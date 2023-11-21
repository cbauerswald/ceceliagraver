import Head from 'next/head';
import Image from 'next/image';
import CeceliaHeader from '../components/cecelia_header';
import InstaFeeds from '../Components/insta_feed';
import axios from 'axios'

// import styles from '../styles/Home.module.css'

const Home = (props) => {

  return (
    <div>
      <Head>
        <title>Cecelia Graver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="body-wrapper">

          <CeceliaHeader selected="home" />
          <div className="main-wrapper">
            <div className="image-wrapper">
              <Image className="main-image" src="/main_photo.jpg" alt="Cecelia Graver" width={362.4} height={470.2}/>
            </div>
            <div className="text-wrapper">
              <div className="main-text">
                <p>
                  Through her undergraduate degree at Olin College of Engineering, two years of acting school in Dublin, Ireland, and the school of Figuring-It-the-Heck-Out during COVID, Cecelia used writing to grapple with family, home, and personal fulfillment. Predictably, her newest manuscript, THE LAND OF HEART AND HOME, contains all of these themes, along with a good dose of corsetry, Irish Nationalism, gut-warming pub stews, broken hearts, and hoity-toity balls. The manuscript was also recently selected for 2023 Smooch Pit Mentorship Program.              </p>
                <p>
                  Cecelia can’t wait to continue to grow as a writer and person through whatever opportunities she finds next. She anticipates this book will be the first of many she writes, because the dam has been broken and the words, they floweth.
              </p>
              </div>
            </div>
            
          </div>

        </div>
        <div> 
          <InstaFeeds feed={props.feed} limit={12}/>
        </div>
      </main>
    </div >
  )
}

export async function getStaticProps() {
  console.log("in get static props");
  const res = await axios.get(`https://graph.instagram.com/v18.0/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`)
  const data = res.data.data;
  console.log(`data is ${data}`);
  return { props: { feed: data } }
}

export default Home;