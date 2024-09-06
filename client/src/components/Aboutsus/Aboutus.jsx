import React, { useState } from 'react';
import "./About.css"
import AUimg from '../../assets/Color logo with background.png';
import cac from '../../assets/CAC.PNG';

export default function Aboutus() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <section className="Aboutus py-12 my-2">
    <div className="container mx-auto px-4">
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">ABOUT US</h2>
      <div className="aboutuscontainer grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 items-center my-5">
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={AUimg}
            alt="About Us"
            className="about-img w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src={cac}
            alt="CAC Certificate"
            className="about-img w-full h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal()}
          />
        </div>
        <div>
          <p className="aboutus-para text-lg text-gray-700 mb-4 font-bold justify-center align-center">
            We are a passionate team dedicated to bringing you the best fashion experience...
            Our commitment to quality and customer satisfaction drives us to continually improve and innovate...
          </p>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center" onClick={() => closeModal()}>
          <img src={cac} alt="CAC Certificate Full View" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  </section>
  )
}
