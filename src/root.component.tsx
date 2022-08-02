import React, { MouseEvent, useMemo, useState } from "react";
import { ControlContext } from "./control-context";
import { Navbar } from "./navbar";

export default function Root() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const contextValue = useMemo(
    () => ({
      anchorEl,
      mobileMoreAnchorEl,
      isMenuOpen,
      isMobileMenuOpen,
      menuId,
      mobileMenuId,

      setAnchorEl,
      setMobileMoreAnchorEl,
      handleProfileMenuOpen,
      handleMobileMenuClose,
      handleMenuClose,
      handleMobileMenuOpen,
    }),
    [
      anchorEl,
      mobileMoreAnchorEl,
      isMenuOpen,
      isMobileMenuOpen,

      setAnchorEl,
      setMobileMoreAnchorEl,
      handleProfileMenuOpen,
      handleMobileMenuClose,
      handleMenuClose,
      handleMobileMenuOpen,
    ]
  );

  return (
    <ControlContext.Provider value={contextValue}>
      <Navbar />
    </ControlContext.Provider>
  );
}
