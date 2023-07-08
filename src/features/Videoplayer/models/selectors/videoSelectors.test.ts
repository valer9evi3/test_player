import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import {
    getCurrentTime,
    getProgressValue,
    getVideoHeight,
    getVideoWidth,
} from 'features/Videoplayer/models/selectors/videoSelectors';

describe('events selectors', () => {
    // eslint-disable-next-line no-undef
    const state: DeepPartial<StateSchema> = {
        video: {
            height: 720,
            width: 1280,
            currentTime: 1000,
            progressValue: 100,
        },
    };
    test('getVideoWidth', () => {
        expect(getVideoWidth(state as StateSchema)).toEqual(1280);
    });
    test('getVideoHeight', () => {
        expect(getVideoHeight(state as StateSchema)).toEqual(720);
    });
    test('getCurrentTime', () => {
        expect(getCurrentTime(state as StateSchema)).toEqual(1000);
    });
    test('getProgressValue', () => {
        expect(getProgressValue(state as StateSchema)).toEqual(100);
    });
});
