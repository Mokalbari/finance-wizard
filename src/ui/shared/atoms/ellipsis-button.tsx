"use client"

import { useRef, useState } from "react"
import { useClickAway } from "@/src/hooks/useClickAway"
import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"
import CardOptionList from "./card-option-list"

type Props = {
  text: string
}

export default function EllipsisButton({ text }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useClickAway(container, handleClick, isOpen)

  return (
    <div ref={container} className="relative ml-auto cursor-pointer">
      <button className="before:absolute before:-inset-1" onClick={handleClick}>
        <Ellipsis />
      </button>
      <CardOptionList text={text} isOpen={isOpen} category="Budget" />
    </div>
  )
}
