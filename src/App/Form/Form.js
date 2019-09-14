import React from "react"
import { useInput } from "../useInput"

export default () => {
  const username = useInput("")
  const password = useInput("")
  return (
    <>
      <input {...username.bind} />
      <input {...password.bind} />
      <button onClick={() => console.log(username.value, password.value)}>Submit</button>
    </>
  )
}
