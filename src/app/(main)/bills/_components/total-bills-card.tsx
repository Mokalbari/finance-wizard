import BillIcon from "@/ui/icons/icon-recurring-bills.svg"
import clsx from "clsx"
// type Props = {}

export default function TotalBillsCard() {
  return (
    <div
      className={clsx(
        "flex items-center gap-5 rounded-lg bg-black px-5 py-6 text-white",
        "sm:flex-col",
      )}
    >
      <div className="w-1/5 sm:w-full">
        <BillIcon />
      </div>
      <div className="flex w-4/5 flex-col sm:mt-8 sm:w-full">
        <div className="text-sm">Total bills</div>
        <div className="text-xl font-bold">$384.98</div>
      </div>
    </div>
  )
}
