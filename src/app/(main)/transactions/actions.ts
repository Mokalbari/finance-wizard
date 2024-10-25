import { Database } from "@/lib/db/types"
import { Categories, SortBy } from "@/lib/definitions"
import { getUserSortingOption } from "@/lib/functions"
import { sql } from "@vercel/postgres"
import { createKysely } from "@vercel/postgres-kysely"

const ITEMS_PER_PAGE = 10

const db = createKysely<Database>()

export const fetchTransactions = async (
  category: string = "All transactions",
  userQuery: string,
  sorting: SortBy,
  currentPage: number = 1,
) => {
  const isCategoryAll = (category: string) => category === "All transactions"
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  const { col, direction } = getUserSortingOption(sorting)

  let query = db
    .selectFrom("transactions")
    .select(["id", "name", "avatar", "category", "date", "amount"])
    .orderBy(col, direction)
    .limit(ITEMS_PER_PAGE)
    .offset(offset)

  if (!isCategoryAll(category)) {
    query = query.where("category", "=", category)
  }

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
