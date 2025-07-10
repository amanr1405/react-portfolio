import React from "react";

export default function Heroic() {
  return (
    <>
      <div className="hero bg-base min-h-[35rem]">
        <div className="hero-content text-center">
          <div className="max-w-[40rem]">
            <h1 className="text-5xl font-bold"> <span className="colorChange text-pink-500">Digital designer</span> crafting products that people <span className="colorChange text-pink-500">love</span>.</h1>
            <p className="py-6">
            I'm <span className="colorChange text-pink-500"><strong>Aman</strong></span>, a tech enthusiast and web developer who loves turning ideas into functional, user-friendly digital experiences. 
            </p>
            <div className="container flex gap-3 justify-center">
              <button className="btn btn-primary w-[20%]">Linkedin</button>
            <button className="btn btn-primary w-[20%]">Github</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
