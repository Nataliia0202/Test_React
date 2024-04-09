import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents, addNewEvents, fetchEventDel} from './operations';

const handleRequest = state => {
  state.isLoading = true;
};

const handleSuccess = state => {
  state.isLoading = false;
  state.error = null;
};


const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const EventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  

  extraReducers: {
    [fetchEvents.pending](state) {
      handleRequest(state);
    },
    [fetchEvents.fulfilled](state, action) {
      state.items = action.payload;
      handleSuccess(state, action);
    },
    [fetchEvents.rejected](state, action) {
      handleError(state, action);
    },
    [addNewEvents.pending](state) {
      handleRequest(state);
    },
    [addNewEvents.fulfilled](state, action) {
      state.items = [action.payload, ...state.items];
      handleSuccess(state, action);
    },
    [addNewEvents.rejected](state, action) {
      handleError(state, action);
    },
    [fetchEventDel.pending](state) {
      handleRequest(state);
    },
    [fetchEventDel.fulfilled](state, action) {
      const idx = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(idx, 1);
      handleSuccess(state, action);
    },
    [fetchEventDel.rejected](state, action) {
      handleError(state, action);
    },
  },
});

export const EventsReducer = EventsSlice.reducer;