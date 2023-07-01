import { compact } from "lodash-es"
import { Autocomplete, Button, Divider, FormControl, FormLabel, Input, Sheet, Stack } from '@mui/joy'
import products from "../../data/products"
import { Ingredient, Product } from '../../types'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Add } from '@mui/icons-material'
import IngredientList from "../../IngredientList/IngredientList"

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

  const handleSaveIngredient = () => {
    if (selectedProduct && selectedWeight) {
      setIngredients(ingredients.concat([{
        product: selectedProduct,
        weight: Number(selectedWeight)
      }]))
      setSelectedWeight("")
      setSelectedProduct(null)
    }
  }

  const removeIngredient = (productId: string) => {
    setIngredients(ingredients.filter(ingredient => ingredient.product.id !== productId))
  }

  return (
    <Sheet className="App">
      <IngredientList
        ingredients={ingredients}
        removeIngredient={removeIngredient}
      />
      <Divider />
      <Sheet sx={{ p: 2, position: "sticky", bottom: 0}}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 1 }}
          key={ingredients.length}
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
              value={selectedProduct}
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Poids</FormLabel>
            <Input
              value={selectedWeight}
              onChange={handleChangeWeight}
              placeholder="Poids (g)"
              slotProps={{ input: { type: "number", inputMode: "decimal" } }}
            />
          </FormControl>
        </Stack>
        <Button
          startDecorator={<Add />}
          onClick={handleSaveIngredient}
          sx={{ width: { xs: "100%", sm: "auto" }, marginTop: 3 }}
        >
          Ajouter
        </Button>
      </Sheet>
    </Sheet>
  )
}

export default App
