import { useState, useEffect } from "react"

export const useTimer = duration => {
  const [step, setStep] = useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(step + 1)
    }, duration)
    return () => {
      clearInterval(interval)
    }
  }, [step, duration])
  return { step }
}
