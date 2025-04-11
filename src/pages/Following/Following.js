import classNames from 'classnames/bind';
import { useEffect, useRef, useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Following.module.scss';
import { getVideoList } from '~/services/videoService';
import VideoItem from '~/Components/VideoItem';
import { ChevronDownIcon, ChevronUpIcon } from '~/Components/Icons/Icons';
import Button from '~/Components/Button';
import { getCurrentUser, ToastContext } from '~/constants';

const cx = classNames.bind(style);

function Following() {
    const [videosList, setVideosList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const videoRefs = useRef([]);
    const videosListRef = useRef();
    const lastScrollTime = useRef(0);

    const navigate = useNavigate();

    const showToastMessage = useContext(ToastContext);

    const currentUser = useMemo(() => getCurrentUser(), []);

    useEffect(() => {
        if (currentUser.id) {
            const fetchApi = async () => {
                const response = await getVideoList('following', 1);
                setVideosList(response);
            };
            fetchApi();
        } else {
            navigate('/login');
            showToastMessage('info', 'Vui lòng đăng nhập!');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    return currentUser.followings_count ? (
        <main className={cx('wrapper')}>
            <div className={cx('videos-block')}>
                <div
                    className={cx('videos-list')}
                    ref={videosListRef}
                    onWheel={handleScroll}
                >
                    {videosList?.map((video, index) => (
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
    ) : (
        <h1 className={cx('no-following')}>
            Bạn chưa theo dõi nhà sáng tạo nội dung nào
        </h1>
    );
}

export default Following;
