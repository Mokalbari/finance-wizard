import { revalidatePath } from "next/cache"

export async function GET() {
  const path = "/bills"
  revalidatePath(path)
  return Response.json({ message: "yo" })
}
