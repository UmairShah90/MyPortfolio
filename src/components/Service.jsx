
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Crafting responsive, dynamic, and optimized user interfaces using modern frontend frameworks.",
  },
  {
    id: 2,
    title: "Figma/PSD to React",
    description: "Converting pixel-perfect Figma designs into fully functional,And Transforming Photoshop (PSD) designs into clean and maintainable React components..",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    description: "Ensuring seamless user experiences across all devices using mobile-first design and media queries.",
  },
  {
    id: 4,
    title: "Component Library Integration",
    description: "Integrating and customizing libraries like Material UI, Tailwind CSS, or Bootstrap for faster development.",
  },
   {
    id: 5,
    title: "Performance Optimization",
    description: "Optimizing frontend assets, lazy loading, and reducing bundle size for faster page load times.",
  },
   {
    id: 6,
    title: "API Integration",
    description: "Connecting frontend with backend services through RESTful APIs.",
  }

]
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
