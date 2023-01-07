import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import WishlistSlice from "./wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: WishlistSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
