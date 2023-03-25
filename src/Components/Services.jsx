import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "App Service",
      subtitle:
        "Quickly create powerful cloud apps for web and mobile",
    },
    {
      id: 2,
      title: "Spring Apps",
      subtitle:
        "Build and deploy Spring Boot applications with a fully managed service from Microsoft and VMware",
    },
    {
      id: 3,
      title: "Cloud Services",
      subtitle:
        "Create highly-available, infinitely-scalable cloud applications and APIs",
    },
    {
      id: 4,
      title: "Static Web Apps",
      subtitle:
        "Streamlined full-stack development from source code to global high availability",
    },
  ];

  return (
    <div name="services" className="w-full h-fit md:h-screen bg-slate-300">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <h2 className="text-5xl font-bold text-center">Services</h2>

        <p className="text-xl py-8 text-gray-600 text-center ">
          ONNN has a comprehensive set of Technology Services around hybrid
          cloud solutions, business resiliency and network services for your IT
          transformations.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 pt-4">

       {services.map(({id, title, subtitle}) =>
        (
            <div key={id} className="flex items-start p-4 bg-gray-900 text-white rounded-md">
            <div>
              <FaChevronCircleRight
                size={30}
                className="mt-3 mr-4 text-lightColor"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-lightColor pt-2 pb-4 capitalize">
                {title}
              </h3>
              <p className="text-lg">
                {subtitle}
              </p>
            </div>
          </div>
        ))}

       
        </div>
      </div>
    </div>
  );
};

export default Services;
