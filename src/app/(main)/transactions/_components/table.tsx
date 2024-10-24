import AmountBadge from "@/components/ui/amount-badge"
import ProfileBadge from "@/components/ui/profile-badge"
import { formatDate, getBadgeColor } from "@/lib/functions"
import { fetchTransactions } from "../actions"

type Props = {
  category: string
  query: string
  currentPage: number
}

export default async function Table({ category, currentPage, query }: Props) {
  const transactions = await fetchTransactions(category, query, currentPage)

  return (
    <table className="mt-6 w-full">
      <thead className="text-xs">
        <tr className="border-b border-b-grey-300/50">
          <th className="py-5 text-left font-normal text-grey-500">
            Recipient / Sender
          </th>
          <th className="py-5 text-left font-normal text-grey-500 max-sm:hidden">
            Category
          </th>
          <th className="py-5 text-left font-normal text-grey-500 max-sm:hidden">
            Transaction Date
          </th>
          <th className="py-5 text-right font-normal text-grey-500">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => {
          return (
            <tr className="border-b last-of-type:border-b-0" key={item.id}>
              <td className="py-6">
                <ProfileBadge
                  imgSrc={item.avatar}
                  name={item.name}
                  category={item.category}
                />
              </td>
              <td className="py-6 text-xs text-grey-500 max-sm:hidden">
                {item.category}
              </td>
              <td className="py-6 text-xs text-grey-500 max-sm:hidden">
                {formatDate(item.date)}
              </td>
              <td className={`py-6 text-right ${getBadgeColor(item.amount)}`}>
                <AmountBadge amount={item.amount} date={item.date} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
