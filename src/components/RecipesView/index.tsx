import { Box, List, ListItemButton, ListItemText } from "@mui/material"
import recipes from "../../data/recipes"
import { Recipe } from "../../types"

const RecipesView = () => {
  const renderRecipe = (recipe: Recipe) => {
    return (
      <ListItemButton key={recipe.title}>
        <ListItemText
          primary={recipe.title}
          primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
        />
      </ListItemButton>
    )
  }

  return (
    <Box>
      <List>{recipes.map(renderRecipe)}</List>
    </Box>
  )
}

export default RecipesView
