import React from "react";
import Code from "./Code.jsx";
import Featured from "./Featured.jsx";
export default function Info() {
  return (
    <>
      <div className="hero bg-base min-h-[35rem] w-fullflex items-start justify-start">

        <div className="hero-content flex-col lg:flex-row items-start">
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Featured />
          </div>
        </div>
      </div>
    </>
  );
}
