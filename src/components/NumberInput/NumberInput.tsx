import { Input, InputProps } from "@mui/joy"

const NumberInput = (props: InputProps) => {
  return (
    <Input {...props} slotProps={{ input: { type: "number", inputMode: "decimal", pattern: "[0-9.]" } }} />
  )
}

export default NumberInput
