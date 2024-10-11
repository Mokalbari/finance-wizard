"use client"

import { useEffect } from "react"

/**
 * useClickAway
 *
 * Déclenche une action lorsque l'utilisateur clique en dehors d'un élément référencé.
 *
 * @param {React.RefObject<HTMLElement>} ref - Référence de l'élément à surveiller pour les clics à l'extérieur.
 * @param {Function} onClickAway - Fonction à exécuter lorsqu'un clic à l'extérieur est détecté.
 * @param {boolean} isActive - Si `true`, active la surveillance des clics à l'extérieur.
 */

export const useClickAway = (
  ref: React.RefObject<HTMLElement>,
  onClickAway: (event: MouseEvent | TouchEvent) => void,
  isActive: boolean,
) => {
  useEffect(() => {
    const handleClickAway = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway(event)
      }
    }

    if (isActive) {
      document.addEventListener("mousedown", handleClickAway)
      document.addEventListener("touchstart", handleClickAway)
    } else {
      document.removeEventListener("mousedown", handleClickAway)
      document.removeEventListener("touchstart", handleClickAway)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickAway)
      document.removeEventListener("touchstart", handleClickAway)
    }
  }, [isActive, ref, onClickAway])
}
