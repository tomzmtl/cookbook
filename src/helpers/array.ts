export const replaceAtIndex = <T>(arr: T[], index: number, replacement: T): T[] => {
  return [
    ...arr.slice(0, index),
    replacement,
    ...arr.slice(index + 1)
  ]
}
