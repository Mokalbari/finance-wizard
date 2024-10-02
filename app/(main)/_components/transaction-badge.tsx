import ProfileBadge from "@/app/ui/shared/atoms/profile-badge"

type Props = {
  textColor: "text-green" | "text-grey-900"
}

export default function TransactionBadge({ textColor }: Props) {
  return (
    <div className="flex justify-between border-b-[1px] border-b-grey-100 py-5 last:border-b-0">
      <ProfileBadge />
      <div className="flex flex-col items-end gap-2">
        <span className={`text-sm font-bold ${textColor}`}>+$75.50</span>
        <span className="text-xs text-grey-500">19 Aug 2024</span>
      </div>
    </div>
  )
}
