import { PotsCardType } from "@/src/lib/definitions"
import { sql } from "@vercel/postgres"

export const fetchPotsCard = async () => {
  try {
    const { rows } = await sql<PotsCardType>`
        SELECT
            id,
            name,
            CAST(target as INTEGER),
            CAST(total as DOUBLE PRECISION),
            theme
        FROM pots
        `
    return rows
  } catch (error) {
    console.error("DB Error: ", error)
    throw new Error("Failed to fetch pots card from DB")
  }
}
