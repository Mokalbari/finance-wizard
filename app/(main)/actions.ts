import { sql } from "@vercel/postgres"
import {
  BudgetOverview,
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

export const fetchBudgetOverview = async () => {
  try {
    const { rows } = await sql<BudgetOverview>`
    SELECT 
      b.id, 
      b.category, 
      CAST(b.maximum as INTEGER) AS maximum, 
      b.theme, 
    COALESCE(CAST(SUM(t.amount) AS INTEGER), 0) AS total_spent
    FROM 
      budgets b
    LEFT JOIN 
      transactions t 
    ON 
      b.category = t.category
    AND 
      t.user_id = b.user_id
    WHERE 
      b.category IN ('Entertainment', 'Bills', 'Dining Out', 'Personal Care')
    GROUP BY 
      b.id, b.category, b.maximum, b.theme;
    `
    return rows
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch budget and transactions req")
  }
}
