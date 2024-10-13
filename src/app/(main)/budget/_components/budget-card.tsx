// type Props = {}

import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"
import CaretRight from "@/src/ui/icons/icon-caret-right.svg"
import CardTitle from "@/src/ui/shared/atoms/card-title"
import ColorDot from "@/src/ui/shared/atoms/color-dot"

export default function BudgetCard() {
  return (
    <article className="mx-4 rounded-lg bg-white px-5 py-6">
      <header className="flex items-center gap-4">
        <ColorDot color="bg-green" />
        <CardTitle text="Entertainment" />
        <div className="ml-auto">
          <Ellipsis />
        </div>
      </header>
      <section className="mt-5">
        <span className="text-grey-500">Maximum of $50.00</span>
        <div className="mt-4 h-8 w-full rounded-sm bg-beige-100 p-1">
          <div className="h-[90%] w-1/2 rounded-md bg-green" />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex w-1/2 flex-col rounded-sm border-l-4 border-l-green px-4">
            <div>Spent</div>
            <div>$25.00</div>
          </div>
          <div className="border-l-grey flex w-1/2 flex-col rounded-sm border-l-4 px-4">
            <div>Free</div>
            <div>$50.00</div>
          </div>
        </div>
      </section>
      <section className="mt-5 rounded-lg bg-beige-100 p-4">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-md font-bold">LatestSpending</h3>
          <div className="flex items-center gap-3">
            <div className="text-sm text-grey-500">See All</div>
            <CaretRight />
          </div>
        </div>
        <ul className="text-xs">
          <li>
            <div className="flex items-center justify-between">
              <div className="font-bold">Papa Software</div>
              <div className="flex flex-col">
                <div className="font-bold">-$10.00</div>
                <div className="text-grey-500">16 Aug 2024</div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}
