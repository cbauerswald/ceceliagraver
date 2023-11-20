import CeceliaHeader from '../components/cecelia_header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


// import styles from '../styles/Home.module.css'

const Contact = () => {
    return <div>
        <main>
            <div className="body-wrapper">

                <CeceliaHeader selected="contact"/>

                <div className="contact-wrapper">
                    <p><FontAwesomeIcon icon={faEnvelope}/><a className="px-2" target="_blank" href="mailto:cecelia.auerswald@gmail.com">cecelia.auerswald@gmail.com</a></p>
                    <p><FontAwesomeIcon icon={faInstagram}/><a className="px-2" target="_blank" href="https://www.instagram.com/cecebunney/">@cecebunney</a></p>
                    <p><FontAwesomeIcon icon={faTwitter}/><a className="px-2" target="_blank" href="https://twitter.com/actorcecelia">@actorcecelia</a></p>
                </div>
                <div className="flex justify-center">
                    <img src="/gallery/production/ew_ending.jpg" className="w-96"/>
                </div>
            </div>
        </main>

        {/* <footer className={styles.footer}>

      </footer> */}
    </div>
}

export default Contact;