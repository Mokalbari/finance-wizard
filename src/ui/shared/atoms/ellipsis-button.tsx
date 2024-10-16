"use client"

import { useState } from "react"
import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"
import CardOptionList from "./card-option-list"

// type Props = {}

export default function EllipsisButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative ml-auto cursor-pointer">
      <button className="before:absolute before:-inset-1" onClick={handleClick}>
        <Ellipsis />
      </button>
      <CardOptionList isOpen={isOpen} />
    </div>
  )
}
