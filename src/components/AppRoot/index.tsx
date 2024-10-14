import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "../../app/store"
import App from "../App"

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
])

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})

const AppRoot = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  )
}

export default AppRoot
