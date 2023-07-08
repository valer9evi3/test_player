import { EventSchema } from '../types/eventSchema';
import { eventReducer, eventActions } from './eventSlice';

describe('videoSlice.test', () => {
    const state: EventSchema = {
        eventList: [],
        error: 'error',
        isLoading: false,
    };
    test('setCurrentTime', () => {
        expect(eventReducer(state, eventActions.setEventList([{
            id: 1,
            duration: 1000,
            zone: {
                height: 150, width: 200, top: 100, left: 200,
            },
            timestamp: 1000,
        }]))).toEqual({
            ...state,
            eventList: [{
                id: 1,
                duration: 1000,
                zone: {
                    height: 150, width: 200, top: 100, left: 200,
                },
                timestamp: 1000,
            }],
        });
    });
});
