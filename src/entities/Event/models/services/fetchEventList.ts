import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { eventActions } from '../slice/eventSlice';
import { EventList } from '../types/eventSchema';
import { eventsURL } from '../consts/eventsConst';

export const fetchEventList = createAsyncThunk<
    EventList[],
    void,
    {rejectValue: string}
>('event/fetchEventList', async (_: void, thunkApi) => {
    try {
        const response = await axios.get<EventList[]>(
            eventsURL,
        );
        if (!response?.data) {
            throw new Error();
        }
        thunkApi.dispatch(eventActions.setEventList(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue('error');
    }
});
