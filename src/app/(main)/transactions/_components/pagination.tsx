import CaretLeft from "@/src/ui/icons/icon-caret-left.svg"
import CaretRight from "@/src/ui/icons/icon-caret-right.svg"
// type Props = {}

export default function Pagination() {
  return (
    <div className="mt-6 flex justify-between">
      <button className="flex items-center gap-4 rounded-lg border border-grey-900 bg-white px-5 py-3">
        <span>
          <CaretLeft />
        </span>
        <span className="max-sm:hidden">Prev</span>
      </button>
      <div className="flex gap-2">
        <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
          1
        </button>
        <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
          2
        </button>
        <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
          3
        </button>
        <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
          4
        </button>
        <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
          5
        </button>
      </div>
      <button className="flex items-center gap-4 rounded-lg border border-grey-900 bg-white px-5 py-3">
        <span className="max-sm:hidden">Next</span>
        <span>
          <CaretRight />
        </span>
      </button>
    </div>
  )
}
