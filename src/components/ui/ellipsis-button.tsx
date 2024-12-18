"use client"

import Ellipsis from "@/assets/icons/icon-ellipsis.svg"
import { useClickAway } from "@/hooks/useClickAway"
import type { ReactNode} from "react";
import { useRef, useState } from "react"

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
