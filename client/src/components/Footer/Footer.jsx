// Footer.jsx
import React from 'react';
import logo from '../../assets/browser.png';
import './Footer.css';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="Footersection text-gray-200 body-font mt-2">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="groupicontext flex title-font font-medium md:items-center text-gray-900 mb-4 md:mb-0 bg gap-2">
            <img src={logo} alt="" className='logo'/>
            <div className="flex-container flex flex-col">
              <span>DOLZ HOME</span>
              <span>OF FASHION</span>
            </div>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              HOME
            </h2>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 cursor-pointer"
              onClick={() => scrollToSection('category')}
            >
              CATEGORY
            </h2>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 cursor-pointer"
              onClick={() => scrollToSection('testimonial')}
            >
              TESTIMONIAL
            </h2>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 cursor-pointer"
              onClick={() => scrollToSection('aboutus')}
            >
              ABOUT US
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Designed & Styled By —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@iamtoyorcee & @itsbusybrain</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
