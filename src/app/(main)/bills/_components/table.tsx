import DueIcon from "@/assets/icons/icon-bill-due.svg"
import CheckIcon from "@/assets/icons/icon-bill-paid.svg"
import { isDueSoon } from "@/lib/functions/date/isDueSoon"
import { isPaid } from "@/lib/functions/date/isPaid"
import { formatNumberToString } from "@/lib/functions/general-utils/functions"
import type { SortBy } from "@/lib/types/definitions"
import clsx from "clsx"
import Image from "next/image"
import { fetchRecurringBills } from "../actions"

type Props = {
  query: string
  sort: SortBy
}

export default async function Table({ query, sort }: Props) {
  const recurringBills = await fetchRecurringBills(query, sort)

  const getIcon = (targetDate: Date) => {
    if (isPaid(targetDate)) {
      return <CheckIcon />
    } else if (isDueSoon(targetDate)) {
      return <DueIcon />
    }
    return null
  }

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
                <div
                  className={clsx(
                    "mt-2 flex items-center gap-2 text-xs sm:hidden",
                    {
                      "text-green": isPaid(bill.date),
                      "text-grey-500": !isPaid(bill.date),
                    },
                  )}
                >
                  <span>Monthly-{bill.date.getDate()}</span>
                  <span>{getIcon(bill.date)}</span>
                </div>
              </td>

              <td
                className={clsx(
                  "flex items-center gap-2 py-6 text-xs max-sm:hidden",
                  {
                    "text-green": isPaid(bill.date),
                    "text-grey-500": !isPaid(bill.date),
                  },
                )}
              >
                <span>Monthly-{bill.date.getDate()}</span>
                <span>{getIcon(bill.date)}</span>
              </td>

              <td className="py-6 text-right text-xs text-grey-500">
                <div
                  className={`${isDueSoon(bill.date) ? "text-red" : "text-black"} font-bold`}
                >
                  {formatNumberToString(Math.abs(bill.amount))}
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
