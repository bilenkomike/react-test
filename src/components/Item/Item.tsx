import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ItemInterface } from "../../types/Item.types";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LinkProps } from "@mui/material/Link";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#eee",
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

const Item = (props: ItemInterface) => {
  const { name, capital, subregion, population, area, nativeName, flag } =
    props;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" image={flag} alt="random" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {name} <span style={{ opacity: 0.7 }}>({nativeName})</span>
        </Typography>

        <ul>
          <li>
            Capital: <strong>{capital}</strong>
          </li>
          <li>
            Subregion: <strong>{subregion}</strong>
          </li>
          <li>
            Population: <strong>{population}</strong>
          </li>
          <li>
            Area:{" "}
            <strong>
              {area} km<sup>2</sup>
            </strong>
          </li>
        </ul>
      </CardContent>
      <CardActions>
        <ThemeProvider theme={theme}>
          <Button href={name} variant="contained">
            View
          </Button>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
};

export default Item;
