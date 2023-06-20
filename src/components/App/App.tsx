import { Autocomplete, Button, List, ListItem, Sheet } from '@mui/joy'
import { Add } from '@mui/icons-material'
import './App.css'
import products from "../../data/products"
import { Product } from '../../types'
import { SyntheticEvent, useState } from 'react'

const getOptionLabel = (product: Product): string => `${product.name}`

const App = () => {
  const [ingredients, setIngredients] = useState<Product["id"][]>([])
  
  const handleChange = (e: SyntheticEvent, product: Product | null) => {
    if (product) {
      setIngredients(ingredients.concat(product.id))
    }
  }

  const renderSelectedIngredients = () => ingredients.map(id => {
    const product = products.find(product => product.id === id)

    if (!product) {
      return "Unknown"
    }

    return (
      <ListItem key={product.id}>
        {product.name}
      </ListItem>
    )
  })

  return (
    <Sheet className="App">
      <List>
        {renderSelectedIngredients()}
        <Autocomplete
          options={products.filter(product => !ingredients.includes(product.id))}
          getOptionLabel={getOptionLabel}
          onChange={handleChange}
          placeholder="Add ingredient..."
          key={ingredients.length}
        />
      </List>
      
    </Sheet>
  )
}

export default App
