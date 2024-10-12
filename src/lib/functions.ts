import {
  BillsObjectKey,
  RecurringBillsOverview,
  SortBy,
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

export const getUniqueID = (): string => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2)
  return `${timestamp}-${random}`
}

export const createNewSetFromObjKey = <T, K extends keyof T>(
  arr: T[],
  key: K,
): T[K][] => {
  const values = arr.map(item => item[key])
  const newSet = new Set(values)
  return [...newSet]
}

export const generatePagination = (
  currentPage: number,
  totalPages: number,
  isMobile: boolean,
) => {
  // If user is on mobile and page count > 4
  if (isMobile && totalPages > 4) {
    // case where current page is at the beginning
    if (currentPage <= 2) {
      return [1, 2, "...", totalPages]
    }

    // case where current page is towards the end
    if (currentPage >= totalPages - 1) {
      return [1, "...", totalPages - 1, totalPages]
    }

    // else create a full segment
    return [1, "...", currentPage, totalPages]
  }

  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}

export const formatSortOrderForSQL = (sort: SortBy): "ASC" | "DESC" => {
  const DESC: SortBy[] = ["Latest", "Z to A", "Highest"]

  if (DESC.includes(sort)) {
    return "DESC"
  }
  return "ASC"
}

export const formatSortOptionForSQL = (sort: SortBy) => {
  let output: string
  switch (sort) {
    case "Latest":
    case "Oldest":
      output = "date"
      break

    case "A to Z":
    case "Z to A":
      output = "name"
      break

    case "Highest":
    case "Lowest":
      output = "amount"
      break

    default:
      output = "date"
  }
  return output
}
