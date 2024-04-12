import { configureStore } from '@reduxjs/toolkit';
import { EventsReducer } from './slice';
import {searchReducer} from './sliceSearch';
import { filterReducer } from './sliceFilter';

export const store = configureStore({
  reducer: {
    events: EventsReducer,
    search: searchReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

