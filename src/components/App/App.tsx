import { Autocomplete, Button, FormControl, FormLabel, Input, List, ListItem, Sheet, Stack } from '@mui/joy'
import products from "../../data/products"
import { Product } from '../../types'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Add } from '@mui/icons-material'

type Ingredient = {
  product: Product,
  weight: number
}

const getOptionLabel = (product: Product): string => `${product.name}`

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
    return (
      <ListItem key={ingredient.product.id}>
        {`${ingredient.product.name}: ${ingredient.weight}g`}
      </ListItem>
    )
  })

  const totals = calculateTotals(ingredients)

  return (
    <Sheet className="App" sx={{ p: 2 }}>
      <List>
        {renderSelectedIngredients()}
        <ListItem>
          {`Total: Calories: ${totals.calories.toFixed(0)}, Protéines: ${totals.protein.toFixed(1)}`}
        </ListItem>
      </List>
      <Stack direction="row" key={ingredients.length} spacing={1} marginTop={5}>
        <FormControl>
          <FormLabel>Produit</FormLabel>
          <Autocomplete
            sx={{ width: 500 }}
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
        <Button startDecorator={<Add />} onClick={handleAddIngredient} sx={{ height: 40, alignSelf: "flex-end" }}>Ajouter</Button>
      </Stack>
    </Sheet>
  )
}

export default App
