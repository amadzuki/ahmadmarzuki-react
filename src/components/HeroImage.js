import React from "react"

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

export default HeroImage
