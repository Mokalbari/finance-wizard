import Carret from "@/app/ui/icons/icon-caret-right.svg"

type Props = { text: string }

export default function OpenLink({ text }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-grey-500">{text}</span>
      <Carret />
    </div>
  )
}
