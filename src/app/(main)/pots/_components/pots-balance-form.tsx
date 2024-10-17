"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"
import AddButton from "@/src/ui/shared/atoms/add-button"
import { getPercentage } from "@/src/lib/functions"
import { usePotCardContext } from "@/src/context/pots-context"

type Props = {
  isAdding: boolean
}

export default function PotsBalanceForm({ isAdding }: Props) {
  const { data } = usePotCardContext()
  const [amount, setAmount] = useState("")
  const [currentPercentage, setCurrentPercentage] = useState(0)
  const [currentTotal, setCurrentTotal] = useState(data.total)

  const handleChange = (typedAmount: string) => {
    if (!/^\d+$/.test(typedAmount)) return
    setAmount(typedAmount)
  }

  useEffect(() => {
    const typedAmount = +amount
    if (!typedAmount) return

    let updatedTotal = data.total

    if (isAdding) {
      updatedTotal += typedAmount
    } else {
      updatedTotal -= typedAmount
    }

    setCurrentTotal(updatedTotal)
    const percentage = getPercentage(updatedTotal, data.target)
    setCurrentPercentage(percentage)
  }, [amount, data.total, data.target, isAdding])

  return (
    <form>
      <div className="flex items-center justify-between">
        <div className="text-sm">New Amount</div>
        <div className="text-xl font-bold text-black">
          ${currentTotal.toFixed(2)}
        </div>
      </div>

      <div className="mt-4 flex h-2 w-full rounded-lg bg-beige-100">
        <div className="h-2 w-[10%] rounded-l-lg border-r-2 border-r-white bg-black" />
        <div
          style={{ width: `${currentPercentage}%` }}
          className={clsx(`h-2 rounded-r-lg`, {
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
          {currentPercentage.toFixed(2)}%
        </div>
        <div>Target of ${data.target}</div>
      </div>

      <div className="mt-5 flex flex-col">
        <label className="text-xs font-bold" htmlFor="Amount to Withdraw">
          Amount to {isAdding ? "Add" : "Withdraw"}
        </label>
        <input
          value={amount}
          onChange={event => handleChange(event.target.value)}
          className="mt-1 rounded-lg border border-grey-500 px-5 py-3"
          type="text"
          placeholder="$ 20"
        />
        <AddButton
          className="mt-5"
          type="submit"
          isBlack
          showBefore={false}
          text={isAdding ? "Confirm Addition" : "Confirm Withdrawal"}
        />
      </div>
    </form>
  )
}
