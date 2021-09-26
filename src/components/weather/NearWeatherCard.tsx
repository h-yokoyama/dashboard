import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { red, blue } from '@mui/material/colors'
import { IWeather } from '../../interface/Weather'

function createData(time: string, rainyPer: string) {
  return { time, rainyPer }
}

const NearWeatherCard: React.FC<IWeather> = ({
  date,
  weather,
  src,
  high,
  low,
  time1,
  time2,
  time3,
  time4,
  rainyPer1,
  rainyPer2,
  rainyPer3,
  rainyPer4,
  wave,
  wind
}) => {
  const rows = [
    createData(time1 ?? '', rainyPer1 ?? ''),
    createData(time2 ?? '', rainyPer2 ?? ''),
    createData(time3 ?? '', rainyPer3 ?? ''),
    createData(time4 ?? '', rainyPer4 ?? '')
  ]

  const tableCellStyle = {
    fontSize: '20px',
    padding: '8px',
    fontWeight: 'bold',
    fontFamily: 'Yusei Magic'
  } as const

  return (
    <Card sx={{ m: 1, textAlign: 'center' }}>
      <CardContent>
        <Typography variant='h4' component='div'>
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
      <Typography variant='h3' component='div'>
        {weather}
      </Typography>

      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={tableCellStyle} align='center'>
                時間
              </TableCell>
              {rows.map((row) => (
                <TableCell
                  key={row.time}
                  style={tableCellStyle}
                  align='center'
                  component='th'
                  scope='row'>
                  {row.time}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell style={tableCellStyle} align='center'>
                降水
              </TableCell>
              {rows.map((row) => (
                <TableCell
                  key={row.time}
                  style={tableCellStyle}
                  align='center'
                  component='th'
                  scope='row'>
                  {row.rainyPer}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={tableCellStyle} colSpan={5} align='right'>
                {wind}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={tableCellStyle} colSpan={5} align='right'>
                {wave}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}
export default NearWeatherCard
