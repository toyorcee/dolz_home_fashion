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
    <div><Hero /></div>
    <div><Category /></div>
    <div><Kidcategory /></div>
    <div><Testimonial /></div>
    <div><Contact /></div>
    <div><Aboutus /></div>
    </>
  )
}
