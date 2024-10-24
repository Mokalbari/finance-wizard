import { cn } from "@/helpers/style"

type Props = {
  text: string
  className: string
}

export default function PageTitle({ text, className }: Props) {
  return <h1 className={cn("text-xl font-bold", className)}>{text}</h1>
}
