import clsx from "clsx"
import AddButton from "../atoms/add-button"

type Props = {
  isAdding: boolean
}

export default function EditBalanceForm({ isAdding }: Props) {
  return (
    <form>
      <div className="flex items-center justify-between">
        <div className="text-sm">New Amount</div>
        <div className="text-xl font-bold text-black">$139.00</div>
      </div>

      <div className="mt-4 flex h-2 w-full rounded-lg bg-beige-100">
        <div className="h-2 w-[10%] rounded-l-lg border-r-2 border-r-white bg-black" />
        <div
          className={clsx("h-2 w-[20%] rounded-r-lg", {
            "bg-green": isAdding,
            "bg-red": !isAdding,
          })}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <div
          className={clsx("font-bold", {
            "text-green": isAdding,
            "text-red": !isAdding,
          })}
        >
          5.95%
        </div>
        <div>Target of $2.000</div>
      </div>

      <div className="mt-5 flex flex-col">
        <label className="text-xs font-bold" htmlFor="Amount to Withdraw">
          Amount to {isAdding ? "Add" : "Withdraw"}
        </label>
        <input
          className="mt-1 rounded-lg border border-grey-500 px-5 py-3"
          type="text"
          placeholder="$ 20"
        />
        <AddButton
          className="mt-5"
          type="submit"
          isBlack
          showBefore={false}
          text={isAdding ? "Confirm Addition" : "Confirm Withdrawl"}
        />
      </div>
    </form>
  )
}
