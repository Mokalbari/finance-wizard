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

export const getBadgeColor = (amount: number): string =>
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

export const reduceSum = (array: number[]): number => {
  return array.reduce((acc: number, value: number): number => {
    return (acc += value)
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
