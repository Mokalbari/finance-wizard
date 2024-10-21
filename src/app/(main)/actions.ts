import { sql } from "@vercel/postgres"
import {
  BudgetOverview,
  LatestTransactions,
  PotsOverview,
} from "../../lib/definitions"

export const fetchPotsOverview = async () => {
  try {
    const { rows } = await sql<PotsOverview>`
      SELECT 
    id, 
      name, 
      CAST(target AS INTEGER) AS target, 
      CAST(total AS INTEGER) AS total, 
      theme, 
      CAST((SELECT SUM(total) FROM pots) AS INTEGER) AS total_sum
    FROM 
        pots
    LIMIT 4;
      `
    return rows
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch pots data")
  }
}

export const fetchLatestTransactions = async () => {
  try {
    const { rows } =
      await sql<LatestTransactions>`SELECT id, name, avatar, category, date, CAST(amount as INTEGER) FROM transactions LIMIT 5`
    return rows
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
      CAST(b.maximum as DOUBLE PRECISION) AS maximum, 
      b.theme, 
    COALESCE(CAST(SUM(t.amount) AS DOUBLE PRECISION), 0) AS total_spent
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
      b.id, b.category, b.maximum, b.theme
    `
    return rows
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch budget and transactions req")
  }
}
