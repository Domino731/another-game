import {configureStore} from '@reduxjs/toolkit'
import {characterReducer} from "../../characters/store/slice";

export const store = configureStore({
    reducer: {
        characterReducer: characterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch