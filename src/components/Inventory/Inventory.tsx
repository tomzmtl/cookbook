import { Button, ListItem, ListItemContent, Sheet, Stack, Typography } from '@mui/joy'
import AppHeader from '../AppHeader'
import { inventoryApi } from '../../features/inventory/api'
import { AwsProduct } from '../../types'
import { Add } from '@mui/icons-material'

const Inventory = () => {
  const { data } = inventoryApi.useGetAllQuery()

  const renderProduct = (product: AwsProduct) => {
    return (
      <ListItem sx={{ mb: 1 }} key={product.id}>
        <ListItemContent>
          <Typography>{product.name}</Typography>
          {/* <Typography level="body2" noWrap>
            I&apos;ll be in your neighborhood doing errands this Tuesday.
          </Typography> */}
        </ListItemContent>
      </ListItem>
    )
  }

  const handleAddProduct = () => {
    console.log("add")
  }

  return (
    <Sheet>
      <AppHeader title="Inventaire" />
      <Stack alignItems="flex-start" sx={{ my: 1}}>
        <Button onClick={handleAddProduct} size="sm" variant="outlined" startDecorator={<Add />}>
          Ajouter
        </Button>
      </Stack>
      {data?.map(renderProduct)}
    </Sheet>
  )
}

export default Inventory
