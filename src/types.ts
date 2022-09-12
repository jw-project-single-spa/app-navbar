import { MouseEvent } from "react";
import { BehaviorSubject } from "rxjs";

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

  themeObservable: BehaviorSubject<string>;
  titleObservable: BehaviorSubject<string>;
};
