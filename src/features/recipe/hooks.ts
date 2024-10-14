import { useSelector } from "react-redux"
import recipes from "../../data/recipes"
import { selectSelectedRecipe } from "./selectors"

export const useSelectedRecipe = () => {
  const currentRecipeId = useSelector(selectSelectedRecipe)
  return recipes.find((recipe) => recipe.id === currentRecipeId)
}
