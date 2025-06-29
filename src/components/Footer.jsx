import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Copyright@. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <h2>
            Developer<span role="img" aria-label="">💻</span>  : {" "}
            <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90"
            >
            Umair Zafar <span role="img" aria-label="">😍</span> 

            </a>{" "}
        </h2>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
