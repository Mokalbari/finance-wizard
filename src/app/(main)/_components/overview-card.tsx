type Props = { isFirst: boolean; title: string; cur: string }

import { cn } from "@/helpers/style"

export default function OverviewCard({ isFirst, title, cur }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-lg bg-white p-5 text-grey-900",
        {
          "bg-grey-900 text-white": isFirst,
        },
      )}
    >
      <span className={cn("text-sm text-grey-500", { "text-white": isFirst })}>
        {title}
      </span>
      <span className="text-xl font-bold">{cur}</span>
    </div>
  )
}
