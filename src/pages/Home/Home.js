import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import style from './Home.module.scss';
import { getVideoList } from '~/services/videoService';
import VideoItem from '~/Components/VideoItem';
import { ChevronDownIcon, ChevronUpIcon } from '~/Components/Icons/Icons';
import Button from '~/Components/Button';

const cx = classNames.bind(style);

function Home() {
    const [videosList, setVideosList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const videoRefs = useRef([]);
    const videosListRef = useRef();
    const lastScrollTime = useRef(0);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getVideoList('for-you', 1);
            setVideosList(response);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        videoRefs.current[currentIndex] &&
            videoRefs.current[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
    }, [currentIndex]);

    const handlePrevVideo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            videoRefs.current[currentIndex].pause();
            videoRefs.current[currentIndex - 1].play();
        }
    };

    const handleNextVideo = () => {
        if (currentIndex < videosList.length - 1) {
            setCurrentIndex(prev => prev + 1);
            videoRefs.current[currentIndex].pause();
            videoRefs.current[currentIndex + 1].play();
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

    return (
        <main className={cx('wrapper')}>
            <div className={cx('videos-block')}>
                <div
                    className={cx('videos-list')}
                    ref={videosListRef}
                    onWheel={handleScroll}
                >
                    {videosList.map((video, index) => (
                        <VideoItem
                            ref={element =>
                                (videoRefs.current[index] = element)
                            }
                            key={index}
                            data={video}
                        />
                    ))}
                </div>
            </div>

            <div className={cx('controls')}>
                <Button className={cx('control')} onClick={handlePrevVideo}>
                    <ChevronUpIcon />
                </Button>
                <Button className={cx('control')} onClick={handleNextVideo}>
                    <ChevronDownIcon />
                </Button>
            </div>
        </main>
    );
}

export default Home;
