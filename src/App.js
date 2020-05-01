import React from "react"

import HeroImage from "./components/HeroImage"
import HeroHeading from "./components/HeroHeading"
import HeroButton from "./components/HeroButton"
import SectionActivities from "./components/SectionActivities"
import SectionIntroduction from "./components/SectionIntroduction"

function App() {
  return (
    <div>
      <HeroImage>
        <HeroHeading></HeroHeading>
        <HeroButton></HeroButton>
        <SectionActivities></SectionActivities>
      </HeroImage>
      <SectionIntroduction></SectionIntroduction>
    </div>
  )
}

export default App
