import React from "react"

const activities = [
  "Praying",
  "Reading book",
  "Coding",
  "Running",
  "Working out",
  "Eating",
  "Napping",
  "Playing guitar",
  "Singing",
  "Recording",
  "Cleaning litterbox",
  "Feeding the cats",
  "Gaming",
  "Watching anime",
]

function Activities() {
  return (
    <div
      style={{
        alignSelf: "start",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        borderTop: "solid white 1px",
        marginTop: "3em",
      }}
    >
      <h2 style={{ margin: "0" }}>My Activities</h2>
      <ul
        style={{
          listStyle: "none",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {activities.map((activity, index) => {
          return (
            <li style={{ margin: ".5em" }} key={index}>
              {activity}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Activities
