import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"
import AddButton from "@/src/ui/shared/atoms/add-button"

// type Props = {}

import CardTitle from "@/src/ui/shared/atoms/card-title"
import ColorDot from "@/src/ui/shared/atoms/color-dot"

export default function PotsCard() {
  return (
    <article className="rounded-lg bg-white px-5 pb-10 pt-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ColorDot color="#201F24" />
          <CardTitle text="Savings" />
        </div>
        <Ellipsis />
      </header>
      <div className="flex items-center justify-between">
        <div>Total Saved</div>
        <div>$159.00</div>
      </div>
      <div className="h-2 w-full rounded-lg bg-beige-100">
        <div className="h-full w-1/3 rounded-lg bg-blue" />
      </div>
      <div className="flex items-center justify-between">
        <div>7.95%</div>
        <div>Target of $2,000</div>
      </div>
      <div className="flex items-center justify-evenly">
        <AddButton isBlack={false} showBefore text="Add Money" />
        <AddButton isBlack={false} showBefore={false} text="Withdraw" />
      </div>
    </article>
  )
}
