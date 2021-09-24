import Weather from './weather/Weather'
import Clock from './clock/Clock'
import { Grid, Box } from '@mui/material'

export default function DashBoard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid sx={{ textAlign: 'center', fontWeight: 'bold' }} item xs={12}>
          <Clock />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Weather />
      </Grid>
    </Box>
  )
}
