import { cn } from "@/helpers/style"
import type { ButtonHTMLAttributes } from "react"

type Props = {
  isBlack: boolean
  showBefore: boolean
  text: string
  className?: string
  onClick?: () => void
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function AddButton({
  text,
  showBefore,
  isBlack,
  className,
  onClick,
  disabled,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        "rounded-lg bg-beige-100 p-4 text-sm font-bold text-grey-900",
        className,
        {
          "before:content-['+_']": showBefore,
          "bg-black text-white": isBlack,
        },
      )}
      {...props}
    >
      {text}
    </button>
  )
}
