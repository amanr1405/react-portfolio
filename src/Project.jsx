import React from 'react'

export default function Project() {
  return (
    <>
        <div className="join join-vertical bg-base-100 rounded-2xl">
  <div className="collapse collapse-arrow join-item border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold"><span className="colorChange text-pink-500">Nandi</span> - Robo Soccer Bot</div>
    <div className="collapse-content text-sm">
    <p>
        An autonomous robot developed using Arduino and sensors for Robo Soccer. Achieved 3rd place at IIT BHU by demonstrating precision movement and tactical control. 
    </p>
    <a className="link link-primary">Repo Link</a>

    </div>
    
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold"><span className="colorChange text-pink-500">Student Management Portal</span></div>
    <div className="collapse-content text-sm">
        <p>
            A secure, login-based portal for managing student records with separate roles for admin and students. Helps institutions streamline academic data handling.
        </p>
    <a className="link link-primary">Repo Link</a>

    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold"><span className="colorChange text-pink-500">Virtual Judge</span></div>
    <div className="collapse-content text-sm">
        <p>
            A web app that allows users to search legal cases, view penalties, and understand simplified summaries. Designed to help both legal professionals and the general public access case data quickly.
        </p>

    <a className="link link-primary">Repo Link</a>

    </div>
  </div>
</div>
    
    </>
  )
}
