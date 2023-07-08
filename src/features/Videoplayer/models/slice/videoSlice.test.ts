import { videoActions, videoReducer } from './videoSlice';
import { VideoSchema } from '../types/videoSchema';

describe('videoSlice.test', () => {
    const state: VideoSchema = {
        currentTime: 100,
        width: 1280,
        height: 720,
        progressValue: 100,
    };
    test('setCurrentTime', () => {
        expect(videoReducer(state, videoActions.setCurrentTime(1000))).toEqual({
            ...state,
            currentTime: 1000,
        });
    });
    test('setVideoWidth', () => {
        expect(videoReducer(state, videoActions.setVideoWidth(7260))).toEqual({
            ...state,
            width: 7260,
        });
    });
    test('setVideoHeight', () => {
        expect(videoReducer(state, videoActions.setVideoHeight(4300))).toEqual({
            ...state,
            height: 4300,
        });
    });
    test('setVideoHeight', () => {
        expect(videoReducer(state, videoActions.setProgressValue(267.376))).toEqual({
            ...state,
            progressValue: 267.376,
        });
    });
});
