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

export type ColorName =
  | "Intense Beige"
  | "Soft Beige"
  | "Deep Grey"
  | "Neutral Grey"
  | "Light Grey"
  | "Soft Grey"
  | "Emerald Green"
  | "Warm Yellow"
  | "Sky Cyan"
  | "Navy Blue"
  | "Crimson Red"
  | "Royal Purple"
  | "Lavender Mist"
  | "Ocean Turquoise"
  | "Earthy Brown"
  | "Magenta Rose"
  | "Ocean Blue"
  | "Steel Navy-Grey"
  | "Army Green"
  | "Golden Glow"
  | "Burnt Orange"
  | "Pure White"

export type ColorPalette = {
  colorName: ColorName
  colorHex: ColorPaletteHex
}

export type ColorPaletteObj = {
  id: number
} & ColorPalette

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
  current: number
  income: number
  expenses: number
}

export type PotsOverview = {
  id: string
  name: string
  theme: ColorPaletteHex
  target: number
  total: number
  total_sum: number
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

export type RecurringBillsOverview = {
  amount: number
  date: Date
}

export type BillsObjectKey = "paid" | "upcoming" | "dueSoon"

export type BillsSortingOptions = "Paid Bills" | "Total Upcoming" | "Due Soon"

export type SortingBillsObject = {
  id: number
  name: BillsSortingOptions
  content: number[]
}

export type Categories = {
  category: string
}

export type SortBy =
  | "Latest"
  | "Oldest"
  | "A to Z"
  | "Z to A"
  | "Highest"
  | "Lowest"

export type BudgetCardType = {
  id: string
  category: string
  maximum: number
  theme: ColorPaletteHex
  total_spent: number
}

export type BudgetCardLatestTransactions = {
  id: string
  name: string
  avatar: string
  category: string
  date: Date
  amount: number
}

export type PotsCardType = {
  id: string
  name: string
  target: number
  total: number
  theme: ColorPaletteHex
}

export type RecurringBills = {
  id: string
  name: string
  avatar: string
  category: string
  date: Date
  amount: number
  recurring: boolean
}

export type Budget = {
  id: string
  category: string
  maximum: string
  theme: string
  user_id: string
}

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type FormMessages = {
  name: string
  email: string
  password: string
  errors: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
}
