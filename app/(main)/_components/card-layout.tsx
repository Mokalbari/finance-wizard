type Props = { children: React.ReactNode; className: string }

export default function CardLayout({ children, className }: Props) {
  return (
    <section className={`rounded-lg bg-white px-5 py-6 ${className}`}>
      {children}
    </section>
  )
}
