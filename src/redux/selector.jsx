import { createSelector } from '@reduxjs/toolkit';


export const selectEvents = state => state.events.items;
console.log(selectEvents);

export const selectIsLoading = state => state.events.isLoading;

export const selectError = state => state.events.error;

export const selectFilter = state => state.events.filter;

console.log(selectFilter);

export const selectFilteredEvents = createSelector([selectEvents, selectFilter], (events, filter) => {
    
    return events.filter(event => event.category.includes(filter));
});
console.log(selectFilteredEvents);