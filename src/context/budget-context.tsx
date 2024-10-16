"use client"

import { createContext, useContext, ReactNode } from "react"
import { BudgetCardType } from "../lib/definitions"

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
