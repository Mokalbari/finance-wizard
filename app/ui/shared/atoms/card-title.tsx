type Props = { text: string }

export default function CardTitle({ text }: Props) {
  return <h2 className="text-lg font-bold">{text}</h2>
}
