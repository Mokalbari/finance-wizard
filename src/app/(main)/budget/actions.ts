"use server"

import { z } from "zod"
import {
  BudgetCardLatestTransactions,
  BudgetCardType,
} from "@/src/lib/definitions"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// GET

export const fetchBudgetCard = async (): Promise<BudgetCardType[]> => {
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

export const fetchLatestTransactionsOnBudgetCard = async (
  category: string,
): Promise<BudgetCardLatestTransactions[]> => {
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

// POST

const FormSchema = z.object({
  id: z.string(),
  category: z.string(),
  maximum: z.string(),
  theme: z.string(),
  user_id: z.string(),
})

const CreateBudget = FormSchema.omit({ id: true, user_id: true })

export const createNewBudget = async (formData: FormData) => {
  const { category, maximum, theme } = CreateBudget.parse({
    category: formData.get("category"),
    maximum: formData.get("maximum"),
    theme: formData.get("theme"),
  })
  const USER_ID = "488e725f-1ba8-4ea1-a467-c8dc0880db2b"

  await sql`
  INSERT INTO budgets (category, maximum, theme, user_id)
  VALUES (${category}, ${maximum}, ${theme}, ${USER_ID})
  `

  revalidatePath("/budget")
  redirect("/budget")
}

// PUT
const UpdateBudget = FormSchema.omit({ id: true, user_id: true })

export const updateBudget = async (id: string, formData: FormData) => {
  const { category, maximum, theme } = UpdateBudget.parse({
    category: formData.get("category"),
    maximum: formData.get("maximum"),
    theme: formData.get("theme"),
  })

  await sql`
  UPDATE budgets
  SET
    category = ${category},
    maximum = ${maximum},
    theme = ${theme}
  WHERE id = ${id}
    `
  revalidatePath("/budget")
  redirect("/budget")
}

// DELETE

export const deleteBudget = async (id: string) => {
  await sql`
  DELETE FROM budgets WHERE id = ${id}`
  revalidatePath("/budget")
}
