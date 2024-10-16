import clsx from "clsx"

type Props = {
  isOpen: boolean
}

export default function CardOptionList({ isOpen }: Props) {
  return (
    <div
      className={clsx("absolute right-0 top-6 w-max", {
        hidden: !isOpen,
      })}
    >
      <ul className="rounded-lg bg-white px-5 text-sm shadow-lg">
        <li className="py-3">Edit Pot</li>
        <li className="border-t border-t-grey-100 py-3 text-red">Delete Pot</li>
      </ul>
    </div>
  )
}
