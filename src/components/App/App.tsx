import { compact } from "lodash-es"
import { Autocomplete, Button, Divider, FormControl, FormLabel, Input, List, ListItem, Sheet, Stack } from '@mui/joy'
import products from "../../data/products"
import { Product } from '../../types'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Add } from '@mui/icons-material'

type Ingredient = {
  product: Product,
  weight: number
}

const getMacros = (ingredient: Ingredient) => ({
  calories: ((ingredient.product.macros.calories / 100) * ingredient.weight),
  protein: ((ingredient.product.macros.protein / 100) * ingredient.weight),
})

const displayCalories = (calories: number) => calories.toFixed(0)

const displayProtein = (protein: number) => protein.toFixed(1)

const getOptionLabel = (product: Product): string => compact([
  product.name,
  product.variety,
  product.type,
  product.brand,
  product.color,
  product.flavour,
  product.format,
  product.extra
]).join(", ")

const calculateTotals = (ingredients: Ingredient[]) => {
  const totals = { calories: 0, protein: 0 }

  for (const ingredient of ingredients) {
    totals.calories += (ingredient.product.macros.calories / 100) * ingredient.weight
    totals.protein += (ingredient.product.macros.protein / 100) * ingredient.weight
  }

  return totals
}

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedWeight, setSelectedWeight] = useState<string>("")
  
  const handleChangeProduct = (_e: SyntheticEvent, product: Product | null) => {
    if (product) {
      setSelectedProduct(product)
    }
  }

  const handleChangeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedWeight(e.target.value)
  }

  const handleAddIngredient = () => {
    if (selectedProduct && selectedWeight) {
      setIngredients(ingredients.concat([{
        product: selectedProduct,
        weight: Number(selectedWeight)
      }]))
      setSelectedWeight("")
    }
  }

  const renderSelectedIngredients = () => ingredients.map(ingredient => {
    const macros = getMacros(ingredient)

    return (
      <ListItem key={ingredient.product.id}>
        {`${ingredient.product.name}: ${ingredient.weight}g (Cals: ${displayCalories(macros.calories)}, Prot.: ${displayProtein(macros.protein)}g)`}
      </ListItem>
    )
  })

  const totals = calculateTotals(ingredients)

  return (
    <Sheet className="App" sx={{ p: 2 }}>
      <List>
        {renderSelectedIngredients()}
        <ListItem>
          {`Total: Calories: ${displayCalories(totals.calories)}, Protéines: ${displayProtein(totals.protein)}g`}
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 1 }}
        key={ingredients.length}
        marginTop={3}
        maxWidth={700}
      >
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Produit</FormLabel>
          <Autocomplete
            sx={{ width: "100%" }}
            options={products.filter(product => !ingredients.find(ingredient => ingredient.product.id === product.id))}
            getOptionLabel={getOptionLabel}
            onChange={handleChangeProduct}
            placeholder="Ajouter ingredient..."
          />
        </FormControl>
        <FormControl>
          <FormLabel>Poids</FormLabel>
          <Input value={selectedWeight} onChange={handleChangeWeight} placeholder="Poids (g)" />
        </FormControl>
      </Stack>
      <Button
          startDecorator={<Add />}
          onClick={handleAddIngredient}
          sx={{ width: { xs: "100%", sm: "auto" }, marginTop: 3 }}
        >
            Ajouter
        </Button>
    </Sheet>
  )
}

export default App
