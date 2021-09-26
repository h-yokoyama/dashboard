import { createTheme, ThemeProvider } from '@mui/material'
import { render } from 'react-dom'
import './index.css'
import App from './App'

const theme = createTheme({
  typography: {
    h3: {
      fontWeight: 'bold'
    },
    h4: {
      fontWeight: 'bold'
    },
    h5: {
      fontWeight: 'bold'
    },
    h6: {
      fontWeight: 'bold'
    }
  },
  palette: {
    mode: 'dark'
  }
})

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
