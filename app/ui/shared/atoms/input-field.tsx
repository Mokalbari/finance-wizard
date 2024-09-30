import clsx from "clsx"
import IconSearch from "@/app/ui/icons/icon-search.svg"

type Props = {
  placeholder: string
  show: "dollar" | "loop" | null
}

export default function InputField({ placeholder, show }: Props) {
  return (
    <div className="relative flex">
      <input
        className={clsx(
          "flex-1 rounded-lg border-[1px] border-beige-500 px-5 py-3 text-sm placeholder:text-beige-500 active:border-grey-900",
          { "pl-10": show === "dollar" },
          { "pr-10": show === "loop" },
        )}
        placeholder={placeholder}
      />
      {show === "dollar" && (
        <span className="absolute left-0 top-1 ml-4 translate-y-2/4 text-sm text-beige-500">
          $
        </span>
      )}
      {show === "loop" && (
        <span className="absolute right-0 top-[10%] mr-4 translate-y-3/4">
          <IconSearch />{" "}
        </span>
      )}
    </div>
  )
}
