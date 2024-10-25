import CaretLeft from "@/assets/icons/icon-caret-left.svg"
import CaretRight from "@/assets/icons/icon-caret-right.svg"
import { cn } from "@/helpers/style"
import type { ButtonHTMLAttributes } from "react"

type Props = {
  currentPage: number
  totalPages: number
  direction: "right" | "left"
  createPageUrl: (pageNumber: number | string) => string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function NavButton({
  currentPage,
  totalPages,
  direction,
  createPageUrl,
  ...props
}: Props) {
  const isDisabled = (pageTarget: number) => currentPage === pageTarget

  return (
    <button
      onClick={() => {
        const newPage = direction === "left" ? currentPage - 1 : currentPage + 1
        window.location.href = createPageUrl(newPage)
      }}
      disabled={direction === "left" ? isDisabled(1) : isDisabled(totalPages)}
      className={cn(
        "flex cursor-pointer items-center gap-4 rounded-lg border border-grey-900 bg-white px-5 py-3",
        {
          "cursor-not-allowed border-grey-500 text-grey-500":
            direction === "left" ? isDisabled(1) : isDisabled(totalPages),
        },
      )}
      {...props}
    >
      <span>{direction === "left" ? <CaretLeft /> : <CaretRight />} </span>
      <span className="max-sm:hidden">Prev</span>
    </button>
  )
}
