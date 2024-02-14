// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const strictEntries = <T extends Record<string, any>>(
  record: T
): [keyof T, T[keyof T]][] => {
  return Object.entries(record)
}