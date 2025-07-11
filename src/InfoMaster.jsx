import React from "react";
import Info from './Info.jsx'
import Code from './Code.jsx'

export default function InfoMaster() {
  return (
    <>
      <div className="flex w-full h-full flex-col lg:flex-row gap-5 p-5">
        <div className="card bg-base rounded-box grid h-full w-[50%] grow place-items-center">
            <Code />
        </div>
        <div className="card bg-base rounded-box grid h-full w-[50%] grow place-items-center">
         <Info />
        </div>
      </div>
    </>
  );
}
