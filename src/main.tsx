import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import App from './components/App'
import { Provider } from "react-redux"
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
    </CssVarsProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
