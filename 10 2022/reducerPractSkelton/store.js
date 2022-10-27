import { configureStore } from "@reduxjs/toolkit";
import Changer from "./Changer";
export const store = configureStore({
  reducer: {
    changing: Changer
  }
});
