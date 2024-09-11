type Props = {
  htmlTag: "h1" | "h2" | "h3"
  text: string
}

export default function PageTitle({ htmlTag = "h1", text }: Props) {
  const TAG = htmlTag
  return <TAG className="text-xl font-bold">{text}</TAG>
}
