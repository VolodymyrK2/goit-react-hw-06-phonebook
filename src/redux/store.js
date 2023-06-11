import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {filterReducer } from "./filterSlice";
import { contactReducer } from "./contactsSlice"

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, contactReducer)
export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer
    }
});
export const persistor = persistStore(store);