import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

import TimeAgo from '~/constants/constants';
import * as httpRequest from '~/services/videoService';
import { likeVideo as requestLikeVideo } from '~/services/likeService';
import { Follow as requestFollow } from '~/services/followService';
import style from './DetailVideo.module.scss';
import Button from '~/Components/Button';
import { MusicIcon } from '~/Components/Icons';
import {
    ChevronDownIcon,
    ChevronUpIcon,
    CloseRegularIcon,
    EmbedIcon,
    FacebookIcon,
    HomeHeartIcon,
    HomeMessageIcon,
    HomeSaveIcon,
    HomeShareIcon,
    ReportIcon,
    SendIcon,
    SpeakerIcon,
    ThreeDotsIcon,
    WhatsAppIcon,
} from '~/Components/Icons/Icons';
import Image from '~/Components/Image';
import CommentsBlock from './CommentBlock';

const cx = classNames.bind(style);

function DetailVideo() {
    const [video, setVideo] = useState();
    const [copied, setCopied] = useState(false);
    const [likeVideo, setLikeVideo] = useState('unlike');
    const [progress, setProgress] = useState(0);
    const [speakerValue, setSpeakerValue] = useState(50);
    const [videosList, setVideosList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPauseIcon, setShowPauseIcon] = useState(false);

    const linkRef = useRef(null);
    const videoRef = useRef();
    const lastScrollTime = useRef(0);

    const navigate = useNavigate();

    const param = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            if (param) {
                const video = await httpRequest.getVideo(`videos/${param.id}`);
                setVideo(video);
                videoRef.current.load();
            }
        };

        fetchApi();
    }, [param]);

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

    useEffect(() => {
        videoRef.current.volume = speakerValue / 100;
    }, [speakerValue]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await httpRequest.getVideoList('for-you', 1);
            setVideosList(response);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        videosList.forEach((videoItem, index) => {
            if (video?.id === videoItem?.id) {
                setCurrentIndex(index);
            }
        });
    }, [video, videosList]);

    const handleCopy = () => {
        const linkText = linkRef.current.innerText;
        navigator.clipboard.writeText(linkText).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 5000);
        });
    };

    const handleLikeVideo = () => {
        setLikeVideo(likeVideo === 'like' ? 'unlike' : 'like');
        const fetchApi = async () => {
            const type = likeVideo === 'unlike' ? 'like' : 'unlike';
            const response = await requestLikeVideo(video.id, type);
            setVideo(response);
        };

        fetchApi();
    };

    const handleSeek = e => {
        const video = videoRef.current;
        const newTime = (e.target.value / 100) * video.duration;
        video.currentTime = newTime;
        setProgress(e.target.value);
    };

    const handlePlayVideo = () => {
        if (videoRef.current.paused) {
            setShowPauseIcon(false);
            videoRef.current.play();
        } else {
            setShowPauseIcon(true);
            videoRef.current.pause();
        }
    };

    const handleClose = () => {
        navigate('/');
    };

    const handlePrevVideo = () => {
        if (currentIndex > 0) {
            const nextVideoId = videosList[currentIndex - 1].id;
            navigate(`/videos/${nextVideoId}`);
        }
    };

    const handleNextVideo = () => {
        if (currentIndex < videosList.length - 1) {
            const nextVideoId = videosList[currentIndex + 1].id;
            navigate(`/videos/${nextVideoId}`);
        }
    };

    const handleScroll = e => {
        const now = Date.now();

        if (now - lastScrollTime.current < 500) return;

        if (e.deltaY > 0 && currentIndex < videosList.length - 1) {
            handleNextVideo();
        } else if (e.deltaY < 0 && currentIndex > 0) {
            handlePrevVideo();
        }

        lastScrollTime.current = now;
    };

    const handleFollow = async () => {
        const type = video.user.is_followed ? 'unfollow' : 'follow';
        await requestFollow(video.user.id, type);

        setVideo(prev => ({
            ...prev,
            user: { ...prev.user, is_followed: !prev.user.is_followed },
        }));
    };

    return (
        <main className={cx('wrapper')}>
            <div className={cx('video-block')}>
                <div className={cx('video-wrap')}>
                    <video
                        ref={videoRef}
                        poster={video?.thumb_url}
                        className={cx('video')}
                        loop
                        autoPlay
                        onClick={handlePlayVideo}
                        onWheel={handleScroll}
                    >
                        <source
                            src={video && video.file_url}
                            type='video/mp4'
                        />
                    </video>

                    <div className={cx('controls')}>
                        <div className={cx('close')} onClick={handleClose}>
                            <CloseRegularIcon width='24' height='24' />
                        </div>
                        <div className={cx('three-dots')}>
                            <ThreeDotsIcon width='26' height='26' />
                        </div>
                        <div className={cx('actions')}>
                            <div
                                className={cx('prev')}
                                onClick={handlePrevVideo}
                            >
                                <ChevronUpIcon />
                            </div>
                            <div
                                className={cx('next')}
                                onClick={handleNextVideo}
                            >
                                <ChevronDownIcon />
                            </div>
                        </div>
                        <div className={cx('speaker')}>
                            <SpeakerIcon />
                            <div className={cx('speaker-range-wrap')}>
                                <input
                                    className={cx('speaker-range')}
                                    type='range'
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={speakerValue}
                                    onChange={e =>
                                        setSpeakerValue(e.target.value)
                                    }
                                    style={{
                                        background: `linear-gradient(to right, #fff ${speakerValue}%, #ccc ${speakerValue}%)`,
                                    }}
                                />
                            </div>
                        </div>
                        <div className={cx('progress')}>
                            <input
                                className={cx('range')}
                                type='range'
                                min={0}
                                max={100}
                                step={1}
                                value={progress ? progress : 0}
                                onChange={handleSeek}
                                style={{
                                    background: `linear-gradient(to right, #fff ${progress}%, #ffffff57 ${progress}%)`,
                                }}
                            />
                            <span></span>
                        </div>
                    </div>
                    {showPauseIcon && (
                        <div className={cx('pause')} onClick={handlePlayVideo}>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    )}
                </div>
            </div>

            <div className={cx('info-wrapper')}>
                <article className={cx('video-info')}>
                    <header className={cx('header')}>
                        <div className={cx('user-info')}>
                            <Link
                                to={video && `/@${video.user.nickname}`}
                                className={cx('info')}
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    rounded
                                    src={video?.user.avatar}
                                    alt={video?.user.nickname}
                                />
                                <div>
                                    <div>
                                        <h4 className={cx('nickname')}>
                                            {video?.user.nickname}
                                        </h4>
                                        {video?.user.tick && (
                                            <FontAwesomeIcon
                                                className={cx('check')}
                                                icon={faCheckCircle}
                                            />
                                        )}
                                    </div>
                                    <div className={cx('name')}>
                                        {`${video?.user.first_name} ${video?.user.last_name}`}
                                        <span className={cx('dot')}>.</span>
                                        <span>
                                            {video &&
                                                TimeAgo(
                                                    video?.published_at.replace(
                                                        ' ',
                                                        'T'
                                                    )
                                                )}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Button onClick={handleFollow} primary>
                                {video?.user.is_followed
                                    ? 'Following'
                                    : 'Follow'}
                            </Button>
                        </div>
                        <p className={cx('description')}>
                            {video && video.description}
                        </p>
                        <Link to='!@'>
                            <MusicIcon />
                            <span className={cx('music-link')}>
                                Âm thanh trong video!
                            </span>
                        </Link>
                    </header>

                    <div className={cx('video-actions')}>
                        <div className={cx('action')}>
                            <div
                                onClick={handleLikeVideo}
                                className={cx('icon-wrap')}
                            >
                                <HomeHeartIcon
                                    className={cx('icon', 'heart', {
                                        active: video ? video.is_liked : false,
                                    })}
                                />
                            </div>
                            <p className={cx('statistic')}>
                                {video && video.likes_count}
                            </p>
                        </div>
                        <div className={cx('action')}>
                            <div className={cx('icon-wrap')}>
                                <HomeMessageIcon className={cx('icon')} />
                            </div>
                            <p className={cx('statistic')}>
                                {video && video.comments_count}
                            </p>
                        </div>
                        <div className={cx('action')}>
                            <div className={cx('icon-wrap')}>
                                <HomeSaveIcon className={cx('icon')} />
                            </div>
                            <p className={cx('statistic')}>0</p>
                        </div>
                        <div className={cx('share-block')}>
                            <div className={cx('share-method')}>
                                <ReportIcon />
                                <EmbedIcon />
                                <SendIcon />
                                <FacebookIcon />
                                <WhatsAppIcon />
                                <div className={cx('share')}>
                                    <HomeShareIcon
                                        className={cx('icon')}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('link-block')}>
                        <span ref={linkRef} className={cx('link-text')}>
                            {window.location.href}
                        </span>
                        <Button onClick={handleCopy} className={cx('link-btn')}>
                            {copied ? 'Copied!' : 'Copy link'}
                        </Button>
                    </div>
                </article>
                <CommentsBlock data={video} />
            </div>
        </main>
    );
}

export default DetailVideo;
