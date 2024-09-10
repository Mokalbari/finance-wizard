import clsx from "clsx"

type Props = {
  showBefore: boolean
  text: string
}

export default function AddButton({ text, showBefore }: Props) {
  return (
    <button
      className={clsx("rounded-lg bg-black p-4 text-sm font-bold text-white", {
        "before:content-['+_']": showBefore === true,
      })}
    >
      {text}
    </button>
  )
}
