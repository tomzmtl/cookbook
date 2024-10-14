import { ArrowBack } from "@mui/icons-material"
import {
  Box,
  Container,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material"
import { useDispatch } from "react-redux"
import { useSelectedRecipe } from "../../features/recipe/hooks"
import { unselect } from "../../features/recipe/slice"

const AppBar = () => {
  const dispatch = useDispatch()
  const recipe = useSelectedRecipe()

  const renderBackButton = () => {
    if (!recipe) {
      return null
    }

    return (
      <IconButton
        onClick={() => {
          dispatch(unselect())
        }}
        sx={{ mr: 1 }}
      >
        <ArrowBack />
      </IconButton>
    )
  }

  return (
    <MuiAppBar position="sticky">
      <Container maxWidth="sm">
        <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
          {renderBackButton()}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {recipe?.title ?? "Cookbook"}
          </Typography>
          <Box>🥔</Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}

export default AppBar
