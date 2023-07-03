import { EventSchema } from 'entities/Event';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    event: EventSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
