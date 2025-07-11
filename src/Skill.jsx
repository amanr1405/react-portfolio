// import React from "react";

// export default function Skill() {
//   return (
//     <>
//       <h1 className="text-5xl font-bold text-center pt-20 pb-10"><span className="colorChange text-pink-500"> Debug</span> dreams and <span className="colorChange text-pink-500">deploy</span> soluiton.</h1>

//       <div className="carousel carousel-center bg-neutral max-w-screen space-x-4 p-4 mb-30">
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=html"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=css"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=javascript"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=react"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=php"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=java"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=python"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=cpp"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=c"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=mysql"
//             className="skillImages w-20"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=mongo"
//             className="skillImages w-20"
//           />
//         </div><div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=arduino"
//             className="skillImages w-20"
//           />
//         </div><div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=wordpress"
//             className="skillImages w-20"
//           />
//         </div><div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=git"
//             className="skillImages w-20"
//           />
//         </div><div className="carousel-item">
//           <img
//             src="https://skillicons.dev/icons?i=github"
//             className="skillImages w-20"
//           />
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import "./index.css"; // for custom animation

const skillIcons = [
  "html", "css", "javascript", "react", "php", "java", "python", "cpp", "c",
  "mysql", "mongo", "arduino", "wordpress", "git", "github"
];

export default function Skill() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center pt-20 pb-10">
        <span className="colorChange text-pink-500">Debug</span> dreams and{" "}
        <span className="colorChange text-pink-500">deploy</span> solution.
      </h1>

      <div className="overflow-hidden w-full bg-neutral py-5">
        <div className="scroll-wrapper flex whitespace-nowrap animate-scroll">
          {skillIcons.concat(skillIcons).map((icon, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${icon}`}
              className="skillImages w-20 mx-4 inline-block"
              alt={icon}
            />
          ))}
        </div>
      </div>

        <div className="overflow-hidden w-full bg-neutral py-5">
        <div className="scroll-wrapper flex whitespace-nowrap animate-scroll-reverse">
          {skillIcons.concat(skillIcons).map((icon, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${icon}`}
              className="skillImages w-20 mx-4 inline-block"
              alt={icon}
            />
          ))}
        </div>
      </div>
      
    </>
  );
}

