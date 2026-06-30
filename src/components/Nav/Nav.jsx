import { useRef, useState, useEffect } from 'react'
import "./Nav.css"
import { Link } from "react-scroll"

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(); 
  const hamburgerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    mobileMenuRef.current.classList.toggle("activemobile");
    hamburgerRef.current.classList.toggle("activeham");
  };

  const closeMenu = () => {
    mobileMenuRef.current.classList.remove("activemobile");
    hamburgerRef.current.classList.remove("activeham");
  };

  return (
    <nav className={scrolled ? "nav-scrolled" : ""}>
      <div className="nav-container">
        <ul className='desktopmenu'>
          <Link to="home" activeClass='active' spy={true} smooth={true} duration={500} offset={-80}><li>Home</li></Link> 
          <Link to="about" activeClass='active' spy={true} smooth={true} duration={500} offset={-80}><li>About</li></Link> 
          <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500} offset={-80}><li>Projects</li></Link>
          <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500} offset={-80}><li>Contact</li></Link> 
        </ul>

        <div className="hamburger" ref={hamburgerRef} onClick={toggleMenu}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        <ul className='mobilemenu' ref={mobileMenuRef}>
          <Link to="home" activeClass='active' spy={true} smooth={true} duration={500} offset={-80} onClick={closeMenu}><li>Home</li></Link> 
          <Link to="about" activeClass='active' spy={true} smooth={true} duration={500} offset={-80} onClick={closeMenu}><li>About</li></Link> 
          <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500} offset={-80} onClick={closeMenu}><li>Projects</li></Link>
          <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500} offset={-80} onClick={closeMenu}><li>Contact</li></Link> 
        </ul>
      </div>
    </nav>
  )
}

export default Nav