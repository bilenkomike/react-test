import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import Item from "../../components/Item/Item";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const HomePage: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        let begin = (page - 1) * 15;
        let countriess = response.data.slice(begin, begin + 15);
        setCountries(countriess);
        setLoading(false);
      })
      .catch((e) => {
        alert("Something Wrong");
        alert(e);
      });
  }, [page]);

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
            Countries
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {loading && <CircularProgress style={{ margin: "auto" }} />}
          {!loading &&
            countries !== null &&
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
                />
              </Grid>
            ))}
        </Grid>
        {!loading && (
          <Pagination
            count={17}
            page={page}
            onChange={(event: React.ChangeEvent<unknown>, value: number) =>
              setPage(value)
            }
            color="primary"
            style={{ margin: "auto" }}
          />
        )}
      </Container>
    </main>
  );
};

export default HomePage;
