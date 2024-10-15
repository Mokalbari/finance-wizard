import Image from "next/image"
import { fetchRecurringBills } from "../actions"

export default async function Table() {
  const recurringBills = await fetchRecurringBills()

  return (
    <table className="mt-6 w-full">
      <thead className="text-xs">
        <tr className="border-b border-b-grey-300/50">
          <th className="py-5 text-left font-normal text-grey-500">
            Bill Title
          </th>
          <th className="py-5 text-left font-normal text-grey-500 max-sm:hidden">
            Due Date
          </th>
          <th className="py-5 text-right font-normal text-grey-500">Amount</th>
        </tr>
      </thead>
      <tbody>
        {recurringBills.map(bill => {
          return (
            <tr className="border-b last-of-type:border-b-0" key={bill.id}>
              <td className="py-6">
                <div className="flex items-center gap-4">
                  <Image
                    style={{ borderRadius: "50%" }}
                    width={32}
                    height={32}
                    src={bill.avatar}
                    alt={bill.name}
                  />
                  <span className="text-sm font-bold">{bill.name}</span>
                </div>
                <div className="mt-2 text-xs sm:hidden">
                  Monthly-{bill.date.getDate()}
                </div>
              </td>

              <td className="py-6 text-xs text-grey-500 max-sm:hidden">
                Monthly-{bill.date.getDate()}
              </td>

              <td className="py-6 text-right text-xs text-grey-500">
                <div className="">{bill.amount}</div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
