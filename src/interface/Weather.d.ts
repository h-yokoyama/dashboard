export interface NearWeathersProps {
  dates: Weather[]
  publishOn: string
}

export interface Weather {
  date: string
  weather: string
  src: string
  high: string
  low: string
  time1?: string
  time2?: string
  time3?: string
  time4?: string
  rainyPer1?: string
  rainyPer2?: string
  rainyPer3?: string
  rainyPer4?: string
  wave?: string
  wind?: string
}

export const defaultNearWeatherProps: NearWeatherProps = {
  dates: {
    date: '',
    weather: '',
    src: '',
    high: '',
    low: '',
    time1: '',
    time2: '',
    time3: '',
    time4: '',
    rainyPer1: '',
    rainyPer2: '',
    rainyPer3: '',
    rainyPer4: '',
    wave: '',
    wind: ''
  },
  publishOn: ''
}
