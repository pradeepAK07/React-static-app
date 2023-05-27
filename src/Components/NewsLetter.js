import React from "react";

function NewsLetter() {
  return (
    <div className="w-full py-16 text-white px-5">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-0.5">
            Want tips and tricks & optimize your flow?
          </h1>
          <p className="py-1 mb-3">
            Signup the news letter and stay up to date
          </p>
        </div>
        <div className="my-3">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="search"
              className="p-3 flex w-full rounded-md text-black "
              placeholder="enter email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3  py-3 mx-auto text-black ml-3">
              notify me..
            </button>
          </div>
          <p>
            we care about your data. Read your{"   "}
            <span className="text-[#00df9a] font-bold">privacy & policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
