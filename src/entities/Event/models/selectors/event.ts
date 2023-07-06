import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getEventList = (state: StateSchema) => state.event.eventList;
export const getEventIsLoading = (state: StateSchema) => state.event.isLoading;
export const getEventError = (state: StateSchema) => state.event.error;
