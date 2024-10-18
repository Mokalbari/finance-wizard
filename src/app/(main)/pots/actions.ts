"use server"

import { z } from "zod"
import { PotsCardType } from "@/src/lib/definitions"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// GET

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

// POST
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  target: z.string(),
  total: z.string(),
  theme: z.string(),
  user_id: z.string(),
})

const CreatePot = FormSchema.omit({ id: true, user_id: true, total: true })

export const createNewPot = async (formData: FormData) => {
  const { name, target, theme } = CreatePot.parse({
    name: formData.get("potName"),
    target: formData.get("targetAmount"),
    theme: formData.get("theme"),
  })

  const USER_ID = "488e725f-1ba8-4ea1-a467-c8dc0880db2b"
  const STARTING_VALUE = 0

  await sql`INSERT INTO pots (name, target, total, theme, user_id)
  VALUES (${name}, ${target}, ${STARTING_VALUE}, ${theme}, ${USER_ID})
  `

  revalidatePath("/pots")
  redirect("/pots")
}

// PUT
const UpdatePot = FormSchema.omit({
  id: true,
  user_id: true,
  total: true,
})

export const updatePot = async (id: string, formData: FormData) => {
  const { name, target, theme } = UpdatePot.parse({
    name: formData.get("potName"),
    target: formData.get("targetAmount"),
    theme: formData.get("theme"),
  })

  await sql`
  UPDATE pots
  SET
    name = ${name},
    target = ${target},
    theme = ${theme}
  WHERE id = ${id}
  `
  revalidatePath("/pots")
  redirect("/pots")
}

// DELETE
export const deletePot = async (id: string) => {
  await sql`
  DELETE FROM pots WHERE id = ${id}`
  revalidatePath("/pots")
}
