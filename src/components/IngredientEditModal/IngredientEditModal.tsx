import { FormLabel, Input, Modal, ModalDialog, Typography, FormControl, Stack, Button, Divider } from "@mui/joy"
import { Ingredient } from "../../types"
import { useState } from "react"

type Props = {
  ingredient: Ingredient
  onClose: () => void
  updateIngredient: (arg0: Ingredient) => void
}

const IngredientEditModal = ({ ingredient, onClose, updateIngredient }: Props) => {
  const [weight, setWeight] = useState<string>(ingredient?.weight.toString() ?? "")

  const handleSubmit = () => {
    updateIngredient({ ...ingredient, weight: Number(weight) })
    onClose()
  }

  return (
    <Modal open={ingredient !== null} onClose={onClose}>
      <ModalDialog sx={{ maxWidth: 500 }}>
        <Typography component="h2">
          {ingredient?.product.name}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <FormControl>
          <FormLabel>Changer le poids</FormLabel>
          <Input
            autoFocus
            required
            value={weight}
            onChange={(e) => { setWeight(e.target.value) }}
            slotProps={{ input: { type: "number", inputMode: "decimal" } }}
          />
        </FormControl>
        <Stack marginTop={2} spacing={1} direction="row" justifyContent="flex-end">
          <Button color="neutral" variant="plain" onClick={onClose}>Annuler</Button>
          <Button color="primary" onClick={handleSubmit}>Confirmer</Button>
        </Stack>
      </ModalDialog>
    </Modal>
  )
}

export default IngredientEditModal
