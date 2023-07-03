import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchEventList } from 'entities/Event/models/services/fetchEventList';
import {
    getEventError,
    getEventIsLoading,
    getEventList,
    getEventSelectedId,
} from 'entities/Event/models/selectors/event';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { eventActions } from 'entities/Event/models/slice/eventSlice';
import cls from './EventList.module.scss';

interface EventListProps {

}

export const EventList = memo((props: EventListProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEventIsLoading);
    const error = useSelector(getEventError);
    const eventList = useSelector(getEventList);
    const selectedId = useSelector(getEventSelectedId);

    useEffect(() => {
        dispatch(fetchEventList());
    }, [dispatch]);

    const handleClick = useCallback((id: number) => {
        dispatch(eventActions.setSelectedEventId(id));
    }, [dispatch]);

    return (
        <div className={cls.EventList}>
            {isLoading
                ? null
                : eventList.map((e) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <div style={{ border: selectedId === e.id ? '1px solid red' : null }} key={e.id} onClick={() => handleClick(e.id)}>
                        {e.timestamp}
                    </div>
                ))}
        </div>
    );
});
