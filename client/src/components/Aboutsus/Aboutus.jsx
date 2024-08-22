import React from 'react'
import "./About.css"
import AUimg from '../../assets/Color logo with background.png';

export default function Aboutus() {
  return (
    <section className="Aboutus py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-56">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are a passionate team dedicated to bringing you the best fashion experience. Our mission is to deliver high-quality native attires and fabrics that make you look and feel your best.
          </p>
          <p className="text-lg text-gray-700">
            Our commitment to quality and customer satisfaction drives us to continually improve and innovate. Join us on this exciting journey as we explore the world of fashion together.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={AUimg}
            alt="About Us"
            className="AUimg w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
