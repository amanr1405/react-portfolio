import React from "react";
import Code from './Code.jsx'
import Featured from "./Featured.jsx";
export default function Info() {
  return (
    <>
      <div className="hero bg-base min-h-[35rem] w-full p-10">
        <div className="hero-content flex-col lg:flex-row gap-10 items-start">
          <div className="container"><Code /></div>
          <div>
            <h1 className="text-5xl font-bold">Where <span className="colorChange text-pink-500">creativity</span> meets code and ideas come to <span className="colorChange text-pink-500">life</span>.</h1>
            <p className="py-6">
              From building ideas overnight to leading teams through high-energy tech sprints, my journey through hackathons and tech events has been all about turning passion into innovation.
            </p>
            <Featured />
            
            
          </div>
        </div>
      </div>
    </>
  );
}
