type Props = {
  htmlTag: "h1" | "h2" | "h3"
  text: string
  className: string
}

export default function PageTitle({ htmlTag = "h1", text, className }: Props) {
  const TAG = htmlTag
  return <TAG className={`text-xl font-bold ${className || ""}`}>{text}</TAG>
}
