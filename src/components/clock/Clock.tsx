import { useState, useEffect, createContext } from 'react'
import { interval } from 'rxjs'
import DigitalClock from './digital/DigitalClock'

export const DateContext = createContext<Date>(new Date())

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => setDate(new Date()))
    return () => subscription.unsubscribe()
  }, [])

  return (
    <DateContext.Provider value={date}>
      <DigitalClock />
    </DateContext.Provider>
  )
}
export default Clock
