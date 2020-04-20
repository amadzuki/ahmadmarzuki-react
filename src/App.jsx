import React from "react"

function HeroHeading() {
  return (
    <h1
      style={{
        fontSize: "65px",
        color: "white",
        margin: "10px",
      }}
    >
      Hello, I'm Marzuki
    </h1>
  )
}

const HeroButton = () => {
  return (
    <div>
      <button
        style={{
          fontFamily: "Roboto",
          background: "orange",
          border: "none",
          borderRadius: "50px",
          padding: "15px 30px",
          fontSize: "21px",
        }}
      >
        See My Portfolio
      </button>
    </div>
  )
}

function HeroImage({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url("/images/HeroHome.jpg")`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <HeroImage>
      <HeroHeading></HeroHeading>
      <HeroButton></HeroButton>
    </HeroImage>
  )
}

export default App
