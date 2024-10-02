import clsx from "clsx"

type Props = {
  showBefore: boolean
  text: string
  type?: "button" | "submit"
}

export default function AddButton({
  text,
  showBefore,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      className={clsx("rounded-lg bg-black p-4 text-sm font-bold text-white", {
        "before:content-['+_']": showBefore === true,
      })}
    >
      {text}
    </button>
  )
}
