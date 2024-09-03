import React from 'react'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import Kidcategory from '../../components/Kidcategory/Kidcategory'
import Testimonial from '../../components/Testimonial/Testimonial'
import Aboutus from '../../components/Aboutsus/Aboutus'
import Contact from '../../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="category"><Category /></section>
      <section id="kidcategory"><Kidcategory /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="contact"><Contact /></section>
      <section id="aboutus"><Aboutus /></section>
    </>
  )
}
