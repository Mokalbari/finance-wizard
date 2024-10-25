import { formatDate } from "@/lib/functions/date/formatDate"
import {
  getBadgeColor,
  formatNumberToString,
} from "@/lib/functions/general-utils/functions"

type Props = {
  amount: number
  date: Date
}

export default function AmountBadge({ amount, date }: Props) {
  return (
    <div className="flex flex-col items-end gap-2">
      <span className={`text-sm font-bold ${getBadgeColor(amount)}`}>
        {formatNumberToString(amount)}
      </span>

      <span className="text-xs text-grey-500 sm:hidden">
        {formatDate(date)}
      </span>
    </div>
  )
}
