import React, { useContext } from 'react'
import { zeroPadding } from '../../../lib/ClockUtil'
import { DateContext } from '../Clock'

const DigitalClock: React.FC = () => {
  const date = useContext<Date>(DateContext)
  const hour = zeroPadding(date.getHours(), 2)
  const minute = zeroPadding(date.getMinutes(), 2)
  const second = zeroPadding(date.getSeconds(), 2)
  return (
    <p style={{ fontSize: '72px', lineHeight: 0 }}>
      <span>{hour}</span> : <span>{minute}</span> : <span>{second}</span>
    </p>
  )
}
export default DigitalClock
