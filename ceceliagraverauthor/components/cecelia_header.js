import Link from 'next/link';

const CeceliaHeader = ({ selected }) => {
  return (
    <div className="header">
        <Link href="/" className="relative">
          <img className="" src="/tree.png" />
          <h1 className="header-text">
            Cecelia Auerswald
        </h1>
          <h2 className="font-body uppercase text-base">Nyc Based Actor</h2>
        </Link>
      <div className="navbar">
        <Link href="/" className={`nav-item ${selected == "home" && "selected"}`}>Home</Link>
        <Link
          href="/gallery"
          className={`nav-item ${selected == "gallery" && "selected"}`}>Gallery</Link>
        <Link href="/reels" className={`nav-item ${selected == "reels" && "selected"}`}>Reels</Link>
        <Link
          href="/resume"
          className={`nav-item hidden md:block ${selected == "resume" && "selected"}`}>Resume</Link>
        <a className="nav-item md:hidden" href="/resume.pdf" target="_blank"> Resume</a>
        <Link
          href="/contact"
          className={`nav-item ${selected == "contact" && "selected"}`}>Contact</Link>
      </div>
    </div>
  );
}

export default CeceliaHeader;