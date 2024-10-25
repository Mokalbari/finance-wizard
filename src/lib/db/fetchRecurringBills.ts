import { sql } from "@vercel/postgres"
import { cache } from "react"
import type { RecurringBillsOverview } from "../types/definitions"

export const fetchRecurringBills = cache(async () => {
  try {
    const { rows } =
      await sql<RecurringBillsOverview>`SELECT CAST(amount as DOUBLE PRECISION), date from transactions where recurring = true`
    return rows
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch recurring bills")
  }
})
