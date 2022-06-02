import { configureStore } from "@reduxjs/toolkit"
import roastedСoffee from './cards/roastedСoffee'
import sortRoastedСoffee from './sort/sortRoastedСoffee'



export const store = configureStore({
    reducer: {
        roastedСoffee,
        sortRoastedСoffee
    }
})