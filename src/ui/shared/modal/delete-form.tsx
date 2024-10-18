import { deleteBudget } from "@/src/app/(main)/budget/actions"

type Props = {
  close: () => void
  id: string
}

export default function DeleteForm({ close, id }: Props) {
  const handleCancelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    close()
  }

  const deleteBudgetWithId = deleteBudget.bind(null, id)

  return (
    <form action={deleteBudgetWithId} className="flex flex-col">
      <button className="rounded-lg bg-red p-4 text-sm font-bold text-white">
        Yes, Confirm Deletion
      </button>
      <button onClick={handleCancelClick} className="rounded-lg p-4 text-sm">
        No, I want to go back
      </button>
    </form>
  )
}
