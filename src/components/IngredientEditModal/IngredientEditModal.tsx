import { FormLabel, Input, Modal, ModalDialog, Typography, FormControl, Stack, Button } from "@mui/joy"
import { Ingredient } from "../../types"
import { useState } from "react"

type Props = {
  ingredient: Ingredient | null,
  onClose: () => void
}

const IngredientEditModal = ({ ingredient, onClose }: Props) => {
  const [qty, setQty] = useState<string>("")

  return (
    <Modal open={ingredient !== null} onClose={onClose}>
      <ModalDialog sx={{ maxWidth: 500 }}>
        <Typography component="h2">
          {ingredient?.product.name}
        </Typography>
        <FormControl>
          <FormLabel>Changer la quantité</FormLabel>
          <Input autoFocus required />
        </FormControl>
        <Stack marginTop={2} spacing={1} direction="row" justifyContent="flex-end">
          <Button color="neutral" variant="plain" onClick={onClose}>Annuler</Button>
          <Button color="primary">Confirmer</Button>
        </Stack>
      </ModalDialog>
    </Modal>
  )
}

export default IngredientEditModal
