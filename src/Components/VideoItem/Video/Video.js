import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import style from './Video.module.scss';
import { SpeakerIcon, ThreeDotsIcon } from '~/Components/Icons';

const cx = classNames.bind(style);

const Video = forwardRef(({ src, poster, className, ...props }, ref) => {
    const [speakerValue, setSpeakerValue] = useState(50);
    const [showIcon, setShowIcon] = useState(null);
    const [progress, setProgress] = useState(0);

    const videoRef = useRef();
    const playRef = useRef();
    const pauseRef = useRef();

    useImperativeHandle(ref, () => videoRef.current);

    useEffect(() => {
        videoRef.current.volume = speakerValue / 100;
    }, [speakerValue]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowIcon(null);
        }, 300);

        return () => clearTimeout(timerId);
    }, [showIcon]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            const percentage = (video.currentTime / video.duration) * 100;
            setProgress(percentage);
        };

        video.addEventListener('timeupdate', updateProgress);
        return () => video.removeEventListener('timeupdate', updateProgress);
    }, []);

    const handlePlayVideo = () => {
        if (videoRef.current.paused) {
            setShowIcon('play');
            videoRef.current.play();
        } else {
            setShowIcon('pause');
            videoRef.current.pause();
        }
    };

    const handleNavigate = () => {};

    const handleSeek = e => {
        const video = videoRef.current;
        const newTime = (e.target.value / 100) * video.duration;
        video.currentTime = newTime;
        setProgress(e.target.value);
    };

    return (
        <>
            <video
                ref={videoRef}
                poster={poster}
                className={cx('video', { [className]: className })}
                loop
                onClick={handlePlayVideo}
                onDoubleClick={handleNavigate}
                {...props}
            >
                <source src={src} type='video/mp4' />
            </video>
            <div className={cx('controls')}>
                <div className={cx('speaker')}>
                    <SpeakerIcon className={cx('speaker-icon')} />
                    <div className={cx('range')}>
                        <input
                            className={cx('speaker-range')}
                            type='range'
                            min={0}
                            max={100}
                            step={1}
                            value={speakerValue}
                            onChange={e => setSpeakerValue(e.target.value)}
                            style={{
                                background: `linear-gradient(to right, #fff ${speakerValue}%, #ccc ${speakerValue}%)`,
                            }}
                        />
                    </div>
                </div>
                <div className={cx('more')}>
                    <ThreeDotsIcon width='24' height='24' />
                </div>
            </div>
            {showIcon === 'play' && (
                <div ref={playRef} className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            )}
            {showIcon === 'pause' && (
                <div ref={pauseRef} className={cx('pause')}>
                    <FontAwesomeIcon icon={faPause} />
                </div>
            )}
            <input
                className={cx('progress')}
                type='range'
                min='0'
                max='100'
                value={progress}
                onChange={handleSeek}
                style={{
                    background: `linear-gradient(to right, #ff3b5c ${progress}%, #ccc ${progress}%)`,
                }}
            />
        </>
    );
});

Video.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
};

export default Video;
