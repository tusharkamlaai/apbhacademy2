'use client'
import React from 'react'
import Carousel from './components/ui/Carousel'
import Card from './components/ui/Card'
import LearningJourney from './components/ui/LearningJourney'
import Map from '@/app/components/ui/Map'
import OurTraining from './components/ui/OurTraining'
import OnlineTraining from './components/ui/OnlineTraining'
import FadeIn from 'react-fade-in';


const Home = () => {
  return (
    <>
      <FadeIn>
        <Carousel />
        <Card />
        <LearningJourney />
        <OurTraining />
        <Map />
        <OnlineTraining />
      </FadeIn>
    </>
  )
}

export default Home