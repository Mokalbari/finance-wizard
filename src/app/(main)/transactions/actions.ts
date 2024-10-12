import { Categories, LatestTransactions } from "@/src/lib/definitions"
import { sql } from "@vercel/postgres"

const ITEMS_PER_PAGE = 10

export const fetchTransactions = async (category: string | null) => {
  try {
    const { rows } =
      category !== "All transactions"
        ? await sql<LatestTransactions>`SELECT id, name, avatar, category, date, amount FROM transactions WHERE category ILIKE ${`%${category}%`}`
        : await sql<LatestTransactions>`SELECT id, name, avatar, category, date, amount FROM transactions LIMIT 10`
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

export async function fetchTotalPages(query: string) {
  try {
    const count =
      query === "All transactions"
        ? await sql`SELECT COUNT(*) FROM transactions`
        : await sql`SELECT COUNT(*) FROM transactions WHERE category ILIKE ${`%${query}%`}`

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch total number of transactions.")
  }
}
