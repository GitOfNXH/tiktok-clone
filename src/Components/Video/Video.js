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
import { SpeakerIcon, ThreeDotsIcon } from '../Icons/Icons';

const cx = classNames.bind(style);

const Video = forwardRef(({ src, poster, className, ...props }, ref) => {
    const [speakerValue, setSpeakerValue] = useState(50);
    const [play, setPlay] = useState(false);

    const videoRef = useRef();
    const playRef = useRef();
    const pauseRef = useRef();

    useImperativeHandle(ref, () => videoRef.current);

    useEffect(() => {
        videoRef.current.volume = speakerValue / 100;
    }, [speakerValue]);

    const handlePlayVideo = () => {
        setPlay(prev => !prev);

        if (play) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    };

    return (
        <>
            <video
                ref={videoRef}
                poster={poster}
                className={cx('video', { [className]: className })}
                loop
                onClick={handlePlayVideo}
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
            <div ref={playRef} className={cx('play')}>
                <FontAwesomeIcon icon={faPlay} />
            </div>
            <div ref={pauseRef} className={cx('pause')}>
                <FontAwesomeIcon icon={faPause} />
            </div>
        </>
    );
});

Video.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
};

export default Video;
