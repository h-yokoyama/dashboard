import { CardContent, Typography, Card, CardMedia } from '@mui/material'
import { red, blue } from '@mui/material/colors'
import { Weather } from '../../interface/Weather'

export default function WeekWeatherCard({
  date,
  src,
  high,
  low,
  weather
}: Weather) {
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
