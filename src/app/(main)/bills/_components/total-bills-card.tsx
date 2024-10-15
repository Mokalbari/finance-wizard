import clsx from "clsx"
import BillIcon from "@/src/ui/icons/icon-recurring-bills.svg"
// type Props = {}

export default function TotalBillsCard() {
  return (
    <div
      className={clsx(
        "flex items-center gap-5 rounded-lg bg-black px-5 py-6 text-white",
        "sm:flex-col sm:outline",
      )}
    >
      <div className="w-full">
        <BillIcon />
      </div>
      <div className="flex w-full flex-col sm:mt-8">
        <div className="text-sm">Total bills</div>
        <div className="text-xl font-bold">$384.98</div>
      </div>
    </div>
  )
}
