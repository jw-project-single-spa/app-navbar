import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import { MobileMenuOptions } from "./mobile-menu-options";
import { MenuOptions } from "./menu-options";
import { useContext, useEffect, useState } from "react";
import { ControlContext } from "./control-context";

export function Navbar() {
  const [title, setTitle] = useState("");

  const {
    menuId,
    mobileMenuId,
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    titleObservable,
    themeObservable,
  } = useContext(ControlContext);

  const onClickEmail = () => {
    themeObservable.next("escuro");
  };

  useEffect(() => {
    titleObservable.subscribe((v) => {
      setTitle(v);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={onClickEmail}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenuOptions />
      <MenuOptions />
    </Box>
  );
}
