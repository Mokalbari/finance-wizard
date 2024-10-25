export const getDifferenceInDays = (
  currentDate: Date,
  targetDate: Date,
): number => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24
  const differenceInTime = targetDate.getTime() - currentDate.getTime()
  return Math.floor(differenceInTime / MS_PER_DAY)
}
