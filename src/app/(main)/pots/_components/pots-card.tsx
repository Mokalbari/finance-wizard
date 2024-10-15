import { PotsCardType } from "@/src/lib/definitions"
import { getPercentage } from "@/src/lib/functions"
import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"
import AddButton from "@/src/ui/shared/atoms/add-button"
import CardTitle from "@/src/ui/shared/atoms/card-title"
import ColorDot from "@/src/ui/shared/atoms/color-dot"

type Props = {
  data: PotsCardType
}

export default async function PotsCard({ data }: Props) {
  return (
    <article className="rounded-lg bg-white px-5 pb-10 pt-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ColorDot color={data.theme} />
          <CardTitle text={data.name} />
        </div>
        <Ellipsis />
      </header>
      <div className="flex items-center justify-between">
        <div className="text-sm text-grey-500">Total Saved</div>
        <div className="text-xl font-bold">${data.total.toFixed(2)}</div>
      </div>
      <div className="mt-4 h-2 w-full rounded-lg bg-beige-100">
        <div
          className="h-full rounded-lg"
          style={{
            backgroundColor: `${data.theme}`,
            width: `${getPercentage(data.total, data.target)}%`,
          }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs font-bold text-grey-500">
          {getPercentage(data.total, data.target).toFixed(1)}%
        </div>
        <div className="text-xs text-grey-500">Target of ${data.target}</div>
      </div>
      <div className="mt-10 flex justify-evenly">
        <AddButton isBlack={false} showBefore text="Add Money" />
        <AddButton isBlack={false} showBefore={false} text="Withdraw" />
      </div>
    </article>
  )
}
