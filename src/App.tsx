import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailsPage from "./pages/Details/DetailsPage";
import Wishlist from "./pages/Wishlist/Wishlist";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";

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
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:country" element={<DetailsPage />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
