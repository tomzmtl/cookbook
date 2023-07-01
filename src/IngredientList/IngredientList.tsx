import { IconButton, List, ListItem, Typography } from "@mui/joy"
import { Ingredient } from "../types"
import { Delete } from "@mui/icons-material"

type Props = {
  ingredients: Ingredient[],
  removeIngredient: (productId: string) => void
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

const getMacros = (ingredient: Ingredient) => ({
  calories: ((ingredient.product.macros.calories / 100) * ingredient.weight),
  protein: ((ingredient.product.macros.protein / 100) * ingredient.weight),
})

const displayCalories = (calories: number) => calories.toFixed(0)

const displayProtein = (protein: number) => protein.toFixed(1)

const IngredientList = ({ ingredients, removeIngredient }: Props) => {
  const totals = calculateTotals(ingredients)

  const renderSelectedIngredients = () => ingredients.map(ingredient => {
    const macros = getMacros(ingredient)

    const text = `${ingredient.product.name}: ${ingredient.weight}g (C: ${displayCalories(macros.calories)}, P: ${displayProtein(macros.protein)})`

    return (
      <ListItem
        key={ingredient.product.id}
        endAction={
          <IconButton size="sm" onClick={() => { removeIngredient(ingredient.product.id) }} color="danger" variant="plain">
            <Delete />
          </IconButton>
        }
      >
        {text}
      </ListItem>
    )
  })

  return (
    <List sx={{ maxWidth: "700px" }}>
      {renderSelectedIngredients()}
      <ListItem>
        <Typography fontWeight={700}>
          {`Total: Calories: ${displayCalories(totals.calories)}, Protéines: ${displayProtein(totals.protein)}, Weight: ${totals.weight.toFixed(0)}g`}
        </Typography>
      </ListItem>
    </List>
  )
}

export default IngredientList
