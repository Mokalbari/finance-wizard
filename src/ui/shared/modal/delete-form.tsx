import { deleteBudget } from "@/src/app/(main)/budget/actions"
import { deletePot } from "@/src/app/(main)/pots/actions"

type Props = {
  close: () => void
  id: string
  table: "budgets" | "pots"
}

export default function DeleteForm({ close, id, table }: Props) {
  const handleCancelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    close()
  }

  const deleteBudgetWithId = deleteBudget.bind(null, id)
  const deletePotWithId = deletePot.bind(null, id)

  const tableActionRepo = {
    budgets: deleteBudgetWithId,
    pots: deletePotWithId,
  }

  return (
    <form action={tableActionRepo[table]} className="flex flex-col">
      <button className="rounded-lg bg-red p-4 text-sm font-bold text-white">
        Yes, Confirm Deletion
      </button>
      <button onClick={handleCancelClick} className="rounded-lg p-4 text-sm">
        No, I want to go back
      </button>
    </form>
  )
}
