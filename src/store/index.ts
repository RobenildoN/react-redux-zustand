import { configureStore } from "@reduxjs/toolkit";
import { type TypedUseSelectorHook, useSelector } from "react-redux";



export const store = configureStore({
    reducer:{

    }
})



export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;