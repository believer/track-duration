export const parseSeconds = (milliseconds: number) => milliseconds / 1000

export const parseHours = (seconds: number) => Math.floor(seconds / 3600)

export const parseMinutes = (seconds: number) => (hours: number) =>
  Math.floor(seconds / 60 - 60 * hours)

export const parseOutputSeconds = (seconds: number) =>
  Math.round(((seconds / 60) % 1) * 60)

export const addLeadingZero = (parseNumber: number): string => {
  return parseNumber < 10 ? `0${parseNumber}` : `${parseNumber}`
}
