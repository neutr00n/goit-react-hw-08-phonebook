import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { registration, LogIn, LogOut, refreshUser } from './operations';
import { initialState } from './initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedin = true;
        state.error = null;
      })
      .addCase(registration.rejected, ({ error }, { payload }) => {
        error = payload;
      })
      .addCase(LogIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedin = true;
        state.error = null;
      })
      .addCase(LogIn.rejected, ({ error }, { payload }) => {
        error = payload;
      })
      .addCase(LogOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedin = false;
      })

      .addCase(refreshUser.pending, ({ isRefreshing }) => {
        isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedin = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      });
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
