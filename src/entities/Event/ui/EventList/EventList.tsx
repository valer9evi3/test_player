import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchEventList } from 'entities/Event/models/services/fetchEventList';
import {
    getEventIsLoading,
    getEventList,
} from 'entities/Event/models/selectors/eventSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import format from 'date-fns/format';
import cls from './EventList.module.scss';

interface EventListProps {
    handleClick: (currentTime: number) => void
}

export const EventList = memo((props: EventListProps) => {
    const { handleClick } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEventIsLoading);
    const eventList = useSelector(getEventList);

    useEffect(() => {
        dispatch(fetchEventList());
    }, [dispatch]);

    const displayValue = (timeStamp: number) => {
        const ms = 1609459200000 + timeStamp;
        const date = new Date(ms);
        return format(date, 'mm:ss:SSS');
    };

    return (
        <div className={cls.EventList}>
            {isLoading
                ? null
                : eventList.map((e) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <div key={e.id} onClick={() => handleClick(e.timestamp / 1000)} className={cls.eventItem}>
                        {displayValue(e.timestamp)}
                    </div>
                ))}
        </div>
    );
});
