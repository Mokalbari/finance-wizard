"use client"

import type { ReactNode} from "react";
import { createContext, useContext } from "react"
import type { PotsCardType } from "../lib/types/definitions"

interface PotCardContextType {
  data: PotsCardType
}

const PotCardContext = createContext<PotCardContextType | undefined>(undefined)

export const usePotCardContext = () => {
  const context = useContext(PotCardContext)
  if (!context) {
    throw new Error(
      "usePotCardContext must be used within a PotCardContextProvider",
    )
  }
  return context
}

export default function PotCardContextProvider({
  children,
  data,
}: {
  children: ReactNode
  data: PotsCardType
}) {
  return (
    <PotCardContext.Provider value={{ data }}>
      {children}
    </PotCardContext.Provider>
  )
}
