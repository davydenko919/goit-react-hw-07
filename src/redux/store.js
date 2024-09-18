import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import contactsReducer from './contactsSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
    key: "contacsList",
    storage, 
    // whitelist: ["items"],
  };
const pContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)
const filtersPersistConfig = {
    key: "filterValue",
    storage,
    // whitelist: ["name"],
  };
const pFiltersReducer = persistReducer(filtersPersistConfig, filtersReducer)

export const store = configureStore({
  reducer: {
    tasks: pContactsReducer,
    filters: pFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

export const persistor = persistStore(store);
