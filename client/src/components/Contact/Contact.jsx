import React, { useState } from 'react'
import './Contact.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';
import * as yup from 'yup';

export default function Contact() {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: yup.string().required('Email is required').email('Invalid email address'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  });

  // Initialize React Hook Form with Yup validation
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  
 // Handle form submission
   const onSubmit = (data) => {
     setIsLoading(true);
    emailjs.send(
      'service_rapqln3', // Replace with your EmailJS Service ID
      'template_m4zybi8', // Replace with your EmailJS Template ID
      data,
      'ZcqrDBQI0d6Y_A12s' // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      reset(); 
      setIsLoading(false);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send message. Please try again later.');
      setIsLoading(false);
    });
  };

  return (
    <section className="Contactussection text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CONTACT US</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#3498db]">Feel free to reach out to us with any questions or concerns you may have.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          {/* Show Preloader when form is submitting */}
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="loader"></div> {/* You can use a spinner SVG or CSS-based spinner here */}
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register('name')}
                    />
                    <p className="text-red-500 text-sm">{errors.name?.message}</p>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register('email')}
                    />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      {...register('message')}
                    />
                    <p className="text-red-500 text-sm">{errors.message?.message}</p>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="submit flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
