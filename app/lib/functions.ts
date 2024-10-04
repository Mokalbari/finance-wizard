import type { ConvertToNumber } from "./definitions"

export const compareValues = <T>(a: T, b: T): boolean => a === b

export const getKeyFromObject = <T, K extends keyof T>(
  object: T,
  key: K,
): T[K] => object[key]

export const processData = <T, K extends keyof T>(
  array: T[],
  keysToConvert: K[],
): ConvertToNumber<T, K>[] => {
  return array.map(item => {
    const newItem = { ...item }
    for (const key of keysToConvert) {
      if (typeof newItem[key] === "string") {
        newItem[key] = Number(newItem[key]) as unknown as T[K]
      }
    }
    return newItem as ConvertToNumber<T, K>
  })
}

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
