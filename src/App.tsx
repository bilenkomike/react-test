// import React from "react";

// function App() {
//   return <div className="App"></div>;
// }

// export default App;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailsPage from "./pages/Details/DetailsPage";
import Wishlist from "./pages/Wishlist/Wishlist";

// const theme = createTheme();
let theme = createTheme({
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#eee",
    },
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Countries
            </Typography>
            <Typography variant="h6" style={{ marginLeft: 30 }} color="inherit">
              <Link>WishList</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:country" element={<DetailsPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}
