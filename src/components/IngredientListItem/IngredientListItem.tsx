import { IconButton, ListItem, ListItemDecorator, Menu, MenuItem } from "@mui/joy"
import { Ingredient } from "../../types"
import { Delete, Edit, MoreVert } from "@mui/icons-material"
import { displayCalories, displayProtein } from "../../helpers/Product"
import { useRef, useState } from "react"

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
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  const macros = getMacros(ingredient)
  const text = `${ingredient.product.name}: ${ingredient.weight}g (C: ${displayCalories(macros.calories)}, P: ${displayProtein(macros.protein)})`

  const handleOpenMenu = () => { setOpen(true) }
  const handleCloseMenu = () => { setOpen(false) }
  const handleClickEdit = () => { editIngredient(ingredient.product.id) }
  const handleClickDelete = () => { removeIngredient(ingredient.product.id) }

  return (
    <>
      <ListItem
        key={ingredient.product.id}
        endAction={
          <IconButton
            ref={buttonRef}
            variant="outlined"
            color="neutral"
            size="sm"
            onClick={handleOpenMenu}
          >
            <MoreVert />
          </IconButton>
        }
      >
        {text}
      </ListItem>
      <Menu
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleClickEdit}>
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>
          Changer le poids
        </MenuItem>
        <MenuItem onClick={handleClickDelete} color="danger">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <Delete />
          </ListItemDecorator>
          Supprimer
        </MenuItem>
      </Menu>
    </>
    )
}

export default IngredientListItem
