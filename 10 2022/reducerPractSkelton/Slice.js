import { createSlice } from "@reduxjs/toolkit";

const firstReducer = createSlice({
    name: "hey",
    reducers: {
        someFunction: (inputParams) => {
            console.log("we used this reducer somewhere")
        },
        anotherFunction: (inputParams) => {
            a = inputParams + 2;
            return a
        }
    }
})
// bounding the actions to the specified reducers
export const { someFunction, anotherFunction } = firstReducer.actions
export default firstReducer.reducer