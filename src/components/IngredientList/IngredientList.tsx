import { List, ListItem, Typography } from "@mui/joy"
import { Ingredient } from "../../types"
import IngredientListItem from "../IngredientListItem/IngredientListItem"
import { displayCalories, displayProtein } from "../../helpers/Product"

type Props = {
  ingredients: Ingredient[],
  removeIngredient: (productId: string) => void,
  editIngredient: (productId: string) => void,
}

const calculateTotals = (ingredients: Ingredient[]) => {
  const totals = { calories: 0, protein: 0, weight: 0 }

  for (const ingredient of ingredients) {
    totals.calories += (ingredient.product.macros.calories / 100) * ingredient.weight
    totals.protein += (ingredient.product.macros.protein / 100) * ingredient.weight
    totals.weight += ingredient.weight
  }

  return totals
}

const IngredientList = ({ ingredients, removeIngredient, editIngredient }: Props) => {
  const totals = calculateTotals(ingredients)

  const renderSelectedIngredients = () => ingredients.map(ingredient => {
    return (
      <IngredientListItem
        key={ingredient.product.id}
        ingredient={ingredient}
        removeIngredient={removeIngredient}
        editIngredient={editIngredient}
      />
    )
  })

  return (
    <List sx={{ maxWidth: "700px" }}>
      {renderSelectedIngredients()}
      <ListItem>
        <Typography level="body2">
          {`Total: Calories: ${displayCalories(totals.calories)}, Protéines: ${displayProtein(totals.protein)}, Weight: ${totals.weight.toFixed(0)}g`}
        </Typography>
      </ListItem>
    </List>
  )
}

export default IngredientList
