import { BillsSortingOptions } from "@/src/lib/definitions"
import { cn } from "@/src/lib/style"
import { DetailedHTMLProps, LiHTMLAttributes } from "react"

interface Props
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  sortingOption: BillsSortingOptions
  amount: string
}

// type Props = {
//   sortingOption: BillsSortingOptions
//   amount: string | string
// }

export default function BillBadge({
  sortingOption,
  amount,
  className,
  ...props
}: Props) {
  // }: Props & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) {
  return (
    <li
      className={cn(
        `flex justify-between rounded-lg bg-beige-100 px-4 py-5`,
        className,
      )}
      {...props}
    >
      <span className="text-grey-500">{sortingOption}</span>
      <span className="font-bold">${amount}</span>
    </li>
  )
}
