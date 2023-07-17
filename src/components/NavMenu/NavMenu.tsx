import { Button, ButtonGroup, IconButton, Modal, ModalDialog, Sheet, Typography } from "@mui/joy"
import { useNavigate } from "react-router-dom"
import { FactCheck, Inventory, Menu as MenuIcon } from '@mui/icons-material'
import { useRef, useState } from "react";

const NavMenu = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setOpen(false)
  }

  const handleOpenMenu = () => {
    setOpen(true)
  }

  const navigateTo = (to: string) => () => {
    navigate(to)
  }

  return (
    <>
      <IconButton ref={buttonRef} onClick={handleOpenMenu} size="sm" variant="plain" color="neutral">
        <MenuIcon />
      </IconButton>
      <Modal open={open} onClose={handleCloseMenu} sx={{ p: 4 }}>
        <ModalDialog>
          <ButtonGroup orientation="vertical" sx={{ textAlign: "left" }}>
            <Button startDecorator={<FactCheck />} onClick={navigateTo("/")} sx={{ justifyContent: "flex-start" }}>
              Suivi
            </Button>
            <Button startDecorator={<Inventory />} onClick={navigateTo("/inventory")} sx={{ justifyContent: "flex-start" }}>
              Inventaire
            </Button>
          </ButtonGroup>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default NavMenu
