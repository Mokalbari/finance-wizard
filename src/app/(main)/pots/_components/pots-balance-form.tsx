"use client"

import AddButton from "@/components/ui/add-button"
import { usePotCardContext } from "@/context/pots-context"
import { cn } from "@/helpers/style"

import { useEffect, useState } from "react"
import { addMoneyToPot, removeMoneyFromPot } from "../actions"
import { getPercentage } from "@/lib/functions/general-utils/functions"

type Props = {
  isAdding: boolean
  close: () => void
  action: "Add" | "Remove"
}

export default function PotsBalanceForm({ isAdding, close, action }: Props) {
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

  const addMoneyToPotWithId = addMoneyToPot.bind(null, data.id)
  const removeMoneyFromPotWithID = removeMoneyFromPot.bind(null, data.id)

  const getCurrentAction = (action: "Add" | "Remove") =>
    action === "Add" ? addMoneyToPotWithId : removeMoneyFromPotWithID

  return (
    <form action={getCurrentAction(action)}>
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
          className={cn(`h-2 rounded-r-lg bg-red`, {
            "bg-green": isAdding,
          })}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <div
          className={cn("bg-red font-bold", {
            "text-green": isAdding,
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
          name="userInput"
          onChange={event => handleChange(event.target.value)}
          className="mt-1 rounded-lg border border-grey-500 px-5 py-3"
          type="text"
          placeholder="$ 20"
        />
        <input
          type="hidden"
          name="newPotTotal"
          value={currentTotal.toString()}
        />
        <AddButton
          onClick={close}
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
