import { memo, ReactElement } from 'react';
import cls from './MainPageLayout.module.scss';

interface MainPageLayoutProps {
    playerComponent?: ReactElement;
    eventListComponent?: ReactElement;
}

export const MainPageLayout = memo((props: MainPageLayoutProps) => {
    const {
        playerComponent,
        eventListComponent,
    } = props;

    return (
        <div className={cls.MainPageLayout}>
            <div className={cls.playerWrapper}>
                {playerComponent ?? 'videoPlayer'}
            </div>
            <div className={cls.eventList}>
                {eventListComponent ?? 'eventList'}
            </div>
        </div>
    );
});
