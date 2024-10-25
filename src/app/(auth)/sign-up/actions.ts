"use server"
import type { FormState } from "@/lib/types/definitions"
import { z } from "zod"

const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),

  email: z.string().email({ message: "Please enter a valid email." }).trim(),

  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
})

export const signup = async (state: FormState, formData: FormData) => {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  //  const { name, email, password } = validatedFields.data

  // console.log("Name:", name)
  // console.log("Email:", email)
  // console.log("Password:", password)

  // Here you could add your database logic.
  //   `
}
