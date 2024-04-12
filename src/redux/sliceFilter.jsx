import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setCategoryFilter(state, action) {
        state.categoryName = action.payload;
      },
    },
  });
  
  export const { setCategoryFilter } = filtersSlice.actions;
  


  export const filterReducer = filtersSlice.reducer;