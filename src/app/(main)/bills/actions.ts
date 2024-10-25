import { getUserSortingOption } from "@/lib/functions/general-utils/getUserSortingOption"
import type { Database } from "@/lib/types/db-types"
import type { SortBy } from "@/lib/types/definitions"
import { createKysely } from "@vercel/postgres-kysely"

const db = createKysely<Database>()

export const fetchRecurringBills = async (userQuery: string, sort: SortBy) => {
  const { col, direction } = getUserSortingOption(sort)

  let query = db
    .selectFrom("transactions")
    .select(["id", "name", "avatar", "category", "date", "amount"])
    .where("recurring", "=", true)
    .orderBy(col, direction)

  if (userQuery) {
    query = query.where("name", "ilike", `%${userQuery}%`)
  }

  const rawQuery = await query.execute()

  const data = rawQuery.map(query => ({
    ...query,
    amount: parseFloat(query.amount),
  }))
  return data
}

// export const fetchRecurringBills = async (query: string) => {
//   try {
//     const { rows } = await sql<RecurringBills>`
//       SELECT
//           id,
//           name,
//           avatar,
//           category,
//           date,
//           CAST(amount as DOUBLE PRECISION),
//           recurring
//       FROM transactions
//       WHERE recurring = true
//       AND name ILIKE ${`%${query}%`}
//       ORDER BY date ASC
//     `
//     return rows
//   } catch (error) {
//     console.error(error)
//     throw new Error("Failed to fetch recurring bills")
//   }
// }
