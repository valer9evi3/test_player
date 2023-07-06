import React, {
    memo, useCallback, useEffect, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { getEventList } from 'entities/Event/models/selectors/event';
import {
    getCurrentTime,
    getProgressValue,
    getVideoHeight,
    getVideoWidth,
} from 'features/Videoplayer/models/selectors/videoSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { videoActions } from 'features/Videoplayer';
import cls from './Videoplayer.module.scss';

interface VideoplayerProps {
    source?: string;
}
export const Videoplayer = memo((props: VideoplayerProps) => {
    const {
        source,
    } = props;

    const dispatch = useAppDispatch();

    const eventList = useSelector(getEventList);
    const currentTime = useSelector(getCurrentTime);
    const height = useSelector(getVideoHeight);
    const width = useSelector(getVideoWidth);
    const progressValue = useSelector(getProgressValue);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = currentTime;
        }
    }, [currentTime]);

    const progressBarHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const currentPercent = +event.target.value;
        const newCurrentTime = (videoRef.current.duration / 100) * currentPercent;
        dispatch(videoActions.setCurrentTime(newCurrentTime));
    }, [dispatch]);

    function timeUpdateHandler() {
        const target = videoRef.current;
        const canvas = canvasRef.current;
        if (!target || !canvas || !eventList.length) return;
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'rgb(65,255,0)';
        const currentTime = Math.floor(target.currentTime * 1000);
        ctx.clearRect(0, 0, width, height);
        const currentEvent = eventList.filter((e) => (currentTime >= e.timestamp && currentTime <= (e.timestamp + e.duration))
        || (currentTime < e.timestamp && currentTime >= (e.timestamp + e.duration)));

        if (currentEvent.length > 0) {
            currentEvent.forEach((c) => {
                const {
                    height, width, top, left,
                } = c.zone;
                ctx.strokeRect(left, top, width, height);
            });
        }
        const { duration, currentTime: currentTimeInSeconds } = target;
        const newProgressValue = (currentTimeInSeconds / duration) * 100;
        dispatch(videoActions.setProgressValue(newProgressValue));
    }

    useEffect(() => {
        const target = videoRef.current;
        if (!target) return;
        target.onloadedmetadata = () => {
            const width = target.videoWidth;
            const height = target.videoHeight;
            dispatch(videoActions.setVideoHeight(height));
            dispatch(videoActions.setVideoWidth(width));
        };
    }, [eventList]);

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
                ref={videoRef}
                onTimeUpdate={timeUpdateHandler}
                src={source ?? ''}
                style={{
                    height,
                    width,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div>
                <canvas
                    onClick={() => (videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause())}
                    ref={canvasRef}
                    height={height}
                    width={width}
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </div>
            <input
                type="range"
                value={progressValue}
                min={0}
                max={100}
                step={0.5}
                className={cls.progressBar}
                onChange={progressBarHandler}
            />
        </>
    );
});
