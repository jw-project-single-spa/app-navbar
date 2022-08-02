import { Menu, MenuItem } from "@mui/material";
import { useContext } from "react";
import { ControlContext } from "./control-context";

export function MenuOptions() {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose } =
    useContext(ControlContext);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}
