import { createSlice } from '@reduxjs/toolkit';

const langSlice = createSlice({
  name: 'lang',
  initialState: {
    value: '',
  },
  reducers: {
    changeLang: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;