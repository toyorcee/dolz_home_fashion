import React, { useState } from 'react';
import "./Kidcategory.css"
import img1 from '../../assets/Image1.jpg';
import img2 from '../../assets/Image2.jfif';
import img3 from '../../assets/Image6.jpg';
import img4 from '../../assets/Image5.jpg'; // Additional images
import img5 from '../../assets/Image3.jfif';
import img6 from '../../assets/Image4.jfif';

export default function Kidcategory() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="kidcategorysection text-gray-600 body-font">   
    <div className="kidcontainer container px-5 py-24 mx-auto">
    <div className="kidscards flex flex-wrap -m-4 relative">
      <div className="slanted-text" >
        <span>KID CATEGORY</span>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <img src={img1} alt="" className="img1" />
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="icon mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="text-[#ffff] w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="inline-flex items-center leading-none text-sm">
              <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              18
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <img src={img2} alt="" className="img2" />
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="icon mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="text-[#ffff] w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              2.5K
            </span>
            <span className="inline-flex items-center leading-none text-sm">
              <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              35
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <img src={img3} alt="" className="img3" />
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="icon mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="text-[#ffff] w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              3.3K
            </span>
            <span className="inline-flex items-center leading-none text-sm">
              <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              23
            </span>
          </div>
        </div>
      </div>
    </div>

          {/* Hidden Row of Images */}
      <div className={`extra-images flex flex-wrap -m-4 transition-all duration-500 ease-in-out ${showMore ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-4 lg:w-1/3">
          <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <img src={img4} alt="Image 4" className="img4" />
          </div>
        </div>
        <div className="p-4 lg:w-1/3">
          <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <img src={img5} alt="Image 5" className="img5" />
          </div>
        </div>
        <div className="p-4 lg:w-1/3">
          <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <img src={img6} alt="Image 6" className="img6" />
          </div>
        </div>
      </div>
      {/* Show More button */}
      <div className="text-center mt-8">
        <button className="show-more-btn" onClick={handleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
  </div>
  </section>
  )
}
