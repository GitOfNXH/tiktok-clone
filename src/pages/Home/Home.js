import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import style from './Home.module.scss';
import { getVideoList } from '~/services/videoService';
import VideoItem from '~/Components/VideoItem';
import {
    ChevronDownIcon,
    ChevronUpIcon,
    CloseRegularIcon,
} from '~/Components/Icons/Icons';
import Button from '~/Components/Button';

const cx = classNames.bind(style);

function Home() {
    const [videosList, setVideosList] = useState([]);
    const [commentActive, setCommentActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const commentBox = useRef();
    const videoRefs = useRef([]);
    const videosListRef = useRef();
    const lastScrollTime = useRef(0);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await getVideoList('for-you', 1);
                setVideosList(response);
            } catch (error) {
                console.log(error);
            }
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

    const handleCommentActive = () => {
        if (commentActive) {
            commentBox.current.style.transform = 'translateX(384px)';
        } else {
            commentBox.current.style.transform = 'translateX(0)';
        }
        setCommentActive(prev => !prev);
    };

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
                            handleCommentActive={handleCommentActive}
                            key={index}
                            data={video}
                        />
                    ))}
                </div>
            </div>
            {/* Aside*/}
            <aside className={cx('aside')} ref={commentBox}>
                {/* Controls */}
                <div className={cx('controls')}>
                    <Button className={cx('control')} onClick={handlePrevVideo}>
                        <ChevronUpIcon />
                    </Button>
                    <Button className={cx('control')} onClick={handleNextVideo}>
                        <ChevronDownIcon />
                    </Button>
                </div>

                {/* Comment box */}
                <div className={cx('comment-box')}>
                    <header className={cx('header')}>
                        <h3 className={cx('title')}>
                            Comments{' '}
                            <span className={cx('number')}>{`(160)`}</span>
                        </h3>
                        <div className={cx('close')}>
                            <CloseRegularIcon />
                        </div>
                    </header>
                    <div className={cx('body')}>
                        <p>
                            If you're new here, we recommend using Floating UI's
                            React DOM Interactions package instead of this
                            library. It offers a first class React experience
                            rather than being a wrapper around a vanilla library
                            and encourages much better accessibility practices
                            with more flexibility. If you want some
                            out-of-the-box styling and animations, and are
                            adding simple tooltips/popovers to your app, Tippy
                            will still work fine. For more advanced/headless
                            solutions, it's best to use Floating UI! ⚠️⚠️⚠️
                            Tippy.js is the complete tooltip, popover, dropdown,
                            and menu solution for the web, powered by Popper.
                            Tippy is an abstraction over Popper that provides
                            common logic involved in all types of elements that
                            pop out on top of the UI, positioned next to a
                            target or reference element. This is a React wrapper
                            for the core library, providing full integration
                            including headless rendering abilities. 🚀
                            Installation # npm npm i @tippyjs/react # Yarn yarn
                            add @tippyjs/react CDN:
                            https://unpkg.com/@tippyjs/react 🖲 Usage There are
                            two ways to use this component: Default: With the
                            built-in DOM rendering and optionally the default
                            CSS. This is complete "out of the box" behavior and
                            requires no setup. If you want something that just
                            works, this is for you. Headless: With React's DOM
                            rendering for improved usage with CSS-in-JS and
                            spring libraries. If you want greater control over
                            your poppers to integrate fully with design systems,
                            this is for you.Ngayf hom nay co ay muon di de mua
                            mot gayf hom nay co ay muon di de mua mot gayf hom
                            nay co ay muon di de mua mot gayf hom nay co ay muon
                            di de mua mot gayf hom nay co ay muon di de mua mot
                            blabla
                        </p>
                    </div>
                    <footer className={cx('footer')}>
                        <input
                            className={cx('input')}
                            placeholder='Add comment...'
                        />
                        <Button className={cx('post')}>post</Button>
                    </footer>
                </div>
            </aside>
        </main>
    );
}

export default Home;
