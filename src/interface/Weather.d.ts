export interface IWeathersProps {
  dates: IWeather[]
  publishOn: string
}

export interface IWeather {
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
