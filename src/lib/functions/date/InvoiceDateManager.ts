import { getDifferenceInDays } from "./getDifferenceInDays"
import { isDueSoon } from "./isDueSoon"
import { isPaid } from "./isPaid"

const InvoiceDateManager = () => {
  const fixedDate = new Date("2024-07-28")

  return {
    getDifferenceInDays: (targetDate: Date) =>
      getDifferenceInDays(fixedDate, targetDate),
    isDueSoon: (targetDate: Date) => isDueSoon(targetDate),
    isPaid: (targetDate: Date) => isPaid(targetDate),
  }
}

export default InvoiceDateManager
