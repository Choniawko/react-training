import { useState, useCallback } from "react"

export const useNumber = initialValue => {
  const [value, setValue] = useState(initialValue)
  const decrement = useCallback(() => setValue(value - 1), [value])
  const increment = useCallback(() => setValue(value + 1), [value])

  return { value, increment, decrement }
}
