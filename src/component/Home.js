import React from 'react'

import CarouselContainer from "./carousel";
import LandingPage from "./landingPage";

import './landing.css'

export default function Home() {
  return (
    <>
        <CarouselContainer />
        <br />
        <p className="heading">All Sorting Algorithms</p>
        <LandingPage />
    </>
  )
}
