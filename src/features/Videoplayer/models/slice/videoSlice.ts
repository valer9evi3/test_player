import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { VideoSchema } from 'features/Videoplayer';

const initialState: VideoSchema = {
    currentTime: 0,
    height: 0,
    width: 0,
    progressValue: 0,
};
export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setCurrentTime: (state, { payload }: PayloadAction<number>) => {
            state.currentTime = payload;
        },
        setProgressValue: (state, { payload }: PayloadAction<number>) => {
            state.progressValue = payload;
        },
        setVideoWidth: (state, { payload }: PayloadAction<number>) => {
            state.width = payload;
        },
        setVideoHeight: (state, { payload }: PayloadAction<number>) => {
            state.height = payload;
        },
    },
});

export const { actions: videoActions, reducer: videoReducer } = videoSlice;
