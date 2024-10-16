// type Props = {}

export default function DeleteForm() {
  return (
    <form className="flex flex-col">
      <button className="rounded-lg bg-red p-4 text-sm font-bold text-white">
        Yes, Confirm Deletion
      </button>
      <button className="rounded-lg p-4 text-sm">No, I want to go back</button>
    </form>
  )
}
