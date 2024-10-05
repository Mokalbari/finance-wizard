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
