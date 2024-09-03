import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > document.getElementById('category').offsetHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div
          id="back-to-top"
          className={`back-to-top ${visible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} color="#EC4899" />
        </div>
      );
}
