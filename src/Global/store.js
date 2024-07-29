import { configureStore } from "@reduxjs/toolkit";
import  bankApp  from "./features";

export const store = configureStore({
    reducer:{
        bankAppStore :bankApp
    }
})

