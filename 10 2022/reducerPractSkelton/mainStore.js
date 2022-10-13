import { configureStore } from "@reduxjs/toolkit";
import { firstReducer } from './Slice'
import React from 'react'

export const mainStore = configureStore({
    reducer: {
        firstReducer: firstReducer,
        secondReducer: singleCart
    }
})
export default mainStore

