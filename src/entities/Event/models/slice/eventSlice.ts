import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchEventList } from '../services/fetchEventList';
import { EventList, EventSchema } from '../types/eventSchema';

const initialState: EventSchema = {
    eventList: [],
    isLoading: false,
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEventList: (state, { payload }: PayloadAction<EventList[]>) => {
            state.eventList = payload.sort((a, b) => a.timestamp - b.timestamp);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEventList.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchEventList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: eventActions, reducer: eventReducer } = eventSlice;
