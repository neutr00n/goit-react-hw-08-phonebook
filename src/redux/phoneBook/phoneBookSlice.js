import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilter } = phoneBookSlice.actions;
export default phoneBookSlice.reducer;
