import { configureStore } from '@reduxjs/toolkit';
import { eventReducer } from 'entities/Event';
import { videoReducer } from 'features/Videoplayer';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            event: eventReducer,
            video: videoReducer,
        },
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
