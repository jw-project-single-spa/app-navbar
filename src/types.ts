import { MouseEvent } from "react";

export type ControlContextType = {
  anchorEl: HTMLElement;
  mobileMoreAnchorEl: HTMLElement;
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  menuId: string;
  mobileMenuId: string;

  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>;
  setMobileMoreAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>;
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMobileMenuClose: () => void;
  handleMenuClose: () => void;
  handleMobileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
};
