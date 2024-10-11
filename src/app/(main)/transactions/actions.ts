import { Categories, LatestTransactions } from "@/src/lib/definitions"
import { sql } from "@vercel/postgres"

export const fetchTransactions = async () => {
  try {
    const { rows } =
      await sql<LatestTransactions>`SELECT id, name, avatar, category, date, amount FROM transactions LIMIT 10`
    return rows
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch transactions")
  }
}

export const fetchCategories = async () => {
  try {
    const { rows } = await sql<Categories>`SELECT category from transactions`
    return rows
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch categories")
  }
}
