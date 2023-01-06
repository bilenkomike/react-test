// import React from "react";

// function App() {
//   return <div className="App"></div>;
// }

// export default App;

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import Item from "../../components/Item/Item";

const HomePage: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        alert("Something Wrong");
        alert(e);
      });
  }, []);
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
        {/* End hero unit */}

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
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
  );
};

export default HomePage;

// function Router(props: { children?: React.ReactNode }) {
//   const { children } = props;
//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/">{children}</StaticRouter>;
//   }

//   return <MemoryRouter>{children}</MemoryRouter>;
// }

// const theme = createTheme({
//   components: {
//     MuiLink: {
//       defaultProps: {
//         component: LinkBehavior,
//       } as LinkProps,
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         LinkComponent: LinkBehavior,
//       },
//     },
//   },
// });
