import { Schedule, Thermostat } from "@mui/icons-material"
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import meatCookTempC from "../../data/meatCookTemp"
import { useSelectedRecipe } from "../../features/recipe/hooks"
import { RecipeIngredient } from "../../types"

const Recipe = () => {
  const recipe = useSelectedRecipe()

  if (!recipe) {
    throw new Error("undefined recipe")
  }

  const renderIngredient = (ingredient: RecipeIngredient) => {
    const renderQuantity = () => {
      if (!ingredient.quantity) {
        return null
      }

      const [amount, unit] = ingredient.quantity

      return `${amount}${unit ? ` ${unit}` : ""}`
    }

    const renderPrep = () => {
      if (!ingredient.prep) {
        return null
      }

      return ingredient.prep.join(", ")
    }

    const renderPrimary = () => {
      const quantity = renderQuantity()

      return `${ingredient.name}${quantity ? ` - ${quantity}` : ""}`
    }

    return (
      <ListItem
        sx={{ display: "list-item", paddingTop: "2px", paddingBottom: "2px" }}
        key={ingredient.name}
      >
        <ListItemText primary={renderPrimary()} secondary={renderPrep()} />
      </ListItem>
    )
  }

  const renderInstruction = (instruction: string, index: number) => {
    return (
      <ListItem
        sx={{ display: "list-item", paddingTop: "2px", paddingBottom: "2px" }}
        key={index.toString()}
      >
        {instruction}.
      </ListItem>
    )
  }

  const renderOverPreHeat = () => {
    if (!recipe.oven) {
      return null
    }

    return (
      <Stack alignItems="center" direction="row" gap={2}>
        <Thermostat />
        <Typography variant="body1">
          Préchauffer le four à {recipe.oven.preHeatTempF}°F
        </Typography>
      </Stack>
    )
  }

  const renderSlowCookerCookTemp = () => {
    if (!recipe.slowCooker) {
      return null
    }

    return (
      <>
        <Stack alignItems="center" direction="row" gap={2}>
          <Schedule />
          <Typography variant="body1">
            Cuisson: {recipe.slowCooker.low}h (low) - {recipe.slowCooker.high}h
            (high)
          </Typography>
        </Stack>
      </>
    )
  }

  const renderMeatCookTemp = () => {
    if (!recipe.meatGuide || !meatCookTempC[recipe.meatGuide]) {
      return null
    }

    return (
      <>
        <Stack alignItems="center" direction="row" gap={2}>
          <Thermostat />
          <Typography variant="body1">
            Température de cuisson de la viande:{" "}
            {meatCookTempC[recipe.meatGuide]}°C
          </Typography>
        </Stack>
      </>
    )
  }

  const renderServeWith = () => {
    if (!recipe.serveWith) {
      return null
    }

    return (
      <>
        <Typography variant="h6">Servir avec</Typography>
        <List sx={{ listStyle: "circle", pl: 3 }}>
          {recipe.serveWith.map((ingredient) => (
            <ListItem
              sx={{
                display: "list-item",
                paddingTop: "2px",
                paddingBottom: "2px",
              }}
              key={ingredient}
            >
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>
      </>
    )
  }

  return (
    <Box sx={{ pt: 4 }}>
      <Typography variant="h6">Ingrédients</Typography>
      <List sx={{ listStyle: "circle", pl: 3 }}>
        {recipe.ingredients.map(renderIngredient)}
      </List>
      <Divider sx={{ mt: 2, mb: 3 }} />
      <Typography variant="h6">Instructions</Typography>
      {renderOverPreHeat()}
      <List sx={{ listStyle: "decimal", pl: 3 }}>
        {recipe.instructions.map(renderInstruction)}
      </List>
      {renderSlowCookerCookTemp()}
      {renderMeatCookTemp()}
      <Divider sx={{ mt: 2, mb: 3 }} />
      {renderServeWith()}
    </Box>
  )
}

export default Recipe
