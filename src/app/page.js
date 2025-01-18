'use client'
import React from 'react'
import Carousel from './components/ui/Carousel'
import Card from './components/ui/Card'
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel'
import Training from './components/ui/Training'
import LearningJourney from './components/ui/LearningJourney'
import Map from './components/ui/Map'
const Home = () => {
  return (
    <>
      <Carousel />
      <Card />
      <LearningJourney />
      <Training />
      <Map />
    </>
  )
}

export default Home