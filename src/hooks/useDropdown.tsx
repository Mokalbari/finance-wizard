import { useState } from "react"

/**
 * useDropdown
 *
 * Gère l'ouverture et la fermeture d'un dropdown.
 *
 * @returns {Object}
 * @property {boolean} isOpen - État indiquant si le dropdown est ouvert ou fermé.
 * @property {Function} toggleDropdown - Fonction permettant de basculer l'état du dropdown.
 * @property {Function} closeDropdown - Fonction permettant de fermer le dropdown.
 */

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(prev => !prev)
  const closeDropdown = () => setIsOpen(false)

  return { isOpen, toggleDropdown, closeDropdown }
}
