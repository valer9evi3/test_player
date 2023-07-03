import { configureStore } from '@reduxjs/toolkit';
import { eventReducer } from 'entities/Event';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            event: eventReducer,
        },
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
