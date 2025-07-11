import React from "react";
import Code from "./Code.jsx";
import Featured from "./Featured.jsx";
export default function Info() {
  return (
    <>
<div className="hero-content flex flex-col lg:flex-row items-start p-6 md:p-10 lg:p-16">
          <div className="container w-[100%]">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati commodi adipisci perferendis error nam quod! Veritatis accusantium quos ex ullam iure eius totam excepturi aperiam doloribus, vitae in mollitia?
            </p>
            <Featured />
          </div>
        </div>
    </>
  );
}
