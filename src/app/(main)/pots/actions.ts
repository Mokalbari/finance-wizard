"use server"

import { fetchUsersFinance } from "@/src/lib/actions"
import { PotsCardType } from "@/src/lib/definitions"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const USER_ID = "488e725f-1ba8-4ea1-a467-c8dc0880db2b"

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
  userInput: z.string(),
  newPotTotal: z.string(),
  theme: z.string(),
  user_id: z.string(),
})

const CreatePot = FormSchema.omit({
  id: true,
  user_id: true,
  newPotTotal: true,
})

export const createNewPot = async (formData: FormData) => {
  const { name, target, theme } = CreatePot.parse({
    name: formData.get("potName"),
    target: formData.get("targetAmount"),
    theme: formData.get("theme"),
  })

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
  userInput: true,
  newPotTotal: true,
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

const UpdatePotBalance = FormSchema.omit({
  id: true,
  name: true,
  target: true,
  theme: true,
  user_id: true,
})

export const addMoneyToPot = async (id: string, formData: FormData) => {
  const [userFinance] = await fetchUsersFinance()
  const { userInput, newPotTotal } = UpdatePotBalance.parse({
    userInput: formData.get("userInput"),
    newPotTotal: formData.get("newPotTotal"),
  })

  if (+userInput <= 0) return
  if (userFinance <= 0) return

  if (userFinance > +userInput) {
    const newUserBalance = userFinance - +userInput
    try {
      await sql`BEGIN`

      await sql`
        UPDATE pots
        SET total = ${newPotTotal}
        WHERE id = ${id}`

      await sql`
        UPDATE users
        SET current = ${newUserBalance}
        WHERE id = ${USER_ID}`

      await sql`COMMIT`

      revalidatePath("/pots")
      revalidatePath("/")
    } catch (error) {
      await sql`ROLLBACK`
      console.error("Error while updating user table and pots table", error)
      throw new Error("Error while updating user table and pots table")
    }
  }
}

export const removeMoneyFromPot = async (id: string, formData: FormData) => {
  const [userFinance] = await fetchUsersFinance()
  const { userInput, newPotTotal } = UpdatePotBalance.parse({
    userInput: formData.get("userInput"),
    newPotTotal: formData.get("newPotTotal"),
  })

  if (+userInput <= 0) return

  const newUserBalance = userFinance + +userInput

  try {
    await sql`BEGIN`

    await sql`
    UPDATE pots
    SET total = ${newPotTotal}
    WHERE id = ${id}`

    await sql`
    UPDATE users
    SET current = ${newUserBalance}
    WHERE id = ${USER_ID}`

    await sql`COMMIT`

    revalidatePath("/pots")
    revalidatePath("/")
  } catch (error) {
    await sql`ROLLBACK`
    console.error("Error while updating user table and pots table", error)
    throw new Error("Error while updating user table and pots table")
  }
}

// DELETE
export const deletePot = async (id: string) => {
  await sql`
  DELETE FROM pots WHERE id = ${id}`
  revalidatePath("/pots")
}
