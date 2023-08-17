import { createSlice } from '@reduxjs/toolkit';


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: '',
    },
    reducers: {
        setSearch(state, action) {
            console.log(action)
            state.search = action.payload;
        }
    }
})

export const { setSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;