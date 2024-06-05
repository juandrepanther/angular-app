export function truncateString(str: string): string {
  if (str.length <= 100) {
    return str
  } else {
    return str.slice(0, 120) + '...'
  }
}
