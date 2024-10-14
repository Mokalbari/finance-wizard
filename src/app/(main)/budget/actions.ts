import {
  BudgetCardLatestTransactions,
  BudgetCardType,
} from "@/src/lib/definitions"
import { sql } from "@vercel/postgres"

export const fetchBudgetCard = async () => {
  const fixedDate = new Date("2024-07-28")

  try {
    const { rows } = await sql<BudgetCardType>`
    SELECT
        b.id, b.category, CAST(b.maximum as DOUBLE PRECISION), b.theme, CAST(SUM(t.amount) as DOUBLE PRECISION) AS total_spent
    FROM
        budgets b
    INNER JOIN
        transactions t ON t.category = b.category
    WHERE
         t.date < ${fixedDate.toISOString()}
    GROUP BY
        b.id, b.category, b.maximum, b.theme
    `
    return rows
  } catch (error) {
    console.error("DB error:", error)
    throw new Error("Error while fetching budget categories")
  }
}

export const fetchLatestTransactionsOnBudgetCard = async (category: string) => {
  try {
    const { rows } = await sql<BudgetCardLatestTransactions>`
        SELECT
          t.id, t.name, t.avatar, t.category, t.date, CAST(t.amount as DOUBLE PRECISION)
        FROM
          transactions t
        WHERE
          t.category = ${category}
        ORDER BY
          t.date DESC
        LIMIT 3
        `
    return rows
  } catch (error) {
    console.error("DB error:", error)
    throw new Error("Error while fetching latest 3 transactions")
  }
}
