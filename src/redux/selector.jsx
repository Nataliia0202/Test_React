
export const selectEvents = state => state.events.items;
console.log(selectEvents)

export const selectIsLoading = state => state.events.isLoading;

export const selectError = state => state.events.error;