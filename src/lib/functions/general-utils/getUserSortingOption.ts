import type { Transaction } from "@/lib/db/db-types"
import type { SortBy } from "@/lib/types/definitions"

export const getUserSortingOption = (
  string: SortBy,
): { col: keyof Transaction; direction: "asc" | "desc" } => {
  interface Output {
    col: keyof Transaction
    direction: "asc" | "desc"
  }

  const output: Output = {
    col: "date",
    direction: "desc",
  }

  switch (string) {
    case "Latest":
      output.col = "date"
      output.direction = "desc"
      break

    case "Oldest":
      output.col = "date"
      output.direction = "asc"
      break

    case "A to Z":
      output.col = "name"
      output.direction = "asc"
      break

    case "Z to A":
      output.col = "name"
      output.direction = "desc"
      break

    case "Highest":
      output.col = "amount"
      output.direction = "desc"
      break

    case "Lowest":
      output.col = "amount"
      output.direction = "asc"
      break

    default:
      output.col = "date"
      output.direction = "desc"
      break
  }

  return { col: output.col, direction: output.direction }
}
