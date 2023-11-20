import Link from 'next/link';

const CeceliaHeader = ({ selected }) => {
  return <div className="header">
      <Link href="/"><a className="relative">
        <img className="" src="/tree.png" />
        <h1 className="header-text">
          Cecelia Auerswald
      </h1>
      <h2 className="font-body uppercase text-base">Nyc Based Actor</h2>
      </a></Link>
    <div className="navbar">
      <Link href="/"><a className={`nav-item ${selected == "home" && "selected"}`}>Home</a></Link>
      <Link href="/gallery"><a className={`nav-item ${selected == "gallery" && "selected"}`}>Gallery</a></Link>
      <Link href="/reels"><a className={`nav-item ${selected == "reels" && "selected"}`}>Reels</a></Link>
      <Link href="/resume"><a className={`nav-item hidden md:block ${selected == "resume" && "selected"}`} >Resume</a></Link>
      <a className="nav-item md:hidden" href="/resume.pdf" target="_blank"> Resume</a>
      <Link href="/contact"><a className={`nav-item ${selected == "contact" && "selected"}`}>Contact</a></Link>
    </div>
  </div>
}

export default CeceliaHeader;