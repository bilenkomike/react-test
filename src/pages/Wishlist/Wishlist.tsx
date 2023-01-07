import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Item from "../../components/Item/Item";

import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../store/store";
import { removeWish } from "../../store/wishlist/wishlistSlice";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const countries = useSelector((state: RootState) => state.wishlist.countries);

  const handleClick = (name: string) => {
    dispatch(removeWish(name));
  };

  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Wishlist
          </Typography>
          {countries.length < 1 && (
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Empty Wishlist
            </Typography>
          )}
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {countries !== null &&
            countries.map((country: any) => (
              <Grid item key={country.name} xs={12} sm={6} md={4}>
                <Item
                  name={country.name}
                  capital={country.capital}
                  subregion={country.subregion}
                  population={country.population}
                  area={country.area}
                  nativeName={country.nativeName}
                  flag={country.flag}
                  wishlist={true}
                  action={handleClick}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Wishlist;
