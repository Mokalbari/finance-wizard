import "./styles/styles.css"

export default function BillBadge() {
  return (
    <div
      className={`flex justify-between rounded-lg bg-beige-100 px-4 py-5`}
      style={{ borderLeft: "0.25rem red outset" }}
    >
      <span>Paid Bills</span>
      <span>$190.00</span>
    </div>
  )
}
