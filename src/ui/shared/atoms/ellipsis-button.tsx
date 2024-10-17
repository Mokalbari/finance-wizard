"use client"

import { useRef, useState, ReactNode } from "react"
import { useClickAway } from "@/src/hooks/useClickAway"
import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"

type Props = {
  children: ReactNode
}

export default function EllipsisButton({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useClickAway(container, () => setIsOpen(false), isOpen)

  return (
    <div ref={container} className="relative ml-auto cursor-pointer">
      <button className="before:absolute before:-inset-1" onClick={handleClick}>
        <Ellipsis />
      </button>
      {isOpen && <div className="absolute right-0 top-6 w-max">{children}</div>}
    </div>
  )
}
