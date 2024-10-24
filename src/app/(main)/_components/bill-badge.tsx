import { cn } from "@/helpers/style"
import { BillsSortingOptions } from "@/lib/definitions"
import { LiHTMLAttributes } from "react"

type Props = {
  sortingOption: BillsSortingOptions
  amount: string
} & LiHTMLAttributes<HTMLLIElement>

export default function BillBadge({
  sortingOption,
  amount,
  className,
  ...props
}: Props) {
  return (
    <li
      className={cn(
        `flex justify-between rounded-lg border-l bg-beige-100 px-4 py-5`,
        className,
      )}
      {...props}
    >
      <span className="text-grey-500">{sortingOption}</span>
      <span className="font-bold">${amount}</span>
    </li>
  )
}
