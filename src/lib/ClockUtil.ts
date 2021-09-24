export const zeroPadding = (num: number, length: number) => {
  return (Array(length).join('0') + num.toString()).slice(-length)
}
