import dayjs from 'dayjs'

export function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function formatTime(date, format) {
  return dayjs(date).format(format)
}