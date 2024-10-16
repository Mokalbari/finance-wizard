type Props = {
  close: () => void
}

export default function DeleteForm({ close }: Props) {
  const handleCancelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    close()
  }

  return (
    <form className="flex flex-col">
      <button className="rounded-lg bg-red p-4 text-sm font-bold text-white">
        Yes, Confirm Deletion
      </button>
      <button onClick={handleCancelClick} className="rounded-lg p-4 text-sm">
        No, I want to go back
      </button>
    </form>
  )
}
