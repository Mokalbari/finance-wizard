export type ColorPalette =
  | "bg-beige-500"
  | "bg-beige-100"
  | "bg-grey-900"
  | "bg-grey-500"
  | "bg-grey-300"
  | "bg-grey-100"
  | "bg-green"
  | "bg-yellow"
  | "bg-cyan"
  | "bg-navy"
  | "bg-red"
  | "bg-purple"
  | "bg-lavender"
  | "bg-turquoise"
  | "bg-brown"
  | "bg-magenta"
  | "bg-blue"
  | "bg-navy-grey"
  | "bg-army-green"
  | "bg-gold"
  | "bg-orange"
  | "bg-white"

export type ColorPaletteHex =
  | "#98908B" // beige-500
  | "#F8F4F0" // beige-100
  | "#201F24" // grey-900
  | "#696868" // grey-500
  | "#B3B3B3" // grey-300
  | "#F2F2F2" // grey-100
  | "#277C78" // green
  | "#F2CDAC" // yellow
  | "#82C9D7" // cyan
  | "#626070" // navy
  | "#C94736" // red
  | "#826CB0" // purple
  | "#AF81BA" // lavender
  | "#597C7C" // turquoise
  | "#93674F" // brown
  | "#934F6F" // magenta
  | "#3F82B2" // blue
  | "#97A0AC" // navy-grey
  | "#7F9161" // army-green
  | "#CAB361" // gold
  | "#BE6C49" // orange
  | "#FFFFFF" // white

export type SVGProps = {
  sizes?: string
  className?: string
}

export type Links = "/" | "/transactions" | "/budget" | "/bills" | "/pots"

export type DataItem = {
  id: number
  data: string
}

export type DropdownType = "sort" | "filter"

export type UserFinanceData = {
  current: string
  income: string
  expenses: string
}

interface PotsOverviewRaw {
  id: string
  name: string
  theme: ColorPaletteHex
}

export interface PotsOverviewUnprocessedData extends PotsOverviewRaw {
  target: string
  total: string
  total_sum: string
}

export interface PotsOverviewProcessedData extends PotsOverviewRaw {
  target: number
  total: number
  total_sum: number
}

export type ConvertToNumber<T, K extends keyof T> = T & {
  [P in K]: number
}

export type LatestTransactions = {
  id: string
  name: string
  avatar: string
  category: string
  date: Date
  amount: number
}

export type BudgetOverview = {
  id: string
  category: string
  maximum: number
  theme: ColorPaletteHex
  total_spent: number
}
