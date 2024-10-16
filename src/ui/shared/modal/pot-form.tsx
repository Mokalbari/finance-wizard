import CaretDown from "@/src/ui/icons/icon-caret-down.svg"
import ColorDot from "../atoms/color-dot"
import AddButton from "../atoms/add-button"
// type Props = {}

export default function PotForm() {
  return (
    <form className="flex flex-col">
      <div>
        <div className="text-xs font-bold">Pot Name</div>
        <input
          className="flex w-full items-center justify-between rounded-lg border border-grey-500 px-5 py-3"
          placeholder="e.g. Rainy Days"
        />

        <div className="mt-4">
          <label className="text-xs font-bold" htmlFor="spending">
            Target
          </label>
          <input
            className="w-full rounded-lg border border-grey-500 px-5 py-3"
            placeholder="$    e.g. 2000"
            type="text"
          />
        </div>

        <div className="mt-4">
          <div className="text-xs font-bold">Theme</div>
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
      <AddButton isBlack text="Add Pot" showBefore={false} className="mt-5" />
    </form>
  )
}
