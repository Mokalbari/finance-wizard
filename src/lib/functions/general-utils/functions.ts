export const formatNumberToString = (amount: number): string => {
  return amount >= 0 ? `$${amount}` : `-$${Math.abs(amount)}`
}

export const getBadgeColor = (amount: number): string =>
  amount >= 0 ? "text-green" : "text-grey-900"

export const getUniqueID = (): string => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2)
  return `${timestamp}-${random}`
}

export const getPercentage = (
  currentValue: number,
  totalValue: number,
): number => {
  if (totalValue === 0) {
    return 0
  }

  if (currentValue > totalValue) {
    return 100
  }

  return (currentValue / totalValue) * 100
}
