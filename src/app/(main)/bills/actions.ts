import { RecurringBills } from "@/lib/definitions"
import { sql } from "@vercel/postgres"

export const fetchRecurringBills = async (query: string) => {
  try {
    const { rows } = await sql<RecurringBills>`
      SELECT
          id,
          name,
          avatar,
          category,
          date,
          CAST(amount as DOUBLE PRECISION),
          recurring
      FROM transactions
      WHERE recurring = true
      AND name ILIKE ${`%${query}%`}
      ORDER BY date ASC
    `
    return rows
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch recurring bills")
  }
}
