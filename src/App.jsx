import React from "react"
import HeroImage from "./components/HeroImage"
import HeroHeading from "./components/HeroHeading"
import HeroButton from "./components/HeroButton"
import Activities from "./components/Activities"

function App() {
  return (
    <HeroImage>
      <HeroHeading></HeroHeading>
      <HeroButton></HeroButton>
      <Activities></Activities>
    </HeroImage>
  )
}

export default App
