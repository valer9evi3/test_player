import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunks';
import { eventActions } from '../slice/eventSlice';
import { EventList } from '../types/eventSchema';
import { fetchEventList } from '../services/fetchEventList';

describe('fetchEventList', () => {
    test('success fetch', async () => {
        const eventList: EventList[] = [{
            id: 1,
            zone: {
                left: 100,
                top: 100,
                width: 100,
                height: 100,
            },
            duration: 123,
            timestamp: 1231232,
        }];

        const thunk = new TestAsyncThunk(fetchEventList);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: eventList }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledWith(
            eventActions.setEventList(eventList),
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(eventList);
    });
});
