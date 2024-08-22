import React , {useState} from 'react'
import "./Testimonial.css"

export default function Testimonial() {
  const testimonials = [
    {
      name: 'Jane Doe',
      testimony: 'This is the best service I have ever used. Highly recommend to everyone!'
    },
    {
      name: 'John Smith',
      testimony: 'Exceptional quality and great customer service. Will definitely return!'
    },
    {
      name: 'Emily Johnson',
      testimony: 'A wonderful experience from start to finish. The product exceeded my expectations!'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center'>TESTIMONIAL</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 italic">- {testimonials[currentIndex].testimony}</p>
              <p className="mt-4 text-gray-900 font-bold">- {testimonials[currentIndex].name}</p>
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
      </div>
    </section>  )
}
