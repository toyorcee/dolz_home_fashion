import React, { useState } from 'react';
import './Category.css';
import img1 from '../../assets/black-african.jpg';
import img2 from '../../assets/yoruba-lady.jpg';
import img3 from '../../assets/woman-standing-front-yellow-.jpg';
import img4 from '../../assets/african-woman.jpg';
import img5 from '../../assets/black-woman.jpg';
import img6 from '../../assets/globaldecency.jpg';
import img7 from '../../assets/aesthetic.jpg';
import img8 from '../../assets/highfashion-patterns-.avif';
import img9 from '../../assets/lady-sax.jpg';
import img10 from '../../assets/woman-tari.jpg';
import img11 from '../../assets/woman.jpg';
import img12 from '../../assets/yoruba-black-lady.jpg';
import img13 from '../../assets/1a.jpg';
import img14 from '../../assets/1b.jpg';
import img15 from '../../assets/1c.jpg';
import img16 from '../../assets/IMG_5693.JPG';
import img17 from '../../assets/IMG_5694.JPG';
import img18 from '../../assets/IMG_5695.JPG';
export default function Category() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);

    if (showMore) {
      const sectionElement = document.querySelector('.Adultcategorysection');
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

  };
  return (
    <section className="Adultcategorysection text-gray-600 body-font py-12">
      <div className="adultcategory mt-24">
        <h1>ADULT CATEGORY</h1>
      </div>
      <div className="container px-5 py-2 mx-auto">
        <div className="adultcards flex flex-wrap -m-4 relative">
          <div className="md:slanted-text hidden">
            <span>ADULT CATEGORY</span>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={img16} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img17} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  2.5K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img18} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  3.3K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img13} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img14} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  2.5K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img15} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  3.3K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  23
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={img4} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img5} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  2.5K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img6} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  3.3K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  23
                </span>
              </div>
            </div>
          </div>
      </div>

      <div className={`extra-images flex flex-wrap -m-4 transition-all duration-500 ease-in-out ${showMore ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={img7} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img8} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  2.5K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img9} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  3.3K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  23
                </span>
              </div>
            </div>
          </div>
      </div>

      <div className={`extra-images flex flex-wrap -m-4 transition-all duration-500 ease-in-out ${showMore ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={img10} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img11} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  2.5K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img12} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  3.3K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  23
                </span>
              </div>
            </div>
          </div>
      </div>

      <div className={`extra-images flex flex-wrap -m-4 transition-all duration-500 ease-in-out ${showMore ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={img1} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img2} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  2.5K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
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
              <img src={img3} alt="" className="img" />
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-[#667EEA] mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  3.3K
                </span>
                <span className="text-[#667EEA] inline-flex items-center leading-none text-sm">
                  <svg className="svg w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  23
                </span>
              </div>
            </div>
          </div>
      </div>

      
       {/* Show More button */}
        <div className="text-center mt-16">
          <button className="show-more-btn" onClick={handleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}
