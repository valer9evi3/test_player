import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const eventsURL = 'http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd';

export const initTestState: StateSchema = {
    event: {
        eventList: [{
            id: 1,
            duration: 1000,
            timestamp: 1000,
            zone: {
                height: 0, top: 0, width: 100, left: 100,
            },
        }],
        error: 'error',
        isLoading: false,
    },
    video: {
        height: 1000,
        width: 1000,
        progressValue: 0,
        currentTime: 0,
    },

};
