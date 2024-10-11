import PageTitle from "@/src/ui/shared/atoms/page-title"
import DropdownMenu from "./_components/dropdown-menu"

import { fetchCategories, fetchTransactions } from "./actions"
import { sortByArray } from "@/src/lib/placeholder-data"
import {
  createNewSetFromObjKey,
  formatDate,
  formatNumberToString,
  getUniqueID,
} from "@/src/lib/functions"
import ProfileBadge from "@/src/ui/shared/atoms/profile-badge"

export default async function Page() {
  const categories = await fetchCategories()
  const transactions = await fetchTransactions()

  return (
    <main>
      <PageTitle htmlTag="h1" text="Transactions" className="" />
      <div className="rounded-lg bg-white p-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Search transaction"
            className="rounded-lg border border-grey-900 px-5 py-3"
          />
          <div className="ml-auto flex gap-4">
            <DropdownMenu title="Sort by" data={sortByArray} />
            <DropdownMenu
              title="Category"
              data={createNewSetFromObjKey(categories, "category")}
            />
          </div>
        </div>
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
              <th className="py-5 text-right font-normal text-grey-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(item => {
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
                  <td className="py-6 text-right">
                    {formatNumberToString(item.amount)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="mt-6 flex justify-between">
          <button className="rounded-lg border border-grey-900 bg-white px-5 py-3">
            Prev
          </button>
          <div className="flex gap-2">
            <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
              1
            </button>
            <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
              2
            </button>
            <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
              3
            </button>
            <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
              4
            </button>
            <button className="h-10 w-10 rounded-lg border border-grey-900 bg-white">
              5
            </button>
          </div>
          <button className="rounded-lg border border-grey-900 bg-white px-5 py-3">
            Next
          </button>
        </div>
      </div>
    </main>
  )
}
