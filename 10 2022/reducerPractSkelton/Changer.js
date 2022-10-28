import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0
};
const Changer = createSlice({
  name: "changer",
  initialState,
  reducers: {
    addNum: (state) => {
      return state.value + 1;
    }
  }
});
export const { addNum } = Changer.actions;
export default Changer.reducer;
