import type { ConvertToNumber } from "./definitions"

export const compareValues = <T>(a: T, b: T): boolean => a === b

export const getKeyFromObject = <T, K extends keyof T>(
  object: T,
  key: K,
): T[K] => object[key]

export const processData = <T, K extends keyof T>(
  data: T[],
  keysToConvert: K[],
): ConvertToNumber<T, K>[] => {
  return data.map(item => {
    const newItem = { ...item }
    for (const key of keysToConvert) {
      if (typeof newItem[key] === "string") {
        newItem[key] = Number(newItem[key]) as unknown as T[K]
      }
    }
    return newItem as ConvertToNumber<T, K>
  })
}
