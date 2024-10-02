type Props = { isFirst: boolean; title: string; cur: string }

import clsx from "clsx"

export default function OverviewCard({ isFirst, title, cur }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 rounded-lg p-5",
        {
          "bg-grey-900 text-white": isFirst,
        },
        { "bg-white text-grey-900": !isFirst },
      )}
    >
      <span
        className={clsx(
          "text-sm",
          {
            "text-grey-500": !isFirst,
          },
          { "text-white": isFirst },
        )}
      >
        {title}
      </span>
      <span className="text-xl font-bold">{cur}</span>
    </div>
  )
}
