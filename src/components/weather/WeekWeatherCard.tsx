import { CardContent, Typography, Card, CardMedia } from '@mui/material'
import { red, blue } from '@mui/material/colors'
import React from 'react'
import { IWeather } from '../../interface/Weather'

const WeekWeatherCard: React.FC<IWeather> = ({
  date,
  src,
  high,
  low,
  weather
}) => {
  return (
    <Card sx={{ m: 1, pb: 2, textAlign: 'center' }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {date}
        </Typography>
        <Typography variant='h4' component='span' color={red[500]}>
          {high}
        </Typography>
        <Typography variant='h4' component='span'>
          {' '}
        </Typography>
        <Typography variant='h4' component='span' color={blue[500]}>
          {low}
        </Typography>
      </CardContent>
      <CardMedia component='img' width='100%' image={src} alt={weather} />
      <Typography variant='h4' component='div'>
        {weather}
      </Typography>
    </Card>
  )
}
export default WeekWeatherCard
