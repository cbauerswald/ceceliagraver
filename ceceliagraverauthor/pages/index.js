import Head from 'next/head'
import CeceliaHeader from '../components/cecelia_header';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cecelia Auerswald</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="body-wrapper">

          <CeceliaHeader selected="home" />
          <div className="text-center italic">
            <p>
              "Auerswald… plays the deceased Lieserl with a luminous vulnerability." - <a href="https://dctheatrescene.com/2020/03/09/review-einsteins-wife-serbian-scientist-mileva-maric-gets-her-due/" target="_blank">DC Theatre Scene</a>
            </p>
            <p>
              "… portrayed with inspired politeness and a shimmering ache by Cecelia Auerswald" - <a href="https://dcmetrotheaterarts.com/2020/03/07/plenty-to-chew-on-in-expats-thoughtful-production-of-einsteins-wife-at-atlas-center/" target="_blank">DC Metro Theater Arts</a>
            </p>
            <p> “… the truly mesmerizing performances of Olinick and Auerswald were unparalleled.” - <a href="https://www.broadwayworld.com/washington-dc/article/BWW-Review-EINSTEINS-WIFE-at-ExPats-Theatre-20200310" target="_blank">BroadwayWorld</a></p>
          </div>
          <div className="main-wrapper">
            <div className="image-wrapper">
              <img className="main-image" src="main_photo.jpg" />
            </div>
            <div className="text-wrapper">
              <div className="main-text">
                <p>
                  Cecelia Auerswald is an actor and writer based in Manhattan. Originally from Washington, DC, Cecelia moved to Dublin to complete two-year conservatory training at the Gaiety School of Acting. While there she received an IDCA distinction for Rapier and Dagger, and acted with renowned director Raymond Keane and BAFTA winning television director Laura Way.
              </p>
                <p>
                  After graduation in 2019, she returned to her home city of Washington, DC, where she filmed Hide and Seek, a short set to appear in festivals in 2021, and performed the lead role in the world premiere of Einstein’s Wife with Expats Theatre Company.
              </p>
                <p>
                  She has since arrived, mid-pandemic, to live in New York City. While in her apartment (most of the time these days), she loves to bake or cook or do anything reasonably creative and edible with food, knit increasingly wearable hats, and listen to podcasts about board games she hopes one day to play (before the pandemic, she also played board games with friends…!).

              </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>

      </footer> */}
    </div >
  )
}
