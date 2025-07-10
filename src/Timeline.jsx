import React from "react";

export default function Timeline() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center pb-10">Code that <span className="colorChange text-pink-500"> solves</span>, designs that <span className="colorChange text-pink-500">speak</span>.</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-pink-500 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1984</time>
            <div className="text-lg font-black">TechSprint Hackathon – IIT Guwahati</div>
            <p className="Para max-w-[30rem]">
              Participated in the national-level hackathon at IIT Guwahati, collaborating with a team to develop innovative solutions under tight deadlines.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-pink-500 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:mb-10">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">Real Skill Hackathon – IC IIT Patna</div>
            <p className="Para max-w-[30rem]">
              Volunteered in handling registration, technical support, and logistics. Contributed to the successful execution of the event.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-pink-500 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">EvoLumin Hackathon – Finalist</div>
            <p className="Para max-w-[30rem]">
              Reached the finals among 100+ participants, showcasing strong problem-solving and development skills in a competitive setting.
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
}
