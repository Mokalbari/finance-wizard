import AmountBadge from "@/components/ui/amount-badge"
import ProfileBadge from "@/components/ui/profile-badge"

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
      <AmountBadge amount={amount} date={date} />
    </div>
  )
}
