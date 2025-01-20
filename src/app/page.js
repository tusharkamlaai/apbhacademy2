'use client'
import React from 'react'
import Carousel from './components/ui/Carousel'
import Card from './components/ui/Card'
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel'
import Training from './components/ui/Training'
import LearningJourney from './components/ui/LearningJourney'
import Map from '@/app/components/ui/Map'
import Demo2 from './Demo2'
const Home = () => {
  return (
    <>
      <Carousel />
      <Card />
      <LearningJourney />
      <Demo2 />
      {/* <Training /> */}
      <Map />
    </>
  )
}

export default Home