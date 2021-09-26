import { Grid, Box } from '@mui/material'
import React from 'react'
import Clock from './clock/Clock'
import Weather from './weather/Weather'

const DashBoard: React.FC = () => {
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
export default DashBoard
