import  { useState } from 'react'
import { animateScroll as scroll, Link } from 'react-scroll'
import { motion } from "framer-motion";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked);
  };

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <motion.div
      className={navbar ? "nav-container active" : "nav-container"}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <span className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" onClick={() => scroll.scrollToTop()}>
        &lt; Umair Zafar /&gt;
      </span>
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={handleClick}>
        <i>{navClicked ? <GiHamburgerMenu /> : <GiHamburgerMenu />}</i>
      </div>
      {/* // */}
      <ul className={navClicked ? "nav-links active" : "nav-links"}>
        <li className="link">
          <Link
            className={navbar ? "anchor is-active" : "anchor"}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Services
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="projects"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </li>


        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="contact"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
          
        </li>
      </ul>
    </motion.div>
    // <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    //     <div className='container py-2 flex justify-center md:justify-between items-center'>
    //         <div className='text-2xl font-bold hidden md:inline italic myName'>&lt; Umair Zafar /&gt;</div>
    //         <div className='space-x-6'>
    //             <a href="#home" className='hover:text-gray-400'>Home</a>
    //             <a href="#about" className='hover:text-gray-400'>About Me</a>
    //             <a href="#service" className='hover:text-gray-400'>Services</a>
    //             <a href="#project" className='hover:text-gray-400'>Projects</a>
    //             <a href="#contact" className='hover:text-gray-400'>Contact</a>
    //         </div>
    //         <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
    //         transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
    //     </div>
    // </nav>
  )
}

export default Navbar