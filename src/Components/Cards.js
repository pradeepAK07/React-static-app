import React from "react";
import Single from "../imgs/single.png";
import double from "../imgs/double.png";
import triple from "../imgs/triple.png";
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded hover:scale-105 duration-300 shadow-slate-400">
          <img
            src={Single}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl text-center font-bold"> $159</p>
          <div className="text-center font-medium">
            <p className="py-1 border-b mx-5 mt-8">500 GB Storage</p>
            <p className="py-1 border-b mx-5">! granted User</p>
            <p className="py-1 border-b mx-5">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3  py-3 mx-auto text-black ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded hover:scale-105 duration-300 shadow-slate-400">
          <img
            src={double}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Two User</h2>
          <p className="text-4xl text-center font-bold"> $399</p>
          <div className="text-center font-medium">
            <p className="py-1 border-b mx-5 mt-8">1000 GB Storage</p>
            <p className="py-1 border-b mx-5">2 granted User</p>
            <p className="py-1 border-b mx-5">Send up to 5 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3  py-3 mx-auto text-black ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded hover:scale-105 duration-300 shadow-slate-400">
          <img
            src={triple}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Multi User</h2>
          <p className="text-4xl text-center font-bold"> $599</p>
          <div className="text-center font-medium">
            <p className="py-1 border-b mx-5 mt-8">2000 GB Storage</p>
            <p className="py-1 border-b mx-5">3 granted User</p>
            <p className="py-1 border-b mx-5">Send up to 8 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3  py-3 mx-auto text-black ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
