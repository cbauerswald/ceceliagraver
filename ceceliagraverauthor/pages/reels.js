import Head from 'next/head'
import CeceliaHeader from '../components/cecelia_header';
// import styles from '../styles/Home.module.css'

const Gallery = () => {
    return <div>
        <main>
            <div className="body-wrapper">

                <CeceliaHeader selected="reels"/>
                <div className="main-wrapper">
                    <div className="reels-wrapper md">
                        <iframe src="https://player.vimeo.com/video/514704617" width="530" height="400" frameborder="1" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <iframe src="https://player.vimeo.com/video/514978775" width="530" height="400" frameborder="1" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                    <div className="reels-wrapper">
                        <iframe src="https://player.vimeo.com/video/514704617" width="640" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <iframe src="https://player.vimeo.com/video/514978775" width="640" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </main>

        {/* <footer className={styles.footer}>

      </footer> */}
    </div>
}

export default Gallery;