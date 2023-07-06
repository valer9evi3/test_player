import React, { useCallback } from 'react';
import { videoActions, Videoplayer } from 'features/Videoplayer';
import { EventList } from 'entities/Event';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const URL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const MainPage = () => {
    const dispatch = useAppDispatch();

    const handleClick = useCallback((currentTime: number) => {
        dispatch(videoActions.setCurrentTime(currentTime));
    }, [dispatch]);

    return (
        <>
            <Videoplayer
                source={URL}
            />
            <EventList handleClick={handleClick} />
        </>
    );
};

export default MainPage;
