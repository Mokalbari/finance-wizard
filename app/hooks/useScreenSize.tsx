import { useEffect, useState } from "react"

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
  })

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 640px)")
    const tabletQuery = window.matchMedia(
      "(min-width: 641px) and (max-width: 1024px)",
    )
    const laptopQuery = window.matchMedia("(min-width:1025px)")

    const updateScreenSize = () => {
      setScreenSize({
        isMobile: mobileQuery.matches,
        isTablet: tabletQuery.matches,
        isLaptop: laptopQuery.matches,
      })
    }

    updateScreenSize()

    mobileQuery.addEventListener("change", updateScreenSize)
    tabletQuery.addEventListener("change", updateScreenSize)
    laptopQuery.addEventListener("change", updateScreenSize)

    return () => {
      mobileQuery.removeEventListener("change", updateScreenSize)
      tabletQuery.removeEventListener("change", updateScreenSize)
      laptopQuery.removeEventListener("change", updateScreenSize)
    }
  }, [])

  return screenSize
}
