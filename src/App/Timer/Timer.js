import React from "react"
import { useTimer } from "./useTimer"
import { useDocument } from "../useDocument"

export default ({ duration = 1000 }) => {
  const { step } = useTimer(duration)
  useDocument(step)

  return <div>{step}</div>
}
