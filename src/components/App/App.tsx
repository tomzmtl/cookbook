import { Autocomplete, Button, Input, List, ListItem, Sheet, Stack } from '@mui/joy'
import products from "../../data/products"
import { Product } from '../../types'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Add } from '@mui/icons-material'

type Ingredient = {
  product: Product,
  weight: number
}

const getOptionLabel = (product: Product): string => `${product.name}`

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

  return (
    <Sheet className="App" sx={{ p: 2 }}>
      <List>
        {renderSelectedIngredients()}
        <Stack direction="row" key={ingredients.length} spacing={1}>
          <Autocomplete
            sx={{ width: 500 }}
            options={products.filter(product => !ingredients.find(ingredient => ingredient.product.id === product.id))}
            getOptionLabel={getOptionLabel}
            onChange={handleChangeProduct}
            placeholder="Add ingredient..."
          />
          <Input value={selectedWeight} onChange={handleChangeWeight} />
          <Button startDecorator={<Add />} onClick={handleAddIngredient}>Add</Button>
        </Stack>
      </List>
      
    </Sheet>
  )
}

export default App
