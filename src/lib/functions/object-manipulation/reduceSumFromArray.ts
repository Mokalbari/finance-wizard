export const reduceSumFromArray = <T, K extends keyof T>(
  array: T[],
  key: K,
): number => {
  return array.reduce((acc: number, obj: T) => {
    return (acc += obj[key] as unknown as number)
  }, 0)
}
