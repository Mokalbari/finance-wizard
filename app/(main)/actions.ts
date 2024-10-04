import { sql } from "@vercel/postgres"
import { UserFinanceData } from "../lib/definitions"

export const fetchUsersFinance = async () => {
  try {
    const { rows } =
      await sql<UserFinanceData>`SELECT current, income, expenses FROM users`
    const arr: number[] = Object.values(rows[0]).map(Number)
    return arr
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch users data.")
  }
}
