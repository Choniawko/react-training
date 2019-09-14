import React, { useContext, useState, useCallback } from "react"
import { Form } from "../Form"
import { Timer } from "../Timer"
import { Theme } from "../theme-context"
import { Counter } from "../Counter"

export default () => {
  const theme = useContext(Theme)
  const [currScheme, setCurrScheme] = useState(theme.dark)
  const setTheme = useCallback(value => setCurrScheme(theme[value]), [theme])
  return (
    <header style={currScheme} className="App-header">
      <button onClick={() => setTheme("light")}>Set Light theme</button>
      <button onClick={() => setTheme("dark")}>Set Dark theme</button>
      <Timer />
      <Form />
      <Counter />
    </header>
  )
}
