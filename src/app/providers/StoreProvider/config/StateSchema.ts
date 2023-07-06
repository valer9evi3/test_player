import { EventSchema } from 'entities/Event';
import { AxiosInstance } from 'axios';
import { VideoSchema } from 'features/Videoplayer';

export interface StateSchema {
    event: EventSchema
    video: VideoSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
