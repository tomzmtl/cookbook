import { Button, FormControl, FormLabel, Input, ListItem, ListItemContent, Modal, ModalDialog, Sheet, Stack, Typography } from '@mui/joy'
import AppHeader from '../AppHeader'
import { inventoryApi } from '../../features/inventory/api'
import { AwsProduct } from '../../types'
import { Add } from '@mui/icons-material'
import { useState } from 'react'
import NumberInput from '../NumberInput'

const Inventory = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { data } = inventoryApi.useGetAllQuery()
  
  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

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

  return (
    <Sheet>
      <AppHeader title="Inventaire" />
      <Stack alignItems="flex-start" sx={{ my: 1}}>
        <Button onClick={handleOpenModal} size="sm" variant="outlined" startDecorator={<Add />}>
          Ajouter
        </Button>
      </Stack>
      {data?.map(renderProduct)}
      <Modal open={modalOpen} onClose={handleCloseModal} sx={{ p: 4 }}>
        <ModalDialog>
          <Typography id="basic-modal-dialog-title" level="h4">
            Nouveau produit
          </Typography>
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = Object.fromEntries(new FormData(event.currentTarget));

                console.log(formData);
              }}
            >
            <Stack spacing={2} sx={{ mt: 2 }}>
              <FormControl required>
                <FormLabel>Nom</FormLabel>
                <Input name="name" autoFocus required />
              </FormControl>
              <FormControl required>
                <FormLabel>Calories</FormLabel>
                <NumberInput name="calories" required />
              </FormControl>
              <FormControl required>
                <FormLabel>Protéines</FormLabel>
                <NumberInput name="protein" required />
              </FormControl>
              <FormControl>
                <FormLabel>Portion (g)</FormLabel>
                <NumberInput name="portion" placeholder="100" />
              </FormControl>
              <Button type="submit">Ajouter</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </Sheet>
  )
}

export default Inventory
