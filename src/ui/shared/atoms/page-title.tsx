type Props = {
  text: string
  className: string
}

export default function PageTitle({ text, className }: Props) {
  return <h1 className={`text-xl font-bold ${className || ""}`}>{text}</h1>
}
