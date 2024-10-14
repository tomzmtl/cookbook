import {
  Box,
  Container,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material"

const AppBar = () => {
  return (
    <MuiAppBar position="sticky">
      <Container maxWidth="sm">
        <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cookbook
          </Typography>
          <Box>🥔</Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}

export default AppBar
