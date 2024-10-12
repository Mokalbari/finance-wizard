import CaretLeft from "@/src/ui/icons/icon-caret-left.svg"
import CaretRight from "@/src/ui/icons/icon-caret-right.svg"
import { fetchTotalPages } from "../actions"
import { generatePagination, getUniqueID } from "@/src/lib/functions"
import clsx from "clsx"

// type Props = {
//   query:
// }

export default async function Pagination() {
  const totalPages = await fetchTotalPages("All transactions")
  const currentPage = 2
  const mobileButtonArray = generatePagination(currentPage, totalPages, true)
  const buttonArray = generatePagination(currentPage, totalPages, false)

  return (
    <div className="mt-6 flex justify-between text-sm">
      <button className="flex items-center gap-4 rounded-lg border border-grey-900 bg-white px-5 py-3">
        <span>
          <CaretLeft />
        </span>
        <span className="max-sm:hidden">Prev</span>
      </button>
      <div className="flex gap-2 sm:hidden">
        {mobileButtonArray.map(button => (
          <button
            className={clsx(
              "h-10 w-10 rounded-lg border border-grey-900",
              { "bg-black text-white": button === currentPage },
              { "bg-white text-black": button !== currentPage },
            )}
            key={getUniqueID()}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="flex gap-2 max-sm:hidden">
        {buttonArray.map(button => (
          <button
            className={clsx(
              "h-10 w-10 rounded-lg border border-grey-900",
              { "bg-black text-white": button === currentPage },
              { "bg-white text-black": button !== currentPage },
            )}
            key={getUniqueID()}
          >
            {button}
          </button>
        ))}
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
