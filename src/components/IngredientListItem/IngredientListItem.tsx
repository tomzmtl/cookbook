import { IconButton, ListItem } from "@mui/joy"
import { Ingredient } from "../../types"
import { Delete, Edit, MoreVert } from "@mui/icons-material"
import { displayCalories, displayProtein } from "../../helpers/Product"

type Props = {
  ingredient: Ingredient
  editIngredient: (arg0: string) => void
  removeIngredient: (arg0: string) => void
}

const getMacros = (ingredient: Ingredient) => ({
  calories: ((ingredient.product.macros.calories / 100) * ingredient.weight),
  protein: ((ingredient.product.macros.protein / 100) * ingredient.weight),
})

const IngredientListItem = ({ ingredient, editIngredient, removeIngredient }: Props) => {
  const macros = getMacros(ingredient)
  const text = `${ingredient.product.name}: ${ingredient.weight}g (C: ${displayCalories(macros.calories)}, P: ${displayProtein(macros.protein)})`

  return (
      <ListItem
        key={ingredient.product.id}
        // endAction={
        //   <IconButton variant="outlined" color="neutral" size="sm" onClick={() => { editIngredient(ingredient.product.id) }}>
        //     <MoreVert />
        //   </IconButton>
        // }
      >
        {text}
      </ListItem>
    )
}

export default IngredientListItem
