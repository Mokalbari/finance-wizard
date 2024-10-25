import { sql } from "@vercel/postgres"
import { cache } from "react"
import type { UserFinanceData } from "../types/definitions"

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
