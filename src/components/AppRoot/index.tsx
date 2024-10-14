import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "../../app/store"
import App from "../App"
import AppBar from "../AppBar"

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
      <AppBar />
      <Container maxWidth="sm">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Container>
    </ThemeProvider>
  )
}

export default AppRoot
