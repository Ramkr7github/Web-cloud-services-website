import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import GreenBtn from "./GreenBtn";

const PriceCard = ({ priceCatogory, dollar }) => {
  const features = [
    {
      id: 1,
      icon: <FaPlusCircle className="w-5 mr-3 text-lightColor" />,
      feature: "Contracted SLA",
    },
    {
      id: 2,
      icon: <FaPlusCircle className="w-5 mr-3 text-lightColor" />,
      feature: "24×7 Proactive NOC monitoring",
    },
    {
      id: 3,
      icon: <FaPlusCircle className="w-5 mr-3 text-lightColor" />,
      feature: "Customer success package",
    },
    {
      id: 4,
      icon: <FaPlusCircle className="w-5 mr-3 text-lightColor" />,
      feature: "Early access and preview",
    },
  ];

  return (
    <div className="bg-white text-slate-900 m-4 rounded-xl overflow-hidden shadow-2xl">
      <div className="text-center bg-darkColor text-white py-4 uppercase">
        <p className="text-2xl font-bold">{priceCatogory}</p>
      </div>
      <div className="p-4">
        <p className="text-6xl font-bold py-4 flex">
          {" "}
          ${dollar}{" "}
          <span className="text-xl text-darkColor flex flex-col justify-end">
            /mo
          </span>
        </p>
      </div>
      <p className="text-2xl py-8 px-4 text-slate-500">
        An out-of-the-box automotive CRM, built on Sales Cloud and Service
        Cloud.
      </p>
      <div className="text-2xl">
        {features.map(({ id, icon, feature }) => (
          <div key={id} className="px-4">
            <p className="flex items-center py-3 text-lg">
              {icon} {feature}
            </p>
          </div>
        ))}

        <GreenBtn
          title="get started"
          className="capitalize w-full py-4 rounded-none hover:border-none"
        />
      </div>
    </div>
  );
};

export default PriceCard;
