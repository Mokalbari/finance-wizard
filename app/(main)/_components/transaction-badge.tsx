import {
  formatDate,
  formatNumberToString,
  getBadgeColor,
} from "@/app/lib/functions"
import ProfileBadge from "@/app/ui/shared/atoms/profile-badge"

type Props = {
  imgSrc: string
  name: string
  category: string
  amount: number
  date: Date
}

export default function TransactionBadge({
  imgSrc,
  name,
  category,
  amount,
  date,
}: Props) {
  return (
    <div className="flex justify-between border-b-[1px] border-b-grey-100 py-5 last:border-b-0">
      <ProfileBadge imgSrc={imgSrc} name={name} category={category} />
      <div className="flex flex-col items-end gap-2">
        <span className={`text-sm font-bold ${getBadgeColor(amount)}`}>
          {formatNumberToString(amount)}
        </span>
        <span className="text-xs text-grey-500">{formatDate(date)}</span>
      </div>
    </div>
  )
}
