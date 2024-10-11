// type Props = {}

export default function Pagination() {
  return (
    <div className="mt-6 flex justify-between">
      <button className="rounded-lg border border-grey-900 bg-white px-5 py-3">
        Prev
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
      <button className="rounded-lg border border-grey-900 bg-white px-5 py-3">
        Next
      </button>
    </div>
  )
}
