import { configureStore } from '@reduxjs/toolkit';
import { phoneBookApi } from './phoneBook/phoneBookApi';
import phoneBookReducer from './phoneBook/phoneBookSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedChangeReducer } from './authorization/authorizationSlice';

export const store = configureStore({
  reducer: {
    authorization: persistedChangeReducer,
    phoneBook: phoneBookReducer,
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(phoneBookApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
