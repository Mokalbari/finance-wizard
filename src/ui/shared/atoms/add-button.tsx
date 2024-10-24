import clsx from "clsx"

type Props = {
  isBlack: boolean
  showBefore: boolean
  text: string
  type?: "button" | "submit"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export default function AddButton({
  text,
  showBefore,
  isBlack,
  type = "button",
  className,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsx(`rounded-lg p-4 text-sm font-bold ${className}`, {
        "before:content-['+_']": showBefore === true,
        "bg-black text-white": isBlack,
        "bg-beige-100 text-grey-900": !isBlack,
      })}
    >
      {text}
    </button>
  )
}
