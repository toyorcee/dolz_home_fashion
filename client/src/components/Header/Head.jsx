// Head.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/browser.png';
import './Head.css';

export default function Head({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="body-font bg-gray-300">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo and Hamburger Container */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo and Name */}
          <a className="flex title-font font-medium items-center text-gray-900 bg gap-2">
            <img src={logo} alt="logo" className="logo" />
            <div className="flex-container flex flex-col">
              <span>DOLZ HOME</span>
              <span>OF FASHION</span>
            </div>
          </a>

          {/* Hamburger Menu Icon (visible on mobile only) */}
          <div className="ml-auto md:hidden">
            <button onClick={toggleMenu} className="text-gray-900">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center cursor-pointer font-semibold">
          <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('hero')}>HOME</a>
          <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('category')}>CATEGORY</a>
          <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('testimonial')}>TESTIMONIAL</a>
          <a className="mr-5 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('aboutus')}>ABOUT US</a>
        </nav>
        <button className="hidden md:flex contact inline-flex items-center bg-gray-100 text-[#2D3748] border-0 py-1 px-3 focus:outline-none hover:bg-[#EC4899] rounded text-base mt-4 md:mt-0">CONTACT
    <svg fill="none" stroke="#667EEA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
    </button>

        {/* Mobile Menu (visible when isOpen is true) */}
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:hidden mt-4"
          >
            <nav className="flex flex-col items-center text-base justify-center cursor-pointer font-semibold">
              <a className="py-2 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('hero')}>HOME</a>
              <a className="py-2 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('category')}>CATEGORY</a>
              <a className="py-2 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('testimonial')}>TESTIMONIAL</a>
              <a className="py-2 text-[#2D3748] hover:text-[#EC4899]" onClick={() => scrollToSection('aboutus')}>ABOUT US</a>
              <button className="md:hidden contact inline-flex items-center bg-gray-100 text-[#2D3748] border-0 py-1 px-3 focus:outline-none hover:bg-[#EC4899] rounded text-base mt-4 md:mt-0">CONTACT
    <svg fill="none" stroke="#667EEA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
    </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
