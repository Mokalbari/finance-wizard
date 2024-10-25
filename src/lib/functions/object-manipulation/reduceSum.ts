export const reduceSum = (array: number[]): number => {
  return array.reduce((acc: number, value: number): number => {
    return (acc += value)
  }, 0)
}
