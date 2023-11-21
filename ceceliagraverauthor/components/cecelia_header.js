import Link from 'next/link';
import Image from 'next/image';

const CeceliaHeader = ({ selected }) => {
  return (
    <div className="header">
        <Link href="/" className="relative">
          <Image className="" src="/tree.png" alt="tree" width={60} height={60}/>
          <h1 className="header-text">
            Cecelia Graver
        </h1>
          <h2 className="font-body uppercase text-base">ROMANCE AUTHOR</h2>
        </Link>
      <div className="navbar">
        <Link href="/" className={`nav-item ${selected == "home" && "selected"}`}>Home</Link>
        {/* <Link
          href="/gallery"
          className={`nav-item ${selected == "gallery" && "selected"}`}>Gallery</Link>
        <Link href="/reels" className={`nav-item ${selected == "reels" && "selected"}`}>Reels</Link> */}
        <Link
          href="/updates"
          className={`nav-item hidden md:block ${selected == "resume" && "selected"}`}>Updates</Link>
        <a className="nav-item md:hidden" href="/resume.pdf" target="_blank"> Updates</a>
        <Link
          href="/contact"
          className={`nav-item ${selected == "contact" && "selected"}`}>Contact</Link>
      </div>
    </div>
  );
}

export default CeceliaHeader;