import React from "react"
import { useNumber } from "../useNumber"

export default () => {
  const { value, increment, decrement } = useNumber(0)
  return (
    <>
      <button onClick={decrement}>DEC</button>
      <div>{value}</div>
      <button onClick={increment}>INC</button>
    </>
  )
}
