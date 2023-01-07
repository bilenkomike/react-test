import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LinkProps } from "@mui/material/Link";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#eee",
    },
    secondary: {
      main: "#202020",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ThemeProvider theme={theme}>
          <Button href="/">Countries</Button>
          <Button href="/wishlist" style={{ marginLeft: 30 }}>
            Wishlist
          </Button>
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
