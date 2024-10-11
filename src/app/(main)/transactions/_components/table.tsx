import { LatestTransactions } from "@/src/lib/definitions"
import ProfileBadge from "@/src/ui/shared/atoms/profile-badge"
import AmountBadge from "@/src/ui/shared/atoms/amount-badge"
import { formatDate, getBadgeColor, getUniqueID } from "@/src/lib/functions"
type Props = {
  data: LatestTransactions[]
}

export default function Table({ data }: Props) {
  return (
    <table className="mt-6 w-full">
      <thead className="">
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
        {data.map(item => {
          return (
            <tr
              className="border-b last-of-type:border-b-0"
              key={getUniqueID()}
            >
              <td className="py-6">
                <ProfileBadge
                  imgSrc={item.avatar}
                  name={item.name}
                  category={item.category}
                  showCategory={false}
                />
              </td>
              <td className="py-6 text-grey-500 max-sm:hidden">
                {item.category}
              </td>
              <td className="py-6 text-grey-500 max-sm:hidden">
                {formatDate(item.date)}
              </td>
              <td className={`py-6 text-right ${getBadgeColor(item.amount)}`}>
                <AmountBadge
                  amount={item.amount}
                  date={item.date}
                  showDate={false}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
