import FilterIcon from "@/ui/icons/icon-filter-mobile.svg"
import SortIcon from "@/ui/icons/icon-sort-mobile.svg"

type Props = {
  title: "Sort by" | "Category"
  onClick: () => void
}

export default function MobileButton({ title, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {title === "Sort by" ? <SortIcon /> : <FilterIcon />}
    </button>
  )
}
