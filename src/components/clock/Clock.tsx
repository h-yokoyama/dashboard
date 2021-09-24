import { useState, useEffect, createContext } from 'react'
import { interval } from 'rxjs'
import DigitalClock from './digital/DigitalClock'

export const DateContext = createContext<Date>(new Date())

export default function Clock() {
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      const now = new Date()
      setDate(now)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <DateContext.Provider value={date}>
      <DigitalClock />
    </DateContext.Provider>
  )
}
