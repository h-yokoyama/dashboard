import { useContext } from 'react'
import { DateContext } from '../Clock'
import { zeroPadding } from '../../../lib/ClockUtil'

export default function DigitalClock() {
  const date = useContext<Date>(DateContext)
  const hour = zeroPadding(date.getHours(), 2)
  const minute = zeroPadding(date.getMinutes(), 2)
  const second = zeroPadding(date.getSeconds(), 2)
  return (
    <p style={{ fontSize: '144px', lineHeight: 0 }}>
      <span>{hour}</span> : <span>{minute}</span> : <span>{second}</span>
    </p>
  )
}
