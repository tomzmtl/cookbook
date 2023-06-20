import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider>
      <CssBaseline />
    </CssVarsProvider>
    <App />
  </React.StrictMode>,
)
