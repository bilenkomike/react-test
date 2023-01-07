import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemInterface } from "../../types/Item.types";

type SliceState = { countries: ItemInterface[] };

const initialState: SliceState = { countries: [] };

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addWish: (state, action: PayloadAction<ItemInterface>) => {
      const country = action.payload;
      state.countries.push({
        name: country.name,
        capital: country.capital,
        subregion: country.subregion,
        population: country.population,
        area: country.area,
        nativeName: country.nativeName,
        flag: country.flag,
      });
    },
    removeWish: (state, action: PayloadAction<string>) => {
      state.countries = state.countries.filter(
        (country) => country.name !== action.payload
      );
    },
  },
});

export default WishlistSlice;
export const { addWish, removeWish } = WishlistSlice.actions;
