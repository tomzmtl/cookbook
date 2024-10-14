import { useSelectedRecipe } from "../../features/recipe/hooks"
import Recipe from "../Recipe"
import RecipeList from "../RecipeList"

const RecipesView = () => {
  const recipe = useSelectedRecipe()

  if (recipe) {
    return <Recipe />
  }

  return <RecipeList />
}

export default RecipesView
