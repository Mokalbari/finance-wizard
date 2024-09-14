import "./styles/styles.css"

export default function BillBadge() {
  return (
    <div
      className={`cstm-border flex justify-between rounded-lg border-l-2 border-l-green bg-beige-100 px-4 py-5`}
    >
      <span>Paid Bills</span>
      <span>$190.00</span>
    </div>
  )
}
