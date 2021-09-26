import { Box, Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useEffect, useState } from 'react'
import { defaultWeatherProps } from '../../data/Weather'
import { IWeathersProps } from '../../interface/Weather'
import { zeroPadding } from '../../lib/ClockUtil'
import PublishOn from '../PublishOn'
import NearWeatherCard from './NearWeatherCard'
import WeekWeatherCard from './WeekWeatherCard'

const BASE_URL = 'https://lambda-result-bucket.s3.ap-northeast-1.amazonaws.com/'
const URL_NEAR = `${BASE_URL}ytenki_near.json`
const URL_WEEK = `${BASE_URL}ytenki_week.json`
const INTERVAL = 60 * 60 * 2 * 1000 // 2hour

const Weather: React.FC = () => {
  const [nearWeather, setNearWeather] =
    useState<IWeathersProps>(defaultWeatherProps)
  const [weekWeather, setWeekWeather] =
    useState<IWeathersProps>(defaultWeatherProps)
  const [fetchDate, setFetchDate] = useState<string>()
  const [nextFetchDate, setNextFetchDate] = useState<string>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean>(false)
  const setWeather = () => {
    const promiseNear = fetch(URL_NEAR)
      .then((response) => response.json())
      .catch((error) => Promise.reject(error))
    const promiseWeek = fetch(URL_WEEK)
      .then((response) => response.json())
      .catch((error) => Promise.reject(error))

    Promise.all([promiseNear, promiseWeek])
      .then(([promiseNearRes, primiseWeekRes]) => {
        setNearWeather(promiseNearRes)
        setWeekWeather(primiseWeekRes)

        const date = new Date()
        const hour = zeroPadding(date.getHours(), 2)
        const minute = zeroPadding(date.getMinutes(), 2)
        const second = zeroPadding(date.getSeconds(), 2)
        setFetchDate(`取得:${hour}時${minute}分${second}秒`)
        setNextFetchDate(
          `次回:${zeroPadding(date.getHours() + 2, 2)}時${minute}分`
        )
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setWeather()
    const interval = setInterval(() => {
      setWeather()
    }, INTERVAL)
    return () => clearInterval(interval)
  }, [])

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (loading) {
    return (
      <Box sx={{ display: 'block', margin: 'auto' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      <Grid sx={{ width: '50%' }} container spacing={1}>
        <Grid item xs={6}>
          <NearWeatherCard {...nearWeather.dates[0]} />
        </Grid>
        <Grid item xs={6}>
          <NearWeatherCard {...nearWeather.dates[1]} />
        </Grid>
      </Grid>
      <Grid sx={{ width: '50%' }} container spacing={1}>
        <Grid item xs={4}>
          <WeekWeatherCard {...weekWeather.dates[0]} />
        </Grid>
        <Grid item xs={4}>
          <WeekWeatherCard {...weekWeather.dates[3]} />
        </Grid>
        <Grid item xs={4}>
          <WeekWeatherCard {...weekWeather.dates[1]} />
        </Grid>
        <Grid item xs={4}>
          <WeekWeatherCard {...weekWeather.dates[4]} />
        </Grid>
        <Grid item xs={4}>
          <WeekWeatherCard {...weekWeather.dates[2]} />
        </Grid>
        <Grid item xs={4}>
          <WeekWeatherCard {...weekWeather.dates[5]} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid sx={{ textAlign: 'right' }} item xs={6}>
          <PublishOn {...nearWeather} />
        </Grid>
        <Grid sx={{ textAlign: 'right' }} item xs={6}>
          <PublishOn {...nearWeather} />
        </Grid>
        <Grid sx={{ textAlign: 'right' }} item xs={6}>
          <PublishOn publishOn={fetchDate} />
        </Grid>
        <Grid sx={{ textAlign: 'right' }} item xs={6}>
          <PublishOn publishOn={nextFetchDate} />
        </Grid>
      </Grid>
    </>
  )
}
export default Weather
