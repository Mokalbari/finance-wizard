"use client"

import type { ReactNode} from "react";
import { createContext, useContext } from "react"
import type { BudgetCardType } from "../lib/types/definitions"

interface BudgetCardContextType {
  data: BudgetCardType
}

const BudgetCardContext = createContext<BudgetCardContextType | undefined>(
  undefined,
)

export const useBudgetCardContext = () => {
  const context = useContext(BudgetCardContext)
  if (!context) {
    throw new Error(
      "useBudgetCardContext must be used within a BudgetCardProvider",
    )
  }
  return context
}

export default function BudgetCardProvider({
  children,
  data,
}: {
  children: ReactNode
  data: BudgetCardType
}) {
  return (
    <BudgetCardContext.Provider value={{ data }}>
      {children}
    </BudgetCardContext.Provider>
  )
}
