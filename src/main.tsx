import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy/styles';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CssBaseline from '@mui/joy/CssBaseline';
import App from './components/App'
import { Provider } from "react-redux"
import { store } from './app/store';
import Inventory from './components/Inventory';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "inventory",
        element: <Inventory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
    </CssVarsProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
