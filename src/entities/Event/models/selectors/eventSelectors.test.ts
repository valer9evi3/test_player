import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getEventError, getEventIsLoading, getEventList } from '../selectors/eventSelectors';
import { initTestState } from '../consts/eventsConst';

describe('video selectors', () => {
    // eslint-disable-next-line no-undef
    const state: DeepPartial<StateSchema> = initTestState;
    test('getEventList', () => {
        expect(getEventList(state as StateSchema)).toEqual([{
            id: 1,
            duration: 1000,
            timestamp: 1000,
            zone: {
                height: 0, top: 0, width: 100, left: 100,
            },
        }]);
    });
    test('getEventError', () => {
        expect(getEventError(state as StateSchema)).toBe('error');
    });
    test('getEventIsLoading', () => {
        expect(getEventIsLoading(state as StateSchema)).toBe(false);
    });
});
