import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getCurrentTime = (state: StateSchema) => state.video.currentTime;
export const getProgressValue = (state: StateSchema) => state.video.progressValue;
export const getVideoHeight = (state: StateSchema) => state.video.height;
export const getVideoWidth = (state: StateSchema) => state.video.width;
