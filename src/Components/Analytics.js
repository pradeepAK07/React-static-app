import React from "react";
import Laptop from "../imgs/laptop.jpg";
function Analytics() {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} className="w-full mx-auto my-4 " alt="/"></img>
        <div className="flex flex-col justify-center ">
          <p className="font-bold fontmedium py-0.5 ">
            Data analytics dashboard
          </p>
          <h1 className="text-[#974015] font-bold">
            Manage data analytis centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-[#08100e] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 text-[#00df9a] ">
            Get Started . .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
