import { sql } from "@vercel/postgres"
import {
  LatestTransactions,
  PotsOverviewProcessedData,
  PotsOverviewUnprocessedData,
  UserFinanceData,
} from "../lib/definitions"
import { processData } from "../lib/functions"

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

export const fetchPotsOverview = async () => {
  try {
    const { rows } = await sql<PotsOverviewUnprocessedData>`
      SELECT id, name, target, total, theme, 
       (SELECT SUM(total) FROM pots) AS total_sum
      FROM pots
      LIMIT 4
      `
    const data: PotsOverviewProcessedData[] = processData(rows, [
      "target",
      "total",
      "total_sum",
    ])
    return data
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch pots data")
  }
}

export const fetchLatestTransactions = async () => {
  try {
    const { rows } =
      await sql<LatestTransactions>`SELECT id, name, avatar, category, date, amount FROM transactions LIMIT 5`
    const data = processData(rows, ["amount"])
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch latest transactions.")
  }
}
