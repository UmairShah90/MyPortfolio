import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import FoodImage from "../assets/food.png";
import bookMSImage from "../assets/admin-dashboard.png";
import nikeShoeImage from "../assets/nikeshoe.png";
import covid19Image from "../assets/covid-19.png";
import coronaImage from "../assets/corona-img.png";
import spaceXImage from "../assets/spacex.png";
import PLGImage from "../assets/plg.png";
import FFKImage from "../assets/ffk.png";
import istehwathImage from "../assets/istehwath.png";
import chefPriveImage from "../assets/chefprive.png";
import demoChartImage from "../assets/demochart.png";
import expanseTrackerImage from "../assets/expense.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Food Web Design (Fully Responsive)",
    image: FoodImage,
    github: "https://github.com/UmairShah90/Food-web-store",
    liveUrl: "https://food-web-design.netlify.app/",
  },
  {
    id: 2,
    name: "Nike Shoes Store",
    image: nikeShoeImage,
    github: "https://nike-shoe-store-web.netlify.app/",
    liveUrl: "https://nike-shoe-store-web.netlify.app/",

  },
  {
    id: 3,
    name: "Covid-19 Web Design",
    image: covid19Image,
    github: "https://github.com/UmairShah90/Covid-19-website-design",
    liveUrl: "https://covid-19-webite.netlify.app/",

  },
  {
    id: 4,
    name: "Corona Virus Tracker App",
    image: coronaImage,
    github: "https://github.com/UmairShah90/Corona-Virus-Tracker",
    liveUrl: "https://covid-19-webite.netlify.app/",

  },
  {
    id: 5,
    name: "SpaceX Web",
    image: spaceXImage,
    github: "https://github.com/UmairShah90/SpaceX-App",
    liveUrl: "https://spacex-corp.netlify.app/",

  },
  {
    id: 6,
    name: "Expense Tracker App",
    image: expanseTrackerImage,
    github: "https://github.com/UmairShah90/Expense-Tracker",
    liveUrl: "https://yourexpense-tracker.netlify.app/",

  },
  
  
];

const liveProjects = [
  {
    id: 1,
    name: "Food Fire + Knives",
    image: FFKImage,
    liveUrl: "https://develop.foodfireknives.com/",
  },
  {
    id: 2,
    name: "Chef Prive",
    image: chefPriveImage,
    liveUrl: "https://www.chefprive.qa/",

  },
  {
    id: 3,
    name: "Demo Chart",
    image: demoChartImage,
    liveUrl: "https://creator.demochart.com/",

  },
  {
    id: 4,
    name: "Pro Level Gamer",
    image: PLGImage,
    liveUrl: "https://dev.prolevelgamer.com/",

  },
  {
    id: 4,
    name: "istehwath",
    image: istehwathImage,
    liveUrl: "https://web.istehwath.net/",

  },
  
  
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 border-b-2 border-gray-700 py-12 ">
        <h2 className="text-4xl font-bold text-center mb-12">Open Source Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <div className="flex items-center gap-3">
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.liveUrl} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">
                <FaExternalLinkAlt id="live" size={25} />{" "}
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="container mx-auto px-8 md:px-16 lg:px-24 pt-7">
        <h2 className="text-4xl font-bold text-center mb-12">Live Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <div className="flex items-center gap-3">
              {/* <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a> */}
              <a href={project.liveUrl} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">
                <FaExternalLinkAlt id="live" size={25} />{" "}
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
