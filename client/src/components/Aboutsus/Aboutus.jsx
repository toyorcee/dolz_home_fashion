import React from 'react'
import "./About.css"
import AUimg from '../../assets/Color logo with background.png';

export default function Aboutus() {
  return (
    <section className="Aboutus py-12 my-2">
    <div className="container mx-auto px-4">
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">ABOUT US</h2>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="md:w-1/2 mt-0 my-5 md:mt-8">
          <img
            src={AUimg}
            alt="About Us"
            className="AUimg w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className='md:w-1/2 mt-0 my-5 md:mt-8'>
          <p className="text-lg text-gray-700 mb-4">
            We are a passionate team dedicated to bringing you the best fashion experience. Our mission is to deliver high-quality native attires and fabrics that make you look and feel your best.
          </p>
          <p className="text-lg text-gray-700">
            Our commitment to quality and customer satisfaction drives us to continually improve and innovate. Join us on this exciting journey as we explore the world of fashion together.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
