import React from "react"
import "./App.css"
import { Header } from "./Header"
import { Theme } from "./theme-context"

const theme = {
  light: {
    backgroundColor: "#FFEFD5",
    color: "tomato",
  },
  dark: {
    backgroundColor: "#282c34",
    color: "white",
  },
}

function App() {
  return (
    <Theme.Provider value={theme}>
      <div className="App">
        <Header />
      </div>
    </Theme.Provider>
  )
}

export default App
