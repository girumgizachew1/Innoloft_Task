import { createSlice } from '@reduxjs/toolkit';

export const configSlice = createSlice({
  name: 'config',
  initialState: {},
  reducers: {
    setConfig: (state, action) => {
      return action.payload;
    },
  },
})
export const { setConfig } = configSlice.actions
