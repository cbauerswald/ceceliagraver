import Head from 'next/head'
import CeceliaHeader from '../components/cecelia_header';
// import Lightbox from 'react-image-lightbox';
import { useState } from 'react';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
// import styles from '../styles/Home.module.css'

const images = [
    ["gallery/tedely1.jpg", "Ted Ely"],
    ["gallery/tedely2.jpg", "Ted Ely"],
    ["gallery/tedely3.jpg", "Ted Ely"],
    ["gallery/tedely4.jpg", "Ted Ely"],
    ["gallery/tedely5.jpg", "Ted Ely"],
    ["gallery/tedely6.jpg", "Ted Ely"],
    ["gallery/tedely7.jpg", "Ted Ely"],
    ["gallery/tedely8.jpg", "Ted Ely"],
    ["gallery/tedely9.jpg", "Ted Ely"],
    ["gallery/photoshoot1.jpg", "Monica Baddar"],
    ["gallery/photoshoot2.jpg", "Monica Baddar"],
    ["gallery/photoshoot3.jpg", "Monica Baddar"],
    ["gallery/photoshoot4.jpg", "Monica Baddar"],
    ["gallery/photoshoot5.jpg", "Monica Baddar"],
    ["gallery/photoshoot6.jpg", "Monica Baddar"],
    ["gallery/photoshoot7.jpg", "Monica Baddar"],
    ["gallery/photoshoot8.jpg", "Monica Baddar"],
    ["gallery/photoshoot9.jpg", "Monica Baddar"]
]
                // {(openLightbox) && <Lightbox
                //     mainSrc={imageIndex !== null ? images[imageIndex][0] : ""}
                //     nextSrc={imageIndex < images.length - 1 ? images[imageIndex + 1][0] : images[0][0]}
                //     prevSrc={imageIndex > 0 ? images[imageIndex - 1][0] : images[images.length - 1][0]}
                //     imageCaption={imageIndex !== null ? `Photo Credit: ${images[imageIndex][1]}` : ""}
                //     onCloseRequest={() => { setImageIndex(null); setOpenLightbox(false) }}
                //     onMovePrevRequest={() =>
                //         imageIndex > 0 ? setImageIndex(imageIndex - 1) : setImageIndex(images.length - 1)
                //     }
                //     onMoveNextRequest={() =>
                //         imageIndex < images.length - 1 ? setImageIndex(imageIndex + 1) : setImageIndex(0)
                //     }
                // />}

const Gallery = () => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    return <div>
        <main>
            <div className="body-wrapper">

                <CeceliaHeader selected="gallery" />

                <div className="main-wrapper">
                    <div className="gallery-wrapper">
                        {images.slice(0, 18).map((imgInfo, i) => <a key={imgInfo[0]} onClick={() => { setImageIndex(i); setOpenLightbox(true) }}>
                            <img src={imgInfo[0]}></img>
                        </a>
                        )}
                    </div>

                </div>
                {/* <h1 className="font-body">Stage</h1>
                <div className="main-wrapper">
                    <div className="gallery-wrapper">
                        {images.slice(9).map((src, i) => <a key={src} onClick={() => { setImageIndex(i+9); setOpenLightbox(true) }}>
                            <img src={src}></img>
                        </a>
                        )}
                    </div>
                </div> */}
            </div>
        </main>

        {/* <footer className={styles.footer}>

      </footer> */}
    </div >
}

export default Gallery;