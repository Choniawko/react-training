import { useEffect } from "react"

export const useDocument = value => {
  useEffect(() => {
    window.document.title = `${value}`
  }, [value])
}
