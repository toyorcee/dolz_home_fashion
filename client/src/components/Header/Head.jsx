import React from 'react'
import logo from "../../assets/browser.png"
import "./Head.css"


export default function Head() {
  return (
    <header className="body-font bg-gray-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 bg gap-2">
      <img src={logo} alt="" className='logo'/>
      <div className="flex-container flex flex-col">
          <span>DOLZ HOME</span>
          <span>OF FASHION</span>
      </div>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer font-semibold">
      <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]">HOME</a>
      <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]">TESTIMONIAL</a>
      <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]">CATEGORY</a>
      <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]">ABOUT US</a>
    </nav>
    <button className="contact inline-flex items-center bg-gray-100 text-[#2D3748] border-0 py-1 px-3 focus:outline-none hover:bg-[#EC4899] rounded text-base mt-4 md:mt-0">CONTACT
    <svg fill="none" stroke="#667EEA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
    </button>
  </div>
</header>
  )
}
