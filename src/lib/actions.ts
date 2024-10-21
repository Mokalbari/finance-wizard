import { sql } from "@vercel/postgres"
import { cache } from "react"
import type { UserFinanceData } from "./definitions"
import { RecurringBillsOverview } from "./definitions"

export const fetchRecurringBills = async () => {
  try {
    const { rows } =
      await sql<RecurringBillsOverview>`SELECT CAST(amount as DOUBLE PRECISION), date from transactions where recurring = true`
    return rows
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch recurring bills")
  }
}

export const fetchUsersFinance = cache(async () => {
  try {
    const { rows } =
      await sql<UserFinanceData>`SELECT CAST(current as INTEGER), CAST(income as INTEGER), CAST(expenses as INTEGER) FROM users`

    const arr: number[] = Object.values(rows[0])
    return arr
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch users data.")
  }
})
