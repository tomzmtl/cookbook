import { Stack, Typography } from "@mui/joy"
import NavMenu from "../NavMenu"

type Props = {
  title: string
}

const AppHeader = ({ title }: Props) => {
  return (
    <Stack direction="row">
      <NavMenu />
      <Typography level="body3" sx={{ px: 2, py: 1 }}>{title}</Typography>
    </Stack>
  )
}

export default AppHeader
