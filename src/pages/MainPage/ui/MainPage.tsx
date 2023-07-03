import React from 'react';
import { Videoplayer } from 'features/Videoplayer';
import { EventList } from 'entities/Event/ui/EventList/EventList';

const URL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const MainPage = () => (
    <>
        <Videoplayer
            source={URL}
        />
        <EventList />
    </>
);

export default MainPage;
