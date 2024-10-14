import { List, ListItemButton, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import recipes from "../../data/recipes"
import { selectRecipe } from "../../features/recipe/slice"
import { Recipe } from "../../types"

const RecipeList = () => {
  const dispatch = useDispatch()

  const handleClick = (recipeId: string) => () => {
    dispatch(selectRecipe(recipeId))
  }

  const renderRecipe = (recipe: Recipe) => {
    return (
      <ListItemButton key={recipe.id} onClick={handleClick(recipe.id)}>
        <ListItemText
          primary={recipe.title}
          primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
        />
      </ListItemButton>
    )
  }

  return <List>{recipes.map(renderRecipe)}</List>
}

export default RecipeList
