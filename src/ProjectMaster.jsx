import React from "react";
import Project from './Project.jsx'


export default function ProjectMaster() {
  return (
    <>
      <div className="flex w-full h-full flex-col lg:flex-row gap-5 pt-20 pb-20">
        <div className="card bg-base rounded-box grid h-full grow place-items-center">
                <h1 className="text-5xl font-bold text-center pb-10"><span className="colorChange text-pink-500"> Building</span> ideas overnight to <span className="colorChange text-pink-500">leading</span> teams.</h1>

        </div>
        <div className="card bg-base rounded-box grid h-full grow place-items-center">
         <Project/>

        </div>
      </div>
    </>
  );
}
