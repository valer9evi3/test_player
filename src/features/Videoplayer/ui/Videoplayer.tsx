import {
    memo, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { getEventById, getEventList } from 'entities/Event/models/selectors/event';
import cls from './Videoplayer.module.scss';

interface VideoplayerProps {
    source?: string;
}
export const Videoplayer = memo((props: VideoplayerProps) => {
    const {
        source,
    } = props;
    const event = useSelector(getEventById);
    const eventList = useSelector(getEventList);
    const [size, setSize] = useState({ width: 0, height: 0 });

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    function timeUpdateHandler() {
        const target = videoRef.current;
        const canvas = canvasRef.current;
        if (!target || !canvas || !eventList.length) return;
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'rgb(65,255,0)';
        const currentTime = Math.floor(target.currentTime * 1000);
        ctx.clearRect(0, 0, size.width, size.height);
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
    }

    useEffect(() => {
        if (event && videoRef.current) {
            const nextCurrentTime = event.timestamp / 1000;
            videoRef.current.currentTime = nextCurrentTime;
        }
    }, [event, videoRef]);

    useEffect(() => {
        const target = videoRef.current;
        if (!target) return;
        target.onloadedmetadata = () => {
            const width = target.videoWidth;
            const height = target.videoHeight;
            setSize({ width, height });
        };
    }, [eventList]);

    return (
        <div className={cls.Videoplayer}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
                ref={videoRef}
                onTimeUpdate={timeUpdateHandler}
                src={source ?? ''}
                style={{
                    ...size,
                }}
            />
            <div>
                <canvas
                    onClick={() => (videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause())}
                    ref={canvasRef}
                    {...size}
                    style={{
                        position: 'absolute', zIndex: 10, top: 0,
                    }}
                />
            </div>
            <div className={cls.progressBar}>
                <div className={cls.progressIcon} />
            </div>
        </div>

    );
});
