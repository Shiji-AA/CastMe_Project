import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import {persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";//localStorage


const persistConfig = {
    storage, //localStorage
    key:"auth"
}
const persistedAuthreducer = persistReducer(persistConfig,authReducer)//persisted version is storing
export const store= configureStore({
    reducer:{
    auth :persistedAuthreducer,
    }
})
export const persistor=persistStore(store) //for persisting store
