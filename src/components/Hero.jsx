import HeroImage from "../assets/umair.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Hero = () => {
  const contentVariants = {
    initial: {
      translateY: "100vh",
      opacity: 0,
    },

    animate: {
      translateY: "0vh",
      opacity: 1,
      transition: {
        duration: 2,
        when: "beforeChildren",
      },
    },
  };
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover object-center transform 
        transition-transform duration-300 hover:scale-105 mt-8"
      />
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-4xl font-bold">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Umair Zafar,
          </span>
          {/* , Frontend Web Application Developer */}
        </h1>
        <h1 className="text-4xl font-bold">
          <Typewriter
            words={["Frontend Developer", "React JS Developer", "Next JS Developer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>

        <p className="mt-4 text-lg text-gray-300 block break-normal">
          A passionate Software Engineer 🚀 with experience in building Web
          <br />
          applications with Reactjs / Nextjs / JavaScript and some other
          cool libraries and frameworks.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-3">
          <a target="_blank" href="https://github.com/UmairShah90/">
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/umair-zafar-2225241ab/"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="mailto:yourmail@domain.com" target="_blank">
            <BiLogoGmail className="w-8 h-8" />
          </a>
        </div>
        <div className="mt-8 space-x-4">
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
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact With Me
          </button>
          </Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/14DZBjkxclS34vif4mmDtkLp0PRrHGBoW/view?usp=sharing"
          >
            <button
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              See My Resume
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
