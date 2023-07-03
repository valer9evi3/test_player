import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getEventSelectedId = (state: StateSchema) => state.event.selectedEventId;
export const getEventList = (state: StateSchema) => state.event.eventList;
export const getEventById = createSelector(getEventSelectedId, getEventList, (selectedId, eventList) => {
    if (selectedId && eventList.length) {
        return eventList.find((e) => e.id === selectedId);
    }
    return null;
});
export const getEventIsLoading = (state: StateSchema) => state.event.isLoading;
export const getEventError = (state: StateSchema) => state.event.error;
