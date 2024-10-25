import { getDifferenceInDays } from "./getDifferenceInDays"

export const isDueSoon = (targetDate: Date): boolean => {
  const fixedDate = new Date("2024-07-28")
  const difference = getDifferenceInDays(fixedDate, targetDate)

  return difference < 3 && difference >= 0
}
