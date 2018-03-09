import {
  addLeadingZero,
  parseHours,
  parseMinutes,
  parseOutputSeconds,
  parseSeconds,
} from './utils/helpers'

const timeParser = (milliseconds: number): string => {
  const seconds = parseSeconds(milliseconds)

  const hours = parseHours(seconds)
  const minutes = parseMinutes(seconds)(hours)
  const outputSeconds = addLeadingZero(parseOutputSeconds(seconds))

  if (hours === 0) {
    return `${minutes}:${outputSeconds}`
  }

  return `${hours}:${addLeadingZero(minutes)}:${outputSeconds}`
}

export default timeParser
