import React from 'react';
import { Videoplayer } from 'shared/ui/Videoplayer';
import { MainPageLayout } from 'shared/layout/MainPageLayout';
import { EventList } from 'entities/Event/ui/EventList/EventList';

const URL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const MainPage = () => (
    <MainPageLayout
        playerComponent={(
            <Videoplayer
                source={URL}
            />
        )}
        eventListComponent={<EventList />}
    />
);

export default MainPage;
