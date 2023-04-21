import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { registration, LogIn, LogOut, refreshUser } from './operations';
import { initialState } from './initialState';
import {
  handleFulfilledRegistration,
  handleRejectedRegistration,
  handleLogOutUser,
  handlePendingRefreshUser,
  handleFulfilledRefreshUser,
  handleRejectedRefreshUser,
} from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, handleFulfilledRegistration)
      .addCase(registration.rejected, handleRejectedRegistration)
      .addCase(LogIn.fulfilled, handleFulfilledRegistration)
      .addCase(LogIn.rejected, handleRejectedRegistration)
      .addCase(LogOut.fulfilled, handleLogOutUser)
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedChangeReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export default authSlice.reducer;
