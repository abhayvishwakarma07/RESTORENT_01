import React from 'react'
import CardSlider from './CardSlider'
import Hero from './Hero'
import TopProduct from './TopProduct'
import Contact from './Contect'

function Home() {
  return (
   <>
   <div className='md:py-20'>
    <Hero/>
   <TopProduct/>
   <CardSlider/>
   <Contact/>
   </div>
   </>
  )
}

export default Home
