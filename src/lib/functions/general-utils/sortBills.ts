import type {
  BillsObjectKey,
  RecurringBillsOverview,
  SortingBillsObject,
} from "@/lib/types/definitions"

export const sortBills = (array: RecurringBillsOverview[], date: Date) => {
  const currentDate = new Date(date)
  const output: Record<BillsObjectKey, SortingBillsObject> = {
    paid: {
      id: 1,
      name: "Paid Bills",
      content: [],
    },
    upcoming: {
      id: 2,
      name: "Total Upcoming",
      content: [],
    },
    dueSoon: {
      id: 3,
      name: "Due Soon",
      content: [],
    },
  }

  for (const { date, amount } of array) {
    const billDate = new Date(date)

    if (billDate < currentDate) {
      output["paid"].content.push(amount)
    } else {
      const differenceInTime = billDate.getTime() - currentDate.getTime()
      const differenceInDays = Math.floor(
        differenceInTime / (1000 * 60 * 60 * 24),
      )

      output["upcoming"].content.push(amount)

      if (differenceInDays <= 3) {
        output["dueSoon"].content.push(amount)
      }
    }
  }

  return output
}
