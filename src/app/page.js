'use client'
import React from 'react'
import Carousel from './components/ui/Carousel'
import Card from './components/ui/Card'
import LearningJourney from './components/ui/LearningJourney'
import Map from '@/app/components/ui/Map'
import OurTraining from './components/ui/OurTraining'
import OnlineTraining from './components/ui/OnlineTraining'
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <Fade>
        <Carousel />
        <Card />
        <LearningJourney />
        <OurTraining />
        <Map />
        <OnlineTraining />
      </Fade>
    </>
  )
}

export default Home