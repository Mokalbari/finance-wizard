import {
  BillsObjectKey,
  RecurringBillsOverview,
  SortingBillsObject,
} from "./definitions"

export const compareValues = <T>(a: T, b: T): boolean => a === b

export const getKeyFromObject = <T, K extends keyof T>(
  object: T,
  key: K,
): T[K] => object[key]

export const getBadgeColor = (amount: number) =>
  amount >= 0 ? "text-green" : "text-grey-900"

export const formatNumberToString = (amount: number): string => {
  return amount >= 0 ? `$${amount}` : `-$${Math.abs(amount)}`
}

export const formatDate = (date: Date): string => {
  const day = date.getDate()
  const month = date.toLocaleString("en-US", { month: "short" })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export const reduceSumFromArray = <T, K extends keyof T>(
  array: T[],
  key: K,
): number => {
  return array.reduce((acc: number, obj: T) => {
    return (acc += obj[key] as unknown as number)
  }, 0)
}

export const sortBills = (array: RecurringBillsOverview[], date: Date) => {
  const currentDate = new Date(date)
  const output: Record<BillsObjectKey, SortingBillsObject> = {
    paid: {
      id: 1,
      name: "Paid Bills",
      content: [],
    },
    upcomming: {
      id: 2,
      name: "Total Upcomming",
      content: [],
    },
    dueSoon: {
      id: 3,
      name: "Due Soon",
      content: [],
    },
  }

  for (let i = 0; i < array.length; i++) {
    const billDate = new Date(array[i].date)
    const billAmount = array[i].amount

    if (billDate < currentDate) {
      output["paid"].content.push(billAmount)
    } else {
      const differenceInTime = billDate.getTime() - currentDate.getTime()
      const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24)

      output["upcomming"].content.push(billAmount)

      if (differenceInDays <= 3) {
        output["dueSoon"].content.push(billAmount)
      }
    }
  }

  return output
}
