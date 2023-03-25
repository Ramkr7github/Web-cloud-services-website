import React from "react";

import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full h-fit text-white bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12 text-center">
          <h2 className="text-5xl font-bold text-center">Pricing</h2>
          <p className="text-xl py-8 text-gray-500">
            Savings is calculated based on the savings the Spot platform
            generates in a specific month. Our platform continuously tracks the
            actual cost in the connected cloud account and compares it to the
            alternative cost of running the same workload without Spot. The
            difference is the savings that a customer gains from using the
            platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {/* pricing card */}

          <PriceCard priceCatogory="Hobby" dollar="55" />
          <PriceCard priceCatogory="Growth" dollar="69" />

          {/* pricing card end */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
