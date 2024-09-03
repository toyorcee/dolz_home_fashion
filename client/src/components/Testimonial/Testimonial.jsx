import React, { useState, useEffect } from 'react';
import './Testimonial.css';

export default function Testimonial() {
  const testimonials = [
    { name: 'Sarah Collins', testimony: 'DOLZ HOME OF FASHION transformed my wardrobe! The attention to detail and quality of the fabrics are unparalleled. I’ve never felt more stylish!' },
    { name: 'Michael Thompson', testimony: 'The craftsmanship in every piece is extraordinary. The native attires are not only beautiful but also incredibly comfortable. Highly recommended!' },
    { name: 'Aisha Williams', testimony: 'I was blown away by the customer service and the personalized attention I received. The final product was a perfect fit and exactly what I envisioned!' },
    { name: 'David Brown', testimony: 'As a returning customer, I can confidently say that the quality of the designs keeps getting better. I always receive compliments when I wear their creations!' },
    { name: 'Linda Martinez', testimony: 'From consultation to delivery, the experience was seamless. The final attire was exquisite and truly one-of-a-kind. I couldn’t be happier!' },
    { name: 'Olivia Green', testimony: 'The fabrics used are of the highest quality, and the designs are always on-trend. I feel so confident and chic in my outfits from DOLZ HOME OF FASHION!' },
    { name: 'James Taylor', testimony: 'I was impressed by how quickly my order was completed without sacrificing quality. The attention to detail in the tailoring is evident in every stitch.' },
    { name: 'Sophia Robinson', testimony: 'The blog’s fashion tips and insights have completely revamped my style. I’m always excited to see the latest posts and designs!' },
    { name: 'Ethan Clark', testimony: 'The professionalism and passion for fashion are evident in every aspect of the service. The native attires are stunning, and the blog is a fantastic resource!' },
    { name: 'Chloe Lewis', testimony: 'I love how versatile and unique the designs are. Whether I’m dressing up for a special occasion or keeping it casual, DOLZ HOME OF FASHION has something perfect!' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">TESTIMONIAL</h2>
        <div className="relative w-full max-w-md mx-auto">
          <div className="slidergap testimonial-frame relative overflow-hidden">
            <div className="testimonial-slide">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 italic">- {testimonials[currentIndex].testimony}</p>
                <p className="mt-4 text-gray-900 font-bold">- {testimonials[currentIndex].name}</p>
              </div>
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
            onClick={prevTestimonial}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
            onClick={nextTestimonial}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
