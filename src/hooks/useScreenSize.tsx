import { useEffect, useState } from "react"

/**
 * useScreenSize
 *
 * Gère la détection des tailles d'écran et met à jour l'état en conséquence.
 *
 * @returns {Object}
 * @property {boolean} isMobile - Indique si l'écran est de taille mobile.
 * @property {boolean} isTablet - Indique si l'écran est de taille tablette.
 * @property {boolean} isLaptop - Indique si l'écran est de taille laptop.
 */

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
    const laptopQuery = window.matchMedia("(min-width: 1025px)")

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
