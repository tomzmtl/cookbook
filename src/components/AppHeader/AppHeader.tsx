import { Divider, Sheet, Stack, Typography } from "@mui/joy"
import NavMenu from "../NavMenu"
import { ReactNode } from "react"

type Props = {
  title: string
  endElement?: ReactNode
}

const AppHeader = ({ title, endElement }: Props) => {
  return (
    <Sheet sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row">
          <NavMenu />
          <Typography level="body3" sx={{ px: 2, py: 1 }}>{title}</Typography>
        </Stack>
        {endElement}
      </Stack>
      <Divider />
    </Sheet>
  )
}

export default AppHeader
