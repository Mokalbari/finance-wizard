export const createNewSetFromObjKey = <T, K extends keyof T>(
  arr: T[],
  key: K,
): T[K][] => {
  const values = arr.map(item => item[key])
  const newSet = new Set(values)
  return [...newSet]
}
