import CaretDown from "@/src/ui/icons/icon-caret-down.svg"
import ColorDot from "@/src/ui/shared/atoms/color-dot"
import AddButton from "@/src/ui/shared/atoms/add-button"
// type Props = {}

export default function BudgetForm() {
  return (
    <form className="flex flex-col">
      <div>
        <div className="text-xs font-bold">Budget Category</div>
        <div className="flex items-center justify-between rounded-lg border border-grey-500 px-5 py-3">
          Entertainement
          <button>
            <CaretDown />
          </button>
        </div>

        <div className="mt-4">
          <label className="text-xs font-bold" htmlFor="spending">
            Maximum Spending
          </label>
          <input
            className="w-full rounded-lg border border-grey-500 px-5 py-3"
            placeholder="$    e.g. 2000"
            type="text"
          />
        </div>

        <div className="mt-4">
          <div className="text-xs font-bold">Color Tag</div>
          <div className="flex items-center justify-between rounded-lg border border-grey-500 px-5 py-3">
            <div className="flex items-center gap-2">
              <ColorDot color="#277C78" />
              <span className="text-black">Green</span>
            </div>
            <button>
              <CaretDown />
            </button>
          </div>
        </div>
      </div>
      <AddButton
        isBlack
        text="Add Budget"
        showBefore={false}
        className="mt-5"
      />
    </form>
  )
}
